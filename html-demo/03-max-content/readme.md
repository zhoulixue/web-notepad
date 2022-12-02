# width: fill-available
充分利用可用空间
```html
  <div>
    width: fill-available 可以让元素的宽度表现为默认的block水平元素的尺寸表现。
  </div>
```
```css
  div {
    display: inline-block;
    /* 宽度如块状元素般表现 */
    width: -webkit-fill-available;
    width: -moz-fill-available;
    width: -moz-available;
    /* FireFox目前这个生效 */
    width: fill-available;
  }
```
# width: max-content
缠裹容器限制，最大内用宽度
```html
  <div>
    display:inline-block具有收缩特性，但是，当（例如这里的）描述文字超过一行显示的时候，其会这行，不会让自身的宽度超过父级容器的可用空间的，但是，width:max-content就不知酱样子哦咯！表现得好像设置了white-space:nowrap一样，科科！
  </div>
```
```css
  div {
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
  }
```
# width: min-content
收缩到最小，采用内部元素最小宽度值最大的元素宽度作为容器的最终宽度
```html
  <div>
    display:inline-block具有收缩特性，但这里宽度随文字。而width:min-content随图片
  </div>
```
```css
  div {
    width: -webkit-min-content;
    width: -moz-min-content;
    width: min-content;
  }
```
# width:fit-content
shrink-to-fit

```html
  <div class="box">
    display:inline-block居中要靠父元素，而width:fit-content直接margin:auto.
  </div>
```

```css
  .box {
    margin: auto;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
  }
```