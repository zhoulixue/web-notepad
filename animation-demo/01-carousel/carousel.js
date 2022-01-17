import { sleep } from './utils';

const SIZE_MAP = {
  top: 'height',
  bottom: 'height',
  left: 'width',
  right: 'width',
};
const POSITION_MAP = {
  top: x => `translateY(-${x}px)`,
  bottom: x => `translateY(${x}px)`,
  left: x => `translateX(-${x}px)`,
  right: x => `translateX(${x}px)`,
};

export default class Carousel {
  constructor(opt = {}) {
    const {
      stayTime = 5000, // 节点暂停展示的时间
      duration = 600, // 节点运动时间
      direction = 'top', // 节点运动方向
    } = opt;
    this.stayTime = stayTime;
    this.duration = duration;
    this.direction = direction;
  }

  /**
   * 初始化时必须传入重复两次的两个子元素
   * 子元素样式与direction相关:
   * top => top: itemHeight; left: 0; position: absolute;
   * bottom => bottom: itemHeight; left: 0; position: absolute;
   * left => left: itemWidth; top: 0; position: absolute; display: flex;
   * right => right: itemWidth; top: 0; position: absolute; display: flex;
   */
  init({ firstNode, secondNode }) {
    if (!firstNode || !secondNode) {
      console.warn('[initial error]Carousel must have two same DOM list');
      return;
    }
    const len = firstNode.childElementCount;
    if (len <= 0) {
      return;
    }
    const { direction } = this;
    const rect = firstNode.getBoundingClientRect();
    const size = rect[SIZE_MAP[direction]];
    const itemSize = size / len;
    this.size = size; // 单个子元素的大小
    this.itemSize = itemSize; // 单个节点的大小
    this.setPosition(firstNode, itemSize, direction); // 设置第一个节点首先显示
    // 只有一个节点时不设置动画
    if (len <= 1) {
      return;
    }
    this.nodeAction({
      currentTarget: firstNode,
      nextTarget: secondNode,
      initSize: itemSize,
      delay: this.stayTime,
    });
  }

  // 设置节点位置
  setPosition(target, distance) {
    const { direction } = this;
    const nodeTarget = target;
    const position = POSITION_MAP[direction](distance);
    nodeTarget.style.transform = position;
  }

  async nodeAction({
    currentTarget,
    nextTarget,
    initSize = 0,
    delay = 0,
  }) {
    const { size, stayTime, itemSize } = this;
    await sleep(delay); // 延迟时间
    let moveSize = initSize;
    while (moveSize <= size) {
      // 当前元素最后一个节点开始运动时，下一个元素开始运动
      if (moveSize === size) {
        this.nodeAction({
          currentTarget: nextTarget,
          nextTarget: currentTarget,
        });
      }
      /* eslint-disable no-await-in-loop */
      await this.move({ target: currentTarget, movedSize: moveSize });
      await sleep(stayTime);
      /* eslint-enable no-await-in-loop */
      moveSize += itemSize;
    }
  }

  move({ target, movedSize = 0 }) {
    const { itemSize, duration, direction } = this;
    return new Promise((resolve) => {
      let moveSize = 0;
      const interval = 10;
      const timer = setInterval(() => {
        if (moveSize >= itemSize) {
          clearInterval(timer);
          resolve(null);
        } else {
          moveSize += itemSize / (duration / interval);
          this.setPosition(target, moveSize + movedSize, direction);
        }
      }, interval);
    });
  }
}
