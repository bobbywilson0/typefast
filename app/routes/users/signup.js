var UsersSignupRoute = Em.Route.extend({
  model: function() {
    return this.store.createRecord('user');
  }
});

export default UsersSignupRoute;
