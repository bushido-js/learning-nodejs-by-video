const { dirxml } = require('console')
const EventEmitter = require('events')

// const emitter = new EventEmitter()

// emitter.on('anything', (data) => { //Добавялем прослушку события
//   console.log('ON: anything', data);
// })

// emitter.emit('anything', {a: 1}) // 1й название события, 2й название конфигурации, какие-то данные
// emitter.emit('anything', {b: 2})

// setTimeout(() => {
//   emitter.emit('anything', {c: 3})
// }, 1500)

class Dispatcher extends EventEmitter { // заводим класс и наследуем его от класса EventEmitter, чтобы создавать собсвтенные методы
  subscribe(eventName, cb) {
    console.log('[Subscribe...]')
    this.on(eventName, cb)
  }

  dispatch(eventName, data) {
    console.log('[Dispatching...]')
    this.emit(eventName, data)
  }
}

const dis = new Dispatcher()

dis.subscribe('aa', data => {
  console.log('ON: aa', data);
} )

dis.dispatch('aa', {aa: 22})
