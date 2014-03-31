var GameShowRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('game', params.id);
  }
});

export default GameShowRoute;
