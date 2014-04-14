var ApplicationAdapter = DS.RESTAdapter.extend({
  defaultSerializer: '-active-model',
  host: 'http://localhost:3000',
  pathForType: function(type) {
    var underscored = Em.String.underscore(type);
    return Em.String.pluralize(underscored);
  }
});

export default ApplicationAdapter;
