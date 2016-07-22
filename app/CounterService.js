module.exports = function (Counter) {

    this.interval = null;

    this.start = function () {
        if (!this.interval) {
            this.interval = setInterval(function () {
                Counter.up();
            }, 1000);
        }
    };

    this.stop = function () {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    this.toggle = function () {
        if (this.interval) {
            this.stop();
        } else {
            this.start();
        }
    }
}