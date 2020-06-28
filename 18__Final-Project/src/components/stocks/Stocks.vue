<template>
    <div class="row justify-content-start">
        <app-stock-component v-for="stock in stocks" v-bind:stock="stock">
        </app-stock-component>
    </div>
</template>
<script>
import Stock from './Stock.vue'

export default {
    computed:{
        stocks () {
            return this.$store.getters.stocks;
        }
    },
    components:{
        appStockComponent:Stock
    }
}
</script>
