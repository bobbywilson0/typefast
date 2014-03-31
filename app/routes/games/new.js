var GamesNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('sampleText', 1);
  },

  actions: {
    raceComplete: function(model) {
      this.transitionTo('game', model);
    }
  }
});

export default GamesNewRoute;
