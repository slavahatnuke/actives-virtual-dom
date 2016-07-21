var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');
var Connection = require('actives').Connection;

module.exports = function connect(state) {
    var node;
    var tree;
    return function (presentation) {
        tree = presentation(state);
        node = createElement(tree);

        Connection.subscribe(state, function (event, state) {
            var newTree = presentation(state);
            var patches = diff(tree, newTree);
            node = patch(node, patches);
            tree = newTree;
        });

        return node;
    };
};
