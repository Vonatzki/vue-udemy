<template>
  <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
          <li
                  class="list-group-item"
                  v-for="(serverName, index) in serverList">
              Server #{{ index+1 }}: {{ serverName }}
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      serverList:[
        'Foo',
        'Bar',
        'Baz',
        'Bax'
      ]
    }
  }
}
</script>
<style scoped>
div {
  border: 1px solid blue;
}
</style>
