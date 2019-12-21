<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button
        type="button"
        id="sidebarCollapse"
        class="btn btn-info"
        @click="hide"
      >
        <i class="fas fa-align-left"></i>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script>
import $ from 'jquery';

export default {
  methods: {
    hide() {
      $('#sidebar, #content').toggleClass('active');
      $('.collapse.in').toggleClass('in');
      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    }
  }
};
</script>

<style></style>
