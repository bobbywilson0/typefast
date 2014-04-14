var ApplicationController = Em.Controller.extend({
  needs: ['sessions'],

  currentUser: function() {
    return this.get('controllers.sessions.currentUser');
  }.property('controllers.sessions.currentUser'),

  isAuthenticated: function() {
    return !Em.isEmpty(this.get('controllers.sessions.currentUser'));
  }.property('controller.sessions.currentUser')
});

export default ApplicationController;
