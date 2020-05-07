<template>
  <div class="container-fluid">
    <div class="row">
      <app-quote-detail @click.native="removeQuote(quote)" v-for="quote in quotes">{{ quote }}</app-quote-detail>
    </div>
  </div>
</template>
<script>

import AppQuoteDetail from './Quote.vue'

export default {
  props:{
    quotes:Array,
    removeQuote:Function
  },
  components:{
    'AppQuoteDetail':AppQuoteDetail
  }
}
</script>
<style scoped>

</style>
