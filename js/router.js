TypeFast.Router.map(function() {
  this.resource('game', { path: '/' });
});

TypeFast.GameRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('quote', Math.floor((Math.random()*3)+1));
  }
});
