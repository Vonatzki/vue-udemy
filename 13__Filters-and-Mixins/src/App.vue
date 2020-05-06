<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters</h1>
                <p>{{ text | upper }}</p>
                <p>{{ text | lower }}</p>
                <hr>
                <h2>Testing Data Locality of Mixins</h2>
                <button type="button" @click="fruits.push('Berries')" class='btn btn-primary' name="button">Add new item</button>
                <hr>
                <input v-model="filterText">
                <ul>
                  <li v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>
            </div>
            <hr>
            <app-list></app-list>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';
    import {fruitMixin} from './fruitMixin.js';

    export default {

      data () {
        return {
          text: 'Hello there!',
        };
      },
      filters: {
        'upper' (value) {
          return value.toUpperCase();
        }
      },
      mixins:[fruitMixin],
      components:{appList:List}
    }
</script>

<style>

</style>
