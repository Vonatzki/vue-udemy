<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    @click="selectServer(server)"
                    class="list-group-item"
                    v-for="server in servers">
                Server #{{ server.id }} "{{ server.name }}": <span :class="server.status.toLowerCase()">{{ server.status }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
  import { eventBus } from '../../main';

  export default {
    data() {
      return {
        servers:eventBus.servers
      };
    },
    methods:{
      selectServer(id){
        eventBus.selectServer(id);
      }
    }
  };
</script>

<style scoped>
li.list-group-item:hover, li.list-group-item:active {
    background-color: #fff0c8;
}

li.list-group-item {
    font-weight: 700;
    cursor: pointer;
}

li.list-group-item span {
    text-transform: uppercase;
}

li.list-group-item span.normal {
  color: green;
}

li.list-group-item span.critical {
  color: red;
}
</style>
