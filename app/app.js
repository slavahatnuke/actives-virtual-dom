var Box = require('actives').Box;
var connect = require('../index');

var Counter = require('./Counter');
var CounterView = require('./CounterView');

var box = Box.create();
box.add('Counter', () => new Counter());

box.connect('CounterState', 'Counter')
    .state(({Counter}) => {
        return {
            counter: Counter.counter
        }
    })
    .actions(({Counter}) => {
        return {
            onUp: () => Counter.up(),
            onDown: () => Counter.down()
        };
    });

box.add('CounterView', ({CounterState}) => connect(CounterState)(CounterView));

setInterval(function () {
    box.Counter.up();
}, 1000);

document.getElementById('app').appendChild(box.CounterView);

