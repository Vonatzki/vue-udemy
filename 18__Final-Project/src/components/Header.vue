<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <router-link :to="{name: 'home'}" tag="a" class="navbar-brand" href="#">Stock Trader</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <router-link exact :to="{name: 'home'}" tag="li" class="nav-item" active-class="active"><a class="nav-link" href="#">Home</a></router-link>
      <router-link exact :to="{name: 'portfolio'}" tag="li" class="nav-item" active-class="active"><a class="nav-link" href="#">My Portfolio</a></router-link>
      <router-link exact :to="{name: 'stocks'}" tag="li" class="nav-item" active-class="active"><a class="nav-link" href="#">Stocks</a></router-link>
    </ul>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown">        
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Save & Load
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider" ></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <router-link exact :to="{name: 'portfolio'}" tag="li" class="nav-item" active-class="active"><a class="nav-link" href="#">Remaining Funds: {{ fund }}</a></router-link>
      <router-link exact :to="{name: 'end_day'}" tag="li" class="nav-item" active-class="active"><a class="nav-link" href="#">End Day</a></router-link>
    </ul>
  </div>
</nav>
</template>
<script>
import HRNumbers from 'human-readable-numbers';

export default {
  computed: {
    fund () {
      const myFunds = this.$store.getters.funds;

      return HRNumbers.toHumanString(myFunds);
    }
  }
}
</script>
<style scoped>
.navbar {
  margin-bottom: 20px;
}
</style>
