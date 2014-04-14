var SessionRoute = Em.Route.extend({
  setupController: function(controller) {
    controller.reset();
  },

  beforeModel: function() {
    if(!Em.isEmpty(this.controllerFor('sessions').get('token'))) {
      this.transitionTo('secret');
    }
  }
});

export default SessionRoute;
