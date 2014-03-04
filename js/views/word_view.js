TypeFast.WordView = Ember.View.extend({
  tagName: "span",
  classNameBindings: ['isHighlighted'],
  isHighlighted: function() {
    if(this.get('controller.currentIndex') === this.get('_parentView.contentIndex')) {
      return true;
    }
  }.property('controller.currentIndex')
})

