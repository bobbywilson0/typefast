TypeFast.GameView = Ember.View.extend({
  keyDown: function(e) {
    if(this.get('controller.input').trim() == '' && e.keyCode === 32) {
      e.preventDefault();
    }
  }
})
