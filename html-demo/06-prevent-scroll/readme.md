# document滚动穿透
用户滚动时，页面有两种滚动类型：
1. document滚动
2. 可滚动的element滚动

如果滚动行为发生，则
1. 如果element可以滚动，那么滚动element
2. 如果element无法滚动，那么doucment响应滚动

什么情况下element无法滚动
1. 没有设置可滚动的overflow属性
2. 监听了回调，设置了preventDefault
3. 已经滚动到底部或者顶端

如何解决
1. body overflow hidden
2. 

# 滚动链
1. overscroll-behavior
2. 