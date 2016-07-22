var Box = require('actives').Box;
var connect = require('../index');

var Counter = require('./Counter');
var CounterView = require('./CounterView');
var CounterService = require('./CounterService');

var box = Box.create();
box.add('Counter', () => new Counter());
box.add('CounterService', ({Counter}) => new CounterService(Counter));

box.connect('CounterState', 'Counter')
    .state(({Counter}) => {
        return {
            counter: Counter.get()
        }
    })
    .actions(({Counter, CounterService}) => {
        return {
            onUp: () => Counter.up(),
            onDown: () => Counter.down(),
            onToggle: () => CounterService.toggle()
        };
    });

box.add('CounterView', ({CounterState}) => connect(CounterState)(CounterView));

document.getElementById('app').appendChild(box.CounterView);

