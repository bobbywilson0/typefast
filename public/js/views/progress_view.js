TypeFast.ProgressView = Ember.View.extend({
  updateProgress: function() {
    this.$().width(this.get('controller.progress') + '%');
  }.observes('controller.progress').on('didInsertElement')
})
