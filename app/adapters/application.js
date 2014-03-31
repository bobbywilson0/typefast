var ApplicationAdapter = DS.RESTAdapter.extend({
  defaultSerializer: '-active-model',
  host: 'http://localhost:3000',
  pathForType: function(type) {
    var underscored = Ember.String.underscore(type)
    return Ember.String.pluralize(underscored);
  }
});

export default ApplicationAdapter;
