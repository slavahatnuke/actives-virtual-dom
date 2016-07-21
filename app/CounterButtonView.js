var h = require('virtual-dom/h');

module.exports = function CounterButtonView({onUp, onDown}) {
    return h('div', {}, [
        h('button', {
            onclick: onUp
        }, ['up']),

        h('button', {
            onclick: onDown
        }, ['down'])
    ]);
};
