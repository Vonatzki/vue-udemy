new Vue({
  el: '#exercise',
  data: {
    title: "Exercise 4",
    toggleHighlight: false,
    effectClasses: {
        highlight: false,
        shrink: true
    },
    classInput: "highlight",
    classInput2: "",
    inputBoolean: false,
    styleValue: "green",
    progressBarWidth: 0,
    progressBarMessage: ""
  },
  methods: {
    startEffect: function() {
      let vm = this;
      setInterval(function() {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
        console.log('highlight: ' + vm.effectClasses.highlight);
        console.log('shrink: ' + vm.effectClasses.shrink);
      }, 10)
    },
    startProgress: function() {
      let vm = this;
      let finalWidth = 500;
      vm.progressBarMessage = "";
      let intervalEvent = setInterval(function() {
        vm.progressBarWidth += 15;
        vm.progressBarMessage = Math.round(vm.progressBarWidth / finalWidth * 100) + " %"
        if (vm.progressBarWidth >= finalWidth) {
          vm.progressBarWidth = 0;
          vm.progressBarMessage = "Done!";
          clearInterval(intervalEvent);
        }
      }, 50)
    }
  }
});
