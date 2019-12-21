<template>
  <div>
    <home-app v-if="this.mainAppState.homeApp" />
    <admin-manager v-if="this.mainAppState['Admin Manager']" />
    <dashboard-app v-if="this.mainAppState.Dashboard" />
  </div>
</template>

<script>
import HomeApp from "./HomeApp.vue";
import Dashboard from "./Dashboard.vue";
import AdminManager from "./AdminManager.vue";
export default {
  props: {
    mainAppState: Object
  },
  components: {
    "home-app": HomeApp,
    "dashboard-app": Dashboard,
    "admin-manager": AdminManager
  }
};
</script>

<style>
</style>