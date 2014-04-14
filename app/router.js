var Router = Em.Router.extend();

Router.map(function() {
  this.resource('games', function() {
    this.route('new');
    this.route('show', { path: '/:id' });
  });

  this.resource('sessions', function() {
    this.route('logout');
    this.route('login');
  });

  this.resource('users', function() {
    this.route('signup');
    this.route('user', {
      path: '/user/:user_id'
    });
  });

  this.route('secret');
});

export default Router;
