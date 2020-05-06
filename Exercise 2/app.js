new Vue({
  el: '#exercise',
  data: {
    value: "test"
  },
  methods: {
    alertMe: function() {
      alert('Alert!');
    },
    updateValue: function(event) {
      this.value = event.target.value;
    }
  }
});
