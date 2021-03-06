var h = require('virtual-dom/h');

module.exports = function CounterView({counter, onUp, onDown, onToggle}) {
    return h('div', {}, [

        h('div', {}, [
            h('button', {
                onclick: onUp
            }, ['up']),

            h('button', {
                onclick: onDown
            }, ['down']),

            h('button', {
                onclick: onToggle
            }, ['toggle'])
        ]),

        h('h3', {}, [counter]),

        h('div', {
            style: {
                textAlign: 'center',
                lineHeight: (100 + counter) + 'px',
                border: '1px solid red',
                width: (100 + counter) + 'px',
                height: (100 + counter) + 'px'
            }
        }, [String(counter)])
    ]);
};
