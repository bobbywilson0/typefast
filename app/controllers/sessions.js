export default Em.Controller.extend({
  init: function() {
    this._super();
    if (Em.$.cookie('access_token')) {
      Em.$.ajaxSetup({
        headers: {
          'Authorization': 'Bearer ' + Em.$.cookie('access_token')
        }
      });
    }
  },

  attemptedTranstion: null,
  token: Em.$.cookie('access_token'),
  currentUser: Em.$.cookie('auth_user'),

  tokenChanged: function() {
    if (Em.isEmpty(this.get('token'))) {
      Em.$.removeCookie('access_token');
      Em.$.removeCookie('auth_user');
    } else {
      Em.$.cookie('access_token', this.get('token'));
      Em.$.cookie('auth_user', this.get('currentUser'));
    }
  }.observes('token'),

  reset: function() {
    this.setProperties({
      usernameOrEmail: null,
      password: null,
      token: null,
      currentUser: null
    });
    Em.$.ajaxSetup({
      headers: {
        'Authorization': 'Bearer none'
      }
    });
  },

  actions: {
    loginUser: function() {
      var _this = this;

      var attemptedTrans = this.get('attemptedTransition');
      var data = this.getProperties('username_or_email', 'password');

      this.setProperties({
        usernameOrEmail: null,
        password: null
      });

      Em.$.post('http://localhost:3000/session', data).then(function(response) {
        console.log('response', response);
        Em.$.ajaxSetup({
          headers: {
            'Authorization': 'Bearer ' + response.apiKey.accessToken
          }
        });

        var key = _this.get('store').createRecord('apiKey', {
          accessToken: response.apiKey.accessToken
        });

        _this.store.find('user', response.apiKey.userId).then(function(user) {

          _this.setProperties({
            token: response.apiKey.accessToken,
            currentUser: user.getProperties('username', 'name', 'email')
          });

          key.set('user', user);
          key.save();

          user.get('apiKeys').content.push(key);

          if (attemptedTrans) {
            attemptedTrans.retry();
            _this.set('attemptedTransition', null);
          } else {
            _this.transitionToRoute('secret');
          }

        });
      }, function(error) {
        if (error.status === 401) {
          console.log('wrong username or password, please try again');
        }
      });
    }
  }
});
