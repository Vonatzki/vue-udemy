<template>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1>Signup Form</h1>
        </div>
      </div>
      <hr>
      <div class="row" v-if="!isSubmitted">
        <form class="form-horizontal">
          <full-name v-model="userData.fullName"></full-name>
          <div class="form-group">
            <label class="col-sm-2 control-label" for="email">Email</label>
            <div class="col-sm-10">
              <input v-model="userData.email" type="text" class="form-control" placeholder="Email" id="email">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label" for="password">Password</label>
            <div class="col-sm-10">
              <input v-model="userData.password" type="password" class="form-control" placeholder="Password" id="password">
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <div class="checkbox">
                <label>
                  <input v-model="userData.storeDatabase" value="Yes" type="radio"> Yes
                </label>
                <label>
                  <input v-model="userData.storeDatabase" value="No" type="radio"> No
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button @click.prevent="submitForm" class="btn btn-primary" type="button" name="button">
                Submit!
              </button>

            </div>
          </div>
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </form>
      </div>
      <div class="row" v-if="isSubmitted">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <div class="panel panel-default">
                  <div class="panel-heading">
                      <h4>Your Data</h4>
                  </div>
                  <div class="panel-body">
                      <p>Full Name: <b>{{ userData.fullName }}</b></p>
                      <p>Mail: <b>{{ userData.email }}</b></p>
                      <p>Password: <b>{{ userData.password }}</b></p>
                      <p>Store in Database? <b>{{ userData.storeDatabase }}</b></p>
                      <button class="btn btn-primary" type="button" name="button" @click="isSubmitted=!isSubmitted">Edit Again</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
    import fullName from './FullName.vue';

    export default {
      data () {
        return {
          userData:{
            fullName:'',
            email:'',
            password:'',
            storeDatabase:'Yes'
          },
          isSubmitted:false
        }
      },
      methods:{
        submitForm(){
          this.isSubmitted = true;
        }
      },
      components:{fullName:fullName}
    }
</script>

<style>
</style>
