<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>
                  <b>Input Text Here:</b> <input type="text" name="" value="" v-model="text_data">
                </p>
                <hr>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <h2>Exercise 1 - Reversed String Filter</h2>
                <p>{{ text_data | reverseText }}</p>

                <hr>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <h2>Exercise 2 - String Length Global Filter</h2>
                <p>{{ text_data | showLength }}</p>

                <hr>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <h2>Exercise 3 - Rehash of Exercise 1 & 2 but with Computed Properties</h2>
                <p>{{ reversed_data }}</p>
                <p>{{ data_with_length }}</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <h2>Exercise 4 - See Code for Mixin</h2>
                
            </div>
        </div>
    </div>
</template>

<script>

    import { computedMixin } from './computed_mixin.js';

    export default {
      data () {
        return {
          text_data:'Hello There!'
        };
      },
      filters:{
        reverseText(value){
          return value.split("").reverse().join("");
        }
      },
      mixins:[computedMixin]

    }
</script>

<style>
</style>
