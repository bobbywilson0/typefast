TypeFast.Timer = Ember.Object.extend({
  timeLeft: "3",
  totalTime: 3000,
  raceComplete: false,
  countdownComplete: false,
  elapsedTime: null,

  start: function() {
    var _this = this;
    this._startedAt = new Date();
    this._intervalId = setInterval(function() { _this.updateTimeLeft.apply(_this); }, 100);
  },

  updateTimeLeft: function() {
    var now = new Date();
    var diff = now - this._startedAt;
    var delta = this.get('totalTime') - diff;
    this.set('timeLeft', this.msToString(delta));

    if (delta <= 0) {
      clearInterval(this._intervalId);
      this.set('countdownComplete', true);
      this.startStopwatch();
    }
  },

  msToString: function(ms) {
    if (ms > 0) {
      return parseInt(ms/1000).toString();
    } else {
      return "0";
    }
  },

  startStopwatch: function() {
    this._stopwatchStartedAt = new Date();
  },

  stopStopwatch: function() {
    var now = new Date();
    this.set('elapsedTime', this.msToString(now - this._stopwatchStartedAt));
    this.set('raceComplete', true);
  }

});

