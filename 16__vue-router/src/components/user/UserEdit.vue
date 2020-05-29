<template>
  <div>
    <h3>Edit the User</h3>
    <p>User is ID # {{ $route.params.id }}</p>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
    <hr>
    <button type="button" name="button" class="btn btn-primary" @click="confirmed = true">Confirm</button>
    <div style="height: 700px">
    </div>
    <p id="data">Some extra data</p>
    <router-link tag="button" class="btn btn-danger" type="button" name="button" :to="{name:'userDetail', params:{id:$route.params.id}}">Cancel</router-link>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        confirmed: false
      }
    },
    beforeRouteLeave(to, from , next){
      if (this.confirmed) {
        next();
      } else {
        if (confirm('Are you sure?')) {
          next();
        } else {
          next(false);
        }
      }
    }
  }

</script>
