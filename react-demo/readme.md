# describing the UI
* jsx如何使用变量，函数
* jsx如何加载列表
* 如何声明和使用组件
* 如何向子组件传递数据和方法
* props如何传递所有参数
* 组件如何传递tag
* 条件渲染

# adding interactivity
* 如何使用事件
* 如何向子组件传递事件
* 如何阻止冒泡、阻止元素默认事件
* 如何使用state
* state 快照是什么，快照有什么用
* 如何在 next render之前多次更新state
* state 队列是怎么更新的
* 如何更新对象state, use-immer是什么
* 如何更新数组state

# managing state
* state精简原则
1. 不要设置两个相同意思的变量
2. 不要设置可以用另外一个变量表示的变量
3. 不要设置可以用另外一个变量的否定值表示的变量
* state结构设置原则
1. 如果几个state总是一起改变，可以合并成一个
2. 避免矛盾的state
3. 避免多余的state
4. 避免重复的state
5. 避免深度嵌套的state
* 组件共享state
1. 变量提升
* 保持和重置state
1. state和组件在jsx树中的位置绑定
2. 相同位置的相同组件，state不会重置
3. 相同位置的不同组件，state会重置
4. 手动重置state，可以在不同的位置渲染，也可以使用key
* userReducer, userImmerReducer 用法
* context 用法
* reducer和context结合使用

# escape hatches
* refs的使用
1. setting state re-renders a components. changeing a ref does not.
2. settimeout/setinterval
3. DOM
* 使用ref操控DOM
1. ref 使用函数存储DOM
2. component DOM nodes, forwardRef, userImperativeHandle
3. flushSync
* 副作用同步
1. react update screen first.then effect runs.
2. do not set state in effect
3. dependencies/cleanup()
4. cleanup/run cleanup before the effect runs agian/cleanup widgets/subscribing events/triggering animations/fetch data
5. useMemo
* 什么时候不需要effect
1. updating state based on props
2. caching expensive calcaulations
3. resetting all state when a prop changes
4. sharing logic between event handlers
5. sending a post request
6. chains of computations
7. initializing the application
8. notifying parent components about state change
9. passing data to the parent
10. subscribing to extenal store
11. featching data
* effect的生命周期
1. userEffectEvent
2. 








