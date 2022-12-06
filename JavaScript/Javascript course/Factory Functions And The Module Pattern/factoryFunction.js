import Events from 'eventemitter3';

const object = {};

Object.assign(object, Events.prototype);

object.on('event', payload => console.log(payload));

object.emit('event', 'some data'); // 'some data