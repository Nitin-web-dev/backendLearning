const EventEmitter = require('events');
const { lstat } = require('fs');
const event = new EventEmitter();

event.on('response',() => {
    console.log(`data receive `)
})
event.on('response',(name, id) => {
    console.log(`data receive ${id} => ${name} `)
})

event.emit('response','john',123);
