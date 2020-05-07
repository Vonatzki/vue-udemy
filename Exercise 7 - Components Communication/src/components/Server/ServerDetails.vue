<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!serverSelected">Please select a server.</p>
        <div v-else>
          <h1 style="font-weight:bold;">Server ID # {{ serverDetails.id }}: "{{ serverDetails.name }}"</h1>
          <h3><span style="font-weight:bold;">Server Staus:</span> <span class="server-status" :class="serverDetails.status.toLowerCase()">{{ serverDetails.status }}</span></h3>
          <hr>
          <button
            class="btn"
            :class="serverDetails.status === 'Normal' ? 'btn-danger' : 'btn-primary'"
            @click="serverDetails.status = serverDetails.status === 'Normal' ? 'Critical' : 'Normal'">Change to {{ serverDetails.status === 'Normal' ? 'Critical' : 'Normal' }}
          </button>
        </div>
    </div>
</template>

<script>
  import { eventBus } from '../../main';

  export default {
    data(){
      return {
        serverDetails:null,
        serverSelected:false
      };
    },
    created(){
      eventBus.$on('serverSelected', (server) => {
        this.serverDetails = server;
        this.serverSelected = true;
      });
    }
  }
</script>

<style scoped>

.server-status {
  text-transform: uppercase;
  font-weight: bold;
}

.critical {
  color: red;
}

.normal {
  color: green;
}

button {
  transition: background-color 0.1s ease;
  font-weight: bold;
}
</style>
