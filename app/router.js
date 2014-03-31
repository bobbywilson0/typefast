var Router = Ember.Router.extend();

Router.map(function() {
  this.resource('games', function() {
    this.route('new');
    this.route('show', { path: '/:id' });
  });
});

export default Router;
