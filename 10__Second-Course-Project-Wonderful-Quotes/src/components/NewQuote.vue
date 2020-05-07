<template>
  <div class="row">
    <div class="form-group col-xs-12">
      <div v-if="raiseFullWarning" class="alert alert-danger">
        <p>Quotes limit reached ({{ maxQuotes }} quotes)! Delete quotes by clicking on them below!</p>
      </div>
    </div>
    <div class="form-group col-xs-12">
      <label>Add your quote:</label>
      <textarea class="form-control" @keyup.ctrl.enter="submitInput" v-model="formInput" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="col-xs-12 text-center">
      <button class="btn btn-primary" @click="submitInput">Add Quote</button>
      <button class="btn btn-danger" @click="toggleForm">Cancel</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInput:null,
    }
  },
  computed:{
    raiseFullWarning(){
      if (this.quoteLength >= this.maxQuotes) {
        return true;
      } else {
        return false;
      }
    }
  },
  props:["addQuote", "toggleForm", "quoteLength", "maxQuotes"],
  methods:{
    submitInput() {
      this.addQuote(this.formInput);

      if (this.raiseFullWarning) {
        return;
      }

      this.formInput = null;
    }
  }

}
</script>
<style scoped>
button.btn {
  font-weight: 700;
}
</style>
