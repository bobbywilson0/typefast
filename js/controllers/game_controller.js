TypeFast.GameController = Ember.ObjectController.extend({
  timer: null,
  initTimer: function() {
    this.set('timer', TypeFast.Timer.create());
  }.on('init'),
  input: '',
  currentIndex: 0,
  words: function() {
    return this.get('body').split(' ');
  }.property('body'),
  currentWord: function() {
    return this.get('words')[this.get('currentIndex')] || '';
  }.property('words', 'currentIndex'),
  isValid: function() {
    var input = this.get('input'),
        currentWord = this.get('currentWord');
    if (input.trim() === currentWord && input.trim() != '') {
      this.set('currentIndex', this.get('currentIndex') + 1);
      if (this.get('currentIndex') === this.get('words').length) {
        this.get('timer').stopStopwatch();
        var wordUnits = this.get('body').length / 5;
        this.set('result', (wordUnits / (this.get('timer').elapsedTime / 60)).toFixed(2));
      }
      this.set('input', '');
      return true;
    } else {
      return false;
    }
  }.property('input', 'currentWord'),
  timeLeftBinding: 'timer.timeLeft',
  progress: function() {
    return (this.get('currentIndex') / this.get('words').length) * 100;
  }.property('currentIndex'),
  resultBinding: 'result',
  elapsedTime: function() { return this.get('timer.elapsedTime')}.property('elapsedTime'),
  showResult: Em.computed.alias('timer.raceComplete'),
  showQuote: Em.computed.alias('timer.countdownComplete'),
  actions: {
    startCountdown: function() {
      this.get('timer').start();
    }
  }

});

