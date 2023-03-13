# animation
1. animation-name
2. animation-duration
3. animation-timing-function
4. animation-delay
5. animation-iteration-count
```css
infinite | <numner [0, ∞]>
```
6. animation-direction
```css
normal | reverse | alternate | alternate-reverse

```
7. animation-fill-mode
```css
// 动画分为 初始状态、等待期、动画执行期、完成期
// forwards控制完成期动画为最后一帧，backwords控制等待期动画为第一帧
none | forwards | backwords | both
```
8. animtion-play-state
```css
paused | running
```

# animation 多动画

```css
div {
  height: 100px;
  width: 100px;
  background-color: red;
  position: relative;
  top: 20px;
  animation: fadeIn 1s linear both, float 0.5s linear 1s infinite alternate both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes float {
  from {
    top: 10px;
  }

  to {
    top: 20px;
  }
}
```
# 动画触发与暂停
html
```html
<div class="example animate"></div>
```
css
```css
.example {
  height: 100px;
  width: 100px;
  background-color: red;
  position: relative;
  top: 20px;
  animation: float 0.5s linear 1s infinite alternate both;
}

.animate {
  animation-play-state: paused;
}

.active.animate {
  animation-play-state: running;
}

@keyframes float {
  from {
    top: 10px;
  }

  to {
    top: 20px;
  }
}
```
js
```js
setTimeout(() => {
  document.getElementsByClassName('example')[0].classList.add('active')
}, 2000);
```
# animation-timing-function
## cubic-bzezier(x1,y1,x2,y2)
通过 (0,0)(x1,y1)(x2,y2)(1,1)四个点设置的速度曲线，其中x在[0,1]范围内，y的范围不限

## steps
steps可以让动画不连续。    
1. start 表示分段结束的时候，时间才开始走
2. end 表示分段开始的时候，时间跟着一起走
html
```html
<button>订单提交中<span class="dotting"></span></button>
```
css
```css
.dotting {
  display: inline-block;
  min-width: 2px;
  min-height: 2px;
  margin-right: 8px;
  box-shadow: 2px 0, 6px 0, 10px 0;
  animation: dot 4s infinite step-start both;
}

@keyframes dot {
  25% {
    box-shadow: none;
  }

  /* 0个点 */
  50% {
    box-shadow: 2px 0;
  }

  /* 1个点 */
  75% {
    box-shadow: 2px 0, 6px 0;
  }

  /* 2个点 */
}
```
## frames
frames chrome都不支持了，我也不看了

