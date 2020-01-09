<template>
  <div class="row">
    <div class="col">
      <bar-chart></bar-chart>
    </div>
  </div>
</template>

<script>
import Barchart from "./Charts/Barchart.vue";
export default {
  components: {
    "bar-chart": Barchart
  }
};
</script>

<style>
</style>