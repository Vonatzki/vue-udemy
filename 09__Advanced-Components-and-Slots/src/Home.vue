<template>
  <div>
    <h1>Server List:</h1>
    <app-server-status v-for="server in 5"></app-server-status>
  </div>
</template>
<script type="text/javascript">
import ServerStatus from './ServerStatus.vue'

export default {
    components:{
      'app-server-status': ServerStatus
    }
}
</script>
<style>
</style>
