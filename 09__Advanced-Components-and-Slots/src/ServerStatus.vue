<template>
  <div>
    <h1>Server Status: {{ isNormal ? 'Normal' : 'Critical' }}</h1>
    <button @click="clickAction">{{ isNormal ? 'Change me to Critical!' : 'Change me to Normal!' }}</button>
  </div>
</template>
<script type="text/javascript">
export default {
  data(){
    return {
      isNormal: true,
    }
  },
  methods:{
    clickAction() {
      this.isNormal = !this.isNormal;
    }
  }
}
</script>
<style>
</style>
