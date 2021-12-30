const events = require('events')

const emitter = new events.EventEmitter()

// on
const listener1 = (a, b, c) => console.log('on testEvent', a, b, c)
emitter.on('testEvent', listener1)
// addListener
emitter.addListener('testEvent', () => console.log('listen testEvent'))
// setMaxListeners 修改最多可以绑定的事件数，默认最多绑定10个
emitter.setMaxListeners(20)
// listeners
const listeners = emitter.listeners('testEvent')
console.log(listeners)
// listenerCount
const listenersCount = emitter.listenerCount('testEvent')
console.log(listenersCount)
// once
emitter.once('testEvent', () => console.log('once testEvent'))
// emit
emitter.emit('testEvent', 1, 2, 3)
emitter.emit('testEvent')
// removeListener
emitter.removeListener('testEvent', listener1)
emitter.emit('testEvent')
// removeAllListeners
emitter.removeAllListeners('testEvent')
emitter.removeAllListeners()
emitter.emit('testEvent')

// EventEmitter类自身的事件 newListener removeListener
emitter.on('newListener', (e, f) => {
  console.log('newListener', e, f)
})
emitter.on('removeListener', (e, f) => {
  console.log('removeListener', e, f)
})
const l = () => {}
emitter.on('testEvent', l)
emitter.removeListener('testEvent', l)