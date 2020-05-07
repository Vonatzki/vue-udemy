<template>
  <div class="row">
    <div class="col-xs-12">
      <header>
        <h1 class="main-title">Wonderful Quotes</h1>
      </header>
    </div>
    <div class="col-xs-12">
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          :style="{'width': (quoteLength / maxQuotes) * 100 + '%'}"
          :aria-valuenow="quoteLength"
          aria-valuemin="0"
          aria-valuemax="100"
          >
          {{ quoteLength }}/{{ maxQuotes }}
        </div>
      </div>
    </div>
  <span v-if="!showForm">
    <div class="col-xs-12 text-center">
      <button class="btn btn-primary" @click="toggleForm">Add Quote</button>
    </div>
  </span>
  <new-quote v-else :addQuote="addQuote" :toggleForm="toggleForm" :quoteLength="quoteLength" :maxQuotes="maxQuotes"></new-quote>
</div>
</template>
<script>

import NewQuote from './NewQuote.vue';

 export default {
   components:{
     'NewQuote':NewQuote
   },
   props:["quoteLength", "maxQuotes", "toggleForm", "addQuote", "showForm"]
 }
</script>
<style scoped>
.main-title {
  text-align: center;
  font-weight: 700;
}
</style>
