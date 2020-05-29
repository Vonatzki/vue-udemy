<template>
  <div>
    <h3>Some User Details</h3>
    <p>User has loaded has ID: {{ $route.params.id }}</p>
    <br>
    <router-link tag="button" class="btn btn-primary" type="button" name="button" :to="{name:'userStart'}">Back to Users</router-link>
    <router-link tag="button" :to="link" class="btn btn-primary">Edit User</router-link>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        link: {
          name:'userEdit',
          params:{
            id:this.$route.params.id
          },
          query: {
            locale: 'en',
            q: 100
          },
          hash:'#data'
        }
      }
    },
    beforeRouteEnter(to, from, next){
      if (true) {
        console.log('You go!')
        next();
      } else {
        console.log('No go!')
        next(false);
      }
    }
  }
</script>
