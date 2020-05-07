<template>
    <div class="row">
        <div class="col-xs-12">
            <header>
                <h1>Server Status</h1>
                <button class="btn" @click="changeAlltoNormal">Change All to Normal</button>
                <button class="btn" @click="changeAlltoCritical">Change All to Critical</button>
                <button class="btn" @click="changeStatusRandomly">Change Status Randomly</button>
            </header>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../../main';

export default {
  methods:{
    changeAlltoNormal() {
      eventBus.changeAlltoNormal();
    },
    changeAlltoCritical() {
      eventBus.changeAlltoCritical();
    },
    changeStatusRandomly() {
      eventBus.changeStatusRandomly();
    }
  }

}
</script>

<style scoped>
header h1 {
  font-weight: 700;
}

button {
  font-weight: bold;
}
</style>
