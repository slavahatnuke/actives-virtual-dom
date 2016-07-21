var h = require('virtual-dom/h');

module.exports = function CounterView({counter, onUp}) {
    return h('div', {
        style: {
            textAlign: 'center',
            lineHeight: (100 + counter) + 'px',
            border: '1px solid red',
            width: (100 + counter) + 'px',
            height: (100 + counter) + 'px'
        },
        onclick: onUp
    }, [String(counter)]);
};