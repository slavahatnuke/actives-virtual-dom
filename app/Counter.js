module.exports = function Counter() {
    this.counter = 0;

    this.get = function () {
        return this.counter;
    }

    this.up = function () {
        console.log('up');
        this.counter++;
    };

    this.down = function () {
        this.counter--;
    }
};
