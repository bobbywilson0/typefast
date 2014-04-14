var ApiKey = DS.Model.extend({
  accessToken: DS.attr('string'),
  user:        DS.belongsTo('user', {
    async: true
  })
});

export default ApiKey;
