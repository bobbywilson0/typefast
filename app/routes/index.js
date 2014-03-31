var IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('games.new');
  }
});

export default IndexRoute;
