var connect = require('../index');

var Counter = require('./Counter');
var CounterView = require('./CounterView');

var box = require('actives').Box.create();

box.add('Counter', () => new Counter());

box.connect('CounterState', 'Counter')
    .state(({Counter}) => {
        return {
            counter: Counter.counter
        }
    })
    .actions(({Counter}) => {
        return {
            onUp: () => Counter.up()
        };
    });

setInterval(function () {
    box.Counter.up();
}, 1000);

box.add('CounterView', ({CounterState}) => connect(CounterState)(CounterView));
document.getElementById('app').appendChild(box.CounterView);
