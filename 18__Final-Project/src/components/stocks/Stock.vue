<template>
<div class="col-4 col-sm-6 col-md-4">
    <div class="card text-white bg-success mb-4" style="max-width: 22rem;">
        <div class="card-header">{{ stock.ticker }}</div>
        <div class="card-body bg-white">
            <h3 class="card-title">{{ stock.name }}</h3>
            <p class="card-text">
                Stock Price: {{ stock.price }}
            </p>
            <form @submit.prevent class="form-inline">
                <div class="input-group mb-2 mr-sm-2">
                    <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
                </div>
                <button type="submit" class="btn btn-primary mb-2">Buy</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            quantity:0
        }
    },
    props:['stock']
}
</script>

<style scoped>
.card-body {
    color: black;
}
</style>
