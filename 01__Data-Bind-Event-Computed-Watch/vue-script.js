new Vue({
  el: "#app",
  data: {
    name: "",
    x: 0,
    y: 0,
    title: "Hello World!",
    link: "http://google.com",
    clickCount: 0,
    clickCountSecond: 0,
    finishedLink: '<a href="http://google.com">Google</a>'
  },

  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    },
    sayHello: function() {
      this.title = 'Hello!';
      return this.title;
    },
    addCount: function(step, event) {
      this.clickCount += step;

    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function(event) {
      alert('Alert!');
    },
    result: function() {
      return this.clickCount > 10 ? "Greater than 10" : "Less than 10";
    }
  },
  computed: {
    output: function() {
      return this.clickCount > 10 ? "Greater than 10" : "Less than 10";
    }
  },
  watch: {
    clickCount: function(value) {
      var vm = this;
      setTimeout(function() {
        vm.clickCount = 0;
      }, 2000)
    }
  }
})
