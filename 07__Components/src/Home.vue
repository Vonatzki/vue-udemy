<template>
  <div class="">
    <p>Server Status: {{ status }}</p>
    <hr>
    <button @click="changeStatus" type="button" name="button">Change Status</button>
  </div>
</template>
<script>
  export default {

    data() {
      return {
        status: 'Critical'
      };
    },
    
    methods: {
      changeStatus() {
        this.status = this.status === 'Normal' ? 'Critical' : 'Normal';
      }
    }
  }
</script>
