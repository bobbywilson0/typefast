export default Em.ObjectController.extend({
  needs: ['sessions'],
  actions: {
    createUser: function() {
      var data, user, _this;
      _this = this;

      data = this.getProperties('firstName',
                                'lastName',
                                'email',
                                'username',
                                'password',
                                'passwordConfirmation');

      data.name = data.firstName + ' ' + data.lastName;

      user = this.get('model');

      user.setProperties(data);

      user.save().then(function(user) {
        var sessionsController;

        // clear the form data
        _this.setProperties({
          name:                  null,
          email:                 null,
          username:              null,
          password:              null,
          passwordConfirmation:  null
        });

        sessionsController = _this.get('controllers.sessions');
        sessionsController.setProperties({
          usernameOrEmail: data.username,
          password:        data.password
        });

        user.deleteRecord();

        sessionsController.send('loginUser');
      }, function(error) {
        if (error.status === 422) {
          var errs = JSON.parse(error.responseText);
          user.set('errors', errs.errors);
        }
      });
    }
  }
})
