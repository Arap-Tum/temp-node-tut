// first example
const  EventEmiter = require('events');

const customEmitter = new EventEmiter();

customEmitter.on('response',  (name, id)=> {
    console.log(`Data recieved ${name} With Id NUmber${id}`)
});

customEmitter.on('response',  ()=> {
    console.log(`Some other lodgic here `)
});

customEmitter.emit('response', 'john', 34);