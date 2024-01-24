var event = require("events");
const { EventEmitter } = require("stream");
var event_emitter = new EventEmitter();
var my_event_handler = function(){
    console.log("handling generated event");
}
event_emitter.on('run',my_event_handler);
event_emitter.emit('run');