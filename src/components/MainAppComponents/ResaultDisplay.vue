<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">named entity:</h5>
      <p class="card-text">{{result.data}}</p>
      <!-- <p class="card-text" v-if="error in result">{{result.error}}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    result: Object
  }
};
</script>

<style>
</style>