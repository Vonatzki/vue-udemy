<template>
  <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Mixins</h1>
          <input v-model="filterText">
          <ul>
            <li v-for="fruit in filteredFruits">{{ fruit }}</li>
          </ul>
      </div>
  </div>
</template>

<script>
    import { fruitMixin } from './fruitMixin.js';

    export default {
      mixins: [fruitMixin]
    }
</script>

<style>

</style>
