var AuthenticatedRoute = Em.Route.extend({
  beforeModel: function(transition) {
    if (Em.isEmpty(this.controllerFor('sessions').get('token'))) {
      return this.redirectToLogin(transition);
    }
  },

  redirectToLogin: function(transition) {
    this.controllerFor('sessions').set('attemptedTransition', transition);
    return this.transitionTo('sessions');
  },

  actions: {
    error: function(reason, transition) {
      if (reason.status === 401) {
        this.redirectToLogin(transition);
      } else {
        console.log('unknown problem');
      }
    }
  }
});

export default AuthenticatedRoute;
