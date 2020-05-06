import Vue from 'vue'
import App from './App.vue'

Vue.mixin({
    created() {
      console.log('Global mixin created!');
    }
});

Vue.filter('lower', (value) => {return value.toLowerCase()});

new Vue({
  el: '#app',
  render: h => h(App)
})
