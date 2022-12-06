import Events from 'eventemitter3';

// const object = {};

// Object.assign(object, Events.prototype);

// object.on('event', payload => console.log(payload));

// object.emit('event', 'some data'); // 'some data

const modelMixin = Object.assign({
    attrs: {},
    set (name, value) {
        this.attrs[name] = value;

        this.emit('change', {
            prop: name,
            value: value
        });
    },

    get (name) {
        return this.attrs[name];
    }
}, Events.prototype);

const george = { name: 'George' };
const model = Object.assign(george, modelMixin);

model.on('change', data => console.log(data));

model.set('name', 'Sam');