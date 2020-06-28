<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <transition
      name="slide"
      mode="out-in"
      appear
      enter-active-class="animate__animated animate__faster animate__fadeInDown"
      leave-active-class="animate__animated animate__faster animate__fadeOutDown">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    components:{
      appHeader:Header
    },
    created () {
      this.$store.dispatch('initStocks');
    }
  }
</script>

<style>

</style>
