<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>User Name: {{ name }}</p>
        <p>User Age: {{ age }}</p>
        <hr>
        <input v-show="editState" type="text" :value="name" :text="name" @input="editName($event.target.value)">
        <button @click="editState = !editState">{{ !editState ? 'Edit me!' : 'Finish Edit'}}</button>
        <hr>
        <button @click="changeAge">Add Age by 1</button>
        <button @click="resetAge">Reset Age</button>
    </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
  props:{
    name:{type:String, required:true},
    age:Number,
    editName:{type:Function, required:true},
    changeAge:{type:Function, required:true},
    resetAge:{type:Function, required:true}
  },
  data() {
    return {
      editState: false
    };
  }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
