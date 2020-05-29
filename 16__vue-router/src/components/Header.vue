<template>
  <ul class="nav nav-pills">
    <router-link :to="{name:'home'}" tag="li" active-class="nav-item active" exact><a>Home</a></router-link>
    <router-link :to="{name:'userStart'}" tag="li" active-class="nav-item active"><a>User</a></router-link>
  </ul>
</template>
<script>
  export default {
    data() {
      return {

      }
    }

  }
</script>
<style scoped>
  li.active {
    font-weight: bold;
  }
</style>
