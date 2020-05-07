import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  data: {
    servers: [
      {id:1, name:'Foo', status:'Normal'},
      {id:2, name:'Bar', status:'Critical'},
      {id:3, name:'Baz', status:'Normal'},
      {id:4, name:'Bax', status:'Critical'}
    ],
    selectedServer:null
  },
  methods:{
      selectServer(server) {
        console.log('Server ID ' + server.id + ' selected!');
        this.selectedServer = server;
        this.$emit('serverSelected', server);
      },
      changeAlltoNormal() {
        for (var serverIndex in this.servers) {
          let server = this.servers[serverIndex];

          console.log('Seting server ID ' + server.id + ' to status Normal...');
          server.status = 'Normal';
        }
      },
      changeAlltoCritical() {
        for (var serverIndex in this.servers) {
          let server = this.servers[serverIndex];

          console.log('Seting server ID ' + server.id + ' to status Normal...');
          server.status = 'Critical';
        }
      },
      changeStatusRandomly() {
        for (var serverIndex in this.servers) {
          let server = this.servers[serverIndex];
          let randomNum = Math.random();

          console.log('Seting server ID ' + server.id + ' status randomly...');

          if (randomNum > 0.5) {
            server.status = 'Critical';
          } else {
            server.status = 'Normal';
          }
        }
      }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
