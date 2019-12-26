<template>
  <!-- <div class="container">
    <h1>Login</h1>
    <button @click="login">login</button>
  </div>-->
  <div class="text-center" data-gr-c-s-loaded="true">
    <form class="form-signin" autocomplete="off">
      <img class="mb-4" src="../../public/images/user.jpg" alt width="72" height="72" />
      <h1 class="h3 mb-3 font-weight-normal">Please login to continue</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
        pb-role="username"
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
        pb-role="password"
      />
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button
        @click="login"
        class="btn btn-lg btn-primary btn-block"
        type="submit"
        pb-role="submit"
      >Login</button>
      <p class="mt-5 mb-3 text-muted">team SII © 2019-2020</p>
      <passwordboxicon
        pb-icon="username"
        icon-type="main"
        style="display: none; position: absolute; right center no-repeat; width: 30px; height: 46px; z-index: 2; visibility: hidden; top: 215.167px; left: 760px;"
      ></passwordboxicon>
      <passwordboxicon
        pb-icon="password"
        icon-type="main"
        style="display: none; position: absolute;  right center no-repeat; width: 30px; height: 46px; z-index: 3; visibility: hidden; top: 260.167px; left: 760px;"
      ></passwordboxicon>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push({ name: "main-application", params: { admin: true } });
    }
  }
};
</script>

<style scoped>
.text-center {
  margin-top: 30px;
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
