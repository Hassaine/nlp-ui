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
        <!-- <ul class="collapse list-unstyled" id="homeSubmenu">
          <li>
            <a href="#" @click="testClick">Home 1</a>
          </li>
          <li>
            <a href="#">Home 2</a>
          </li>
          <li>
            <a href="#">Home 3</a>
          </li>
        </ul>-->
      </li>
      <li>
        <a @click="changeMainAppState('Dashboard')">Dashboard</a>
      </li>
      <li>
        <a @click="changeMainAppState('Admin Manager')">Admin Manager</a>
      </li>

      <li>
        <a @click="changeMainAppState('Contact')">Contact</a>
      </li>
    </ul>

    <ul class="list-unstyled CTAs">
      <li>
        <a class="download">Logout</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    changeMainAppState(element) {
      this.$emit('changeMainAppState', element);
    },
    testClick() {
      alert('clicked');
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
