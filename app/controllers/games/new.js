export default Em.ObjectController.extend({

  game: function() {
    return this.store.createRecord('game', {
      sampleTextId: this.get('model.id')
    });
  }.property('model'),

  showRace: false,

  actions: {
    countdownComplete: function() {
      this.set('showRace', true);
    },

    raceComplete: function(game, wpm) {
      var self = this;

      game.set('wpm', wpm);
      game.save().then(function() {
        self.transitionToRoute('games.show', game);
      })
    }

  }
})

