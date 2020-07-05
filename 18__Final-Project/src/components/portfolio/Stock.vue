<template>
<div class="col-4 col-sm-6 col-md-4">
    <div class="card text-white bg-success mb-4" style="max-width: 22rem;">
        <div class="card-header">{{ stock.ticker }}</div>
        <div class="card-body bg-white">
            <h3 class="card-title">{{ stock.name }}</h3>
            <p class="card-text">
                Stock Price: {{ stock.price }} | Quantity: {{ stock.quantity }}
            </p>
            <button
                v-if="!sellMode"
                @click="sellMode=!sellMode"
                type="submit"
                class="btn btn-primary mb-2">Sell</button>                
            <form @submit.prevent class="form-inline" v-if="sellMode">
                <div class="input-group mb-1 mr-sm-1">
                    <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
                </div>
                <button
                    :disabled="isValidQuantity"
                    @click="sellStock"
                    type="submit"
                    class="btn btn-success mb-2">OK</button>
                <button
                    @click="sellMode=!sellMode; quantity=0"
                    type="submit"
                    class="btn btn-danger mb-2">X</button>                    
            </form>
        </div>
    </div>
</div>
</template>
1
<script>

import {mapActions} from 'vuex';

export default {
    data(){
        return {
            sellMode:false,
            quantity:0
        }
    },
    props:['stock'],
    computed:{
        isValidQuantity () {
            return this.quantity <= 0 || Number.isInteger(this.quantity);
        }
    },
    methods:{
        ...mapActions([
            'sellStock'
        ]),
        sellStock(){
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };

            this.quantity = 0;
            this.sellStock();
        }   
    }
}
</script>

<style scoped>
.card-body {
    color: black;
}
</style>
