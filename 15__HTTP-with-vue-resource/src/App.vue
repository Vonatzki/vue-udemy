<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                  <label>Username</label>
                  <input @keyup.ctrl.enter="submit" class="form-control" type="text" v-model="user.username">
                </div>
                <div class="form-group">
                  <label>Mail</label>
                  <input @keyup.ctrl.enter="submit" class="form-control" type="text" v-model="user.email">
                </div>
                <button @click="submit" type="button" class="btn btn-primary" name="button">Submit</button>
                <hr>
                <input class="form-control" type="text" v-model="node">
                <br>
                <button @click="fetchData" class="btn btn-primary" type="button" name="button">Get Data</button>
                <br><br>
                <ul class="list-group">
                  <li class="list-group-item" v-for="u in users">
                    {{ u.username }} ({{ u.email }})
                  </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          user:{
            username: '',
            email: ''
          },
          users:[],
          resource:{},
          node:'data'
        };
      },
      created() {
        const customActions = {
          saveAlt: {method:'POST', url:'alternative.json'},
          getData: {method: 'GET', }
        };
        this.resource = this.$resource('{node}.json', {}, customActions);

      },
      methods:{
        submit(){
          // this
          // .$http
          // .post('data.json', this.user)
          // .then(response=>{
          //   console.log(response);
          //   this.user = {
          //     username: '',
          //     email: ''
          //   };
          // }, error=>{
          //   console.log(error);
          // });

          this.resource.saveAlt(this.user);
          this.user = {username:'',email:''};
        },
        fetchData(){
          // this
          // .$http
          // .get('data.json')
          // .then(response => {
          //   return response.json();
          // })
          // .then(data => {
          //   const resultArray = [];
          //   for (let key in data) {
          //     resultArray.push(data[key]);
          //   }
          //
          //   this.users = resultArray
          //
          // })
          this.resource
          .getData({node: this.node})
          .then(response => {return response.json();})
          .then(data => {
            const resultArray = [];
            for (let key in data) {
              resultArray.push(data[key]);
            }

            this.users = resultArray

          });
        }

      }
    }
</script>

<style>
</style>
