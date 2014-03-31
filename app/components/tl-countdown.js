export default Ember.Component.extend({
  className: 'tl-countdown',
  isCompleted: false,

  showHideButton: function() {
    if (this.get('startedAt') === undefined) {
      return "display: block";
    } else {
      return "display: none";
    }
  }.property('startedAt'),

  totalDuration: function() {
    return this.get('seconds') * 1000;
  }.on('init').property(),

  updateTime: function() {
    Em.run.later(this, function() {
      var now = new Date();
      var elapsed = now - this.get('startedAt');
      var delta = this.get('totalDuration') - elapsed;
      this.set('seconds', this.msToString(delta));

      if (this.get('seconds') === '0') {
        this.set('isCompleted', true);
        this.sendAction('action');
      } else {
        this.updateTime();
      }
    }, 100);
  }.observes('startedAt'),

  msToString: function(ms) {
    return parseInt(ms/1000).toString();
  },

  actions: {
    start: function() {
      this.set('startedAt', new Date());
    }
  }

});
