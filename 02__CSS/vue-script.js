new Vue({
  el: "#app",
  data: {
    title: "CSS Styling with Vue!",
    attachRed: false,
    colorAttr: 'green',
    colorClass: 'green',
    width: 100,
  },
  computed: {
    divClasses: function() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      }
    },
    myStyle: function() {
      return {
        backgroundColor: this.colorClass,
        width: this.width + 'px'
      }
    }
  }
})
