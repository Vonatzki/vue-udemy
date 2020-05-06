<template>
  <div>
    <div class="form-group">
      <label class="col-sm-2 control-label" for="first-name">First Name</label>
      <div class="col-sm-10">
        <input @input="nameChanged(true, $event)" :value="firstName" type="text" class="form-control" placeholder="First Name" id="first-name">
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label" for="first-name">Last Name</label>
      <div class="col-sm-10">
        <input @input="nameChanged(false, $event)" :value="lastName" type="text" class="form-control" placeholder="Last Name" id="last-name">
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props:['value'],
    computed:{
      firstName(){
        return this.value.split(" ")[0];
      },
      lastName(){
        return this.value.split(" ")[1];
      }
    },
    methods:{
      nameChanged(isFirst, event){

        let name = '';
        if (isFirst) {
          name = event.target.value + ' ' + this.lastName;
        } else {
          name = this.firstName + ' ' + event.target.value;
        }

        this.$emit('input', name);

      }
    }
  }
</script>
