<template>
<div class="col-4 col-sm-6 col-md-4">
    <div class="card text-white bg-success mb-4" style="max-width: 22rem;">
        <div class="card-header">{{ stock.ticker }}</div>
        <div class="card-body bg-white">
            <h3 class="card-title">{{ stock.name }}</h3>
            <p class="card-text">
                Stock Price: {{ stock.price }}
            </p>
            <transition
                name="slide"
                mode="out-in"
                appear
                enter-active-class="animate__animated animate__faster animate__flipInX"
                leave-active-class="animate__animated animate__faster animate__flipOutX">
            <button
                v-if="!buyMode"
                @click="buyMode=!buyMode"
                type="submit"
                class="btn btn-primary mb-2">Buy</button>                
            <form @submit.prevent class="form-inline" v-if="buyMode">
                <div class="input-group mb-1 mr-sm-1">
                    <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
                </div>
                <button
                    :disabled="isValidQuantity"
                    @click="buyStock"
                    type="submit"
                    class="btn btn-success mb-2">OK</button>
                <button
                    @click="buyMode=!buyMode; quantity=0"
                    type="submit"
                    class="btn btn-danger mb-2">X</button>                    
            </form>
            </transition>
        </div>
    </div>
</div>
</template>
1
<script>
export default {
    data(){
        return {
            buyMode:false,
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
        buyStock(){

            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };

            this.$store.dispatch('buyStock', order);
            this.quantity = 0;
            console.log(order);
        }
    }
}
</script>

<style scoped>
.card-body {
    color: black;
}
</style>
