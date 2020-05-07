<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Name: {{ name }}</p>
        <p>Age: {{ age }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetAge">Reset Age</button>
    </div>
</template>

<script>
export default {
  props:{
    name:{
      type:String,
      required:true,
      default:'Max'
    },
    age:Number,
    resetAge: Function
  },
  methods:{
    resetName(){
      this.name = 'Max';
      this.$emit('nameWasReset', this.name);
    }
  }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
