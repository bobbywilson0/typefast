var ApplicationRoute = Em.Route.extend({
  actions: {
    logout: function() {
      this.controllerFor('sessions').reset();
      this.transitionTo('sessions');
    }
  }
});

export default ApplicationRoute;
