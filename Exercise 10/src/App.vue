<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <h2>{{ myVar }}</h2>
                <input type="text" name="test-input" v-myon:input="inputTrigger">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          myVar:'No Input'
        };
      },
      methods:{
        inputTrigger(event){
          this.myVar = event.target.value;
        }
      },
      directives:{
        'myon':{
          bind (el, binding, vnode) {
            el.addEventListener(binding.arg, binding.value);
          }
        }
      }
    }
</script>

<style>
</style>
