var cmp = {
  data: function() {
    return {
      isNormal: true
    };
  },
  methods:{
    changeStatus: function(){
      return this.isNormal ? 'Normal' : 'Critical';
    }
  },
  template:  '<p>Server Status: {{ changeStatus() }} | Health | <button @click="isNormal = !isNormal">Change</button></p>'
};

new Vue({
  el: "#app",
  components:{
    'von-cmp':cmp
  }
})

new Vue({
  el: '#app2',
  components:{
    'von-cmp':cmp
  }
})
