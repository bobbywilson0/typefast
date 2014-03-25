TypeFast.Router.map(function() {
  this.resource('game', { path: '/' });
});

TypeFast.GameRoute = Ember.Route.extend({
  actions: {
    startCountdown: function() {
      this.get('timer').start();
    }
  },
  model: function() {
    return this.store.find('quote', Math.floor((Math.random()*3)+1));
  },
  setupController: function(controller, model) {
    this.set('timer', TypeFast.Timer.create());

    controller.set('model', model)
    controller.set('timer', this.get('timer'));
  }
});
