export default Ember.View.extend({
  wordIndex: Em.computed.alias('_parentView.contentIndex'),
  tagName: "span",
  classNameBindings: ['isHighlighted'],
  isHighlighted: function() {
    if(this.get('parentView.currentIndex') === this.get('wordIndex')) {
      return true;
    }
  }.property('parentView.currentIndex')
})

