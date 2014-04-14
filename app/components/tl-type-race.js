export default Em.Component.extend({
  init: function() {
    this.set('startedAt', new Date());
    this._super();
  },
  currentIndex: 0,
  input: '',

  advance: function() {
    if (this.get('isValid')) {
      this.set('currentIndex', this.get('currentIndex') + 1);
      this.set('input', '');
    }
  }.observes('input', 'currentWord'),

  currentWord: function() {
    return this.get('words')[this.get('currentIndex')];
  }.property('words', 'currentIndex'),

  isValid: function() {
    if (this.get('input').trim() === this.get('currentWord') &&
        this.get('input').trim() !== '') {
      return true;
    } else {
      return false;
    }
  }.property('input', 'currentWord'),

  raceComplete: function() {
    if (this.get('currentIndex') === this.get('words').length) {
      this.set('finishedAt', new Date());
      this.sendAction('action', this.get('game'), this.get('wpm'));
    }
  }.observes('currentIndex'),

  elapsedSeconds: function() {
    return (this.get('finishedAt') - this.get('startedAt')) / 1000;
  }.property('finishedAt'),

  words: function() {
    return this.get('text').split(' ');
  }.property(),

  wordUnits: function() {
    return this.get('text').length / 5;
  }.property(),

  wpm: function() {
    return (this.get('wordUnits') / (this.get('elapsedSeconds') / 60)).toFixed(2);
  }.property(),

  keyDown: function(e) {
    if(this.get('input').trim() === '' && e.keyCode === 32) {
      e.preventDefault();
    }
  }

});
