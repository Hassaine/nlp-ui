<template>
  <!-- Sidebar  -->
  <nav id="sidebar">
    <div class="sidebar-header">
      <h3>Named entites extraction</h3>
    </div>

    <ul class="list-unstyled components">
      <p>Admin</p>
      <li>
        <a @click="changeMainAppState('homeApp')">HomeApp</a>
      </li>
      <li v-if="this.admin">
        <a @click="changeMainAppState('Dashboard')">Dashboard</a>
      </li>
      <li v-if="this.admin">
        <a @click="changeMainAppState('Admin Manager')">Admin Manager</a>
      </li>

      <li>
        <a @click="changeMainAppState('Contact')">Contact</a>
      </li>
    </ul>

    <ul class="list-unstyled CTAs">
      <li v-if="this.admin">
        <a class="download" @click="logout">Logout</a>
      </li>
      <li v-if="!this.admin">
        <a class="download" @click="goToHomePage">go to homePage </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['admin'],
  methods: {
    changeMainAppState(element) {
      this.$emit('changeMainAppState', element);
    },
    goToHomePage() {
      this.$router.push({ name: 'home-page' });
    },
    logout() {
      this.$router.push({ name: 'home-page' });
    }
  }
};
</script>

<style>
#sidebar {
  min-width: 250px;
  max-width: 250px;
  min-height: 100vh;
}
a[data-toggle='collapse'] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}
</style>
