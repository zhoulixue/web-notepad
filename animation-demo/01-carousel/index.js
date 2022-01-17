import Carousel from './carousel';

const carousel = new Carousel({
  stayTime: 5000, // 节点暂停展示的时间
  duration: 600, // 节点运动时间
  direction: 'top', // 节点运动方向
});
carousel.init({
  firstNode: document.getElementById('container1'),
  secondNode: document.getElementById('container2'),
});
