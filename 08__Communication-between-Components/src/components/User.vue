<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>My name is {{ name }}</p>
        <p>My age is {{ age }}</p>
        <button @click="changeName">Change my Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name="name" :age="age" :resetAge="resetAge" @nameWasReset="name = $event"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :name="name" :age="age" :editName="editName" :resetAge="resetAge" :changeAge="changeAge"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data(){
          return {
            name:'Von',
            age: 28
          };
        },
        methods:{
          changeName() {
            this.name = this.name === 'Max' ? 'Von' : 'Max';
          },
          editName(value) {
            this.name = value;
          },
          changeAge() {
            this.age += 1;
          },
          resetAge() {
            this.age = 28;
          }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
