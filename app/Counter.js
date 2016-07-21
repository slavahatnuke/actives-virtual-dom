module.exports = function Counter() {
    this.counter = 0;
    this.up = function () {
        this.counter++;
    }
};
