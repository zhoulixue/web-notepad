### Proxy 和 Object.defineProperty

1. Object.defineProperty 可以监控数组原有下标，但是新增的监控不到
2. Object.defineProperty 不能监控 push
3. Proxy 可以监控新增属性
4. Proxy 可以监控数组下标，push

