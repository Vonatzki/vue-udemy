<template>
    <div class="container">
        <header-cmp></header-cmp>
        <hr>
        <div class="row">
            <serverlist-cmp></serverlist-cmp>
            <serverdetails-cmp></serverdetails-cmp>
        </div>
        <hr>
        <div class="row">
            <footer-cmp></footer-cmp>
        </div>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import ServerList from './components/ServerList.vue'
import ServerDetails from './components/ServerDetails.vue'
import Footer from './components/Footer.vue'

export default {
  components:{
    'header-cmp':Header,
    'serverlist-cmp':ServerList,
    'serverdetails-cmp':ServerDetails,
    'footer-cmp':Footer
  }
}
</script>

<style>

</style>
