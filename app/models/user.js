var User = DS.Model.extend({
  name:                  DS.attr('string'),
  email:                 DS.attr('string'),
  username:              DS.attr('string'),
  password:              DS.attr('string'),
  passwordConfirmation:  DS.attr('string'),
  apiKeys:               DS.hasMany('apiKey'),
  errors:                {}
});

export default User;
