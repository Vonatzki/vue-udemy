<template>
<div class="col col-lg-2 quote">
  <div class="card h-100">
    <p class="card-body"><slot></slot></p>
  </div>
</div>
</template>
<script>
export default {

}
</script>
<style>
.card {
  box-shadow: 3px 3px 3px 3px grey;
  font-family: 'Arizonia';
  font-size: 4rem;
  padding: 3px 3px 3px 15px;
}

.card:hover {
  background-color: rgb(251, 243, 215);
}

.quote {
  cursor: pointer;
  margin: 15px auto 15px auto;
}
</style>
