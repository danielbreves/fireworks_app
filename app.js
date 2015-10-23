(function() {

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return {

    events: {
      'app.activated':    'appActivated',
      'pane.activated':   'start',
      'pane.deactivated': 'stop'
    },

    appActivated: function() {
      this.popover();
    },

    start: function() {
      this.audio = this.audio || this.$('audio')[0];
      this.audio.play();

      this.intId = setInterval(function() {
        this.popover({
          width: getRandomInt(0, 1500),
          height: getRandomInt(0, 1500)
        });
      }.bind(this), 100);
    },

    stop: function() {
      clearInterval(this.intId);
      this.audio.pause();
    }

  };

}());
