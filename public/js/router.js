TypeFast.Router.map(function() {
  this.resource('game', { path: '/' });
});

TypeFast.GameRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('quote', Math.floor((Math.random()*3)+1));
  },
  setupController: function(controller, model) {
    controller.set('model', model)
    controller.set('timer', TypeFast.Timer.create());
  }
});
