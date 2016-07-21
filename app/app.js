var Box = require('actives').Box;
var connect = require('../index');

var Counter = require('./Counter');
var CounterView = require('./CounterView');
var CounterButtonView = require('./CounterButtonView');

var box = Box.create();
box.add('Counter', () => new Counter());

box.connect('CounterButtonsState', 'Counter')
    .state(({Counter}) => {
        return {
            x: Counter.get()
        };
    })
    .actions(({Counter}) => {
        return {
            onUp: () => {
                Counter.up();
            },
            onDown: () => Counter.down()
        };
    });

box.connect('CounterState', ['Counter', 'CounterButtonsState'])
    .state(({CounterButtonsState, Counter}) => {
        return {
            counter: Counter.get(),
            buttons: CounterButtonView(CounterButtonsState)
        }
    });

box.add('CounterView', ({CounterState}) => connect(CounterState)(CounterView));

setInterval(function () {
    box.Counter.up();
}, 1000);

document.getElementById('app').appendChild(box.CounterView);

