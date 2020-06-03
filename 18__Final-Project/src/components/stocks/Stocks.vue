<template>
    <div class="row justify-content-start">
        <app-stock-component v-for="stock in stocks" v-bind:stock="stock">
        </app-stock-component>
    </div>
</template>
<script>
import Stock from './Stock.vue'

export default {
    data() {
        return {
            stocks:[
                {id:1, name: 'BMW', price: 110, ticker: 'BMW'},
                {id:1, name: 'Google', price: 200, ticker: 'GOOGL'},
                {id:1, name: 'Apple', price: 250, ticker: 'APPL'},
                {id:1, name: 'Twitter', price: 300, ticker: 'TWTR'}
            ]
        }
    },
    components:{
        appStockComponent:Stock
    }
}
</script>
