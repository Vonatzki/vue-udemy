<template>
<div>
  <div class="container">
    <app-header
      :toggleForm="toggleForm"
      :maxQuotes="maxQuotes"
      :quoteLength="quoteLength"
      :addQuote="addQuote"
      :showForm="showForm">
    </app-header>
  </div>
<hr>
<app-quotes :quotes="quotes" :removeQuote="removeQuote"></app-quotes>
</div>
</template>

<script>
    import QuotesList from './components/QuotesList.vue';
    import AppHeader from './components/AppHeader.vue';

    export default {
      data() {
        return {
          showForm:false,
          formInput:'',
          quotes:[],
          maxQuotes:10
        };
      },
      components:{
        'AppQuotes': QuotesList,
        'AppHeader': AppHeader
      },
      methods:{
        addQuote(quoteInput){

          if (quoteInput === null | quoteInput === '' | this.quoteLength >= this.maxQuotes) {
            return;
          }

          this.quotes.push(quoteInput);
        },
        removeQuote(quoteToRemove) {
          this.quotes = this.quotes.filter(quote => quote !== quoteToRemove);
        },
        toggleForm() {
          this.showForm = !this.showForm;
        }
      },
      computed: {
        quoteLength() {
          return this.quotes.length;
        }
      }
    }
</script>
<style>
</style>
