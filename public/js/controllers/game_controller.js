TypeFast.GameController = Ember.ObjectController.extend({
  timer: null,
  input: '',
  currentIndex: 0,
  words: function() {
    return this.get('body').split(' ');
  }.property('body'),
  currentWord: function() {
    return this.get('words')[this.get('currentIndex')] || '';
  }.property('words', 'currentIndex'),
  advanceWord: function() {
    if (!this.get('isValid')) { return; }
    this.set('currentIndex', this.get('currentIndex') + 1);
    this.set('input', '');
  }.observes('isValid'),
  endGame: function() {
    if (this.get('currentIndex') === this.get('words').length) {
      this.get('timer').stopStopwatch();
      var wordUnits = this.get('body').length / 5;
      this.set('result', (wordUnits / (this.get('timer').elapsedTime / 60)).toFixed(2));
    }
  }.observes('currentIndex'),
  isValid: function() {
    var input = this.get('input'),
        currentWord = this.get('currentWord');

    if (input.trim() === currentWord && input.trim() != '') {
      return true;
    } else {
      return false;
    }
  }.property('input', 'currentWord'),
  timeLeft: function() {
    return this.get('timer').timeLeft;
  }.property('timer.timeLeft'),
  progress: function() {
    return (this.get('currentIndex') / this.get('words').length) * 100;
  }.property('currentIndex'),
  result: function() {
    return this.get('result');
  }.property('result'),
  elapsedTime: function() { return this.get('timer.elapsedTime')}.property('elapsedTime'),
  showResult: Em.computed.alias('timer.raceComplete'),
  showQuote: Em.computed.alias('timer.countdownComplete'),
  actions: {
    startCountdown: function() {
      this.get('timer').start();
    }
  }

});

