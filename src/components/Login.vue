<template>
  <!-- <div class="container">
    <h1>Login</h1>
    <button @click="login">login</button>
  </div> -->
  <div class="text-center" data-gr-c-s-loaded="true">
    <form class="form-signin" pb-autologin="true" autocomplete="off">
      <img
        class="mb-4"
        src="../../public/images/user.jpg"
        alt=""
        width="72"
        height="72"
      />
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required=""
        autofocus=""
        pb-role="username"
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required=""
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
      >
        Login
      </button>
      <p class="mt-5 mb-3 text-muted">© 2019-2020</p>
      <passwordboxicon
        pb-icon="username"
        icon-type="main"
        style='display: none; position: absolute; background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAQCAYAAAAI0W+oAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzU4NUJBRkU1QkVFMTFFNDkyRkVDMDk0Nzk5RDFBMDQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzU4NUJBRkQ1QkVFMTFFNDkyRkVDMDk0Nzk5RDFBMDQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA5M0ZFMjdERDI5NDExRTE5Njc0OTU4Rjk3NzgwODJEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA5M0ZFMjdFRDI5NDExRTE5Njc0OTU4Rjk3NzgwODJEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+MHuEgAAAAWtJREFUeNq8VCFMxEAQ3DZ1RRdfSUBTcg6JwdfjeQsaJCXYDxZ03/+7BtD/BsMLDAFdXebu9r7bpnxLSZhkvr9719vu7uxRVVXUiUlxDUbCjo2vA/qMPvr0M17AI2En7BsFX3xxBIZi7Qk8FvYh+9z+sJHx4EBEMXiHlw+MlalP/M7E+ox9xHvu+Z1B8HT9PM+r+0B0CU5x6DP7FAcu2NYlPAOv4HtzPfpdIFcSIs2Sgy7Bd/DEHO7WMlVKMfRii+rOwVTYqfGNVF2wkbJUW6ZyPCNTwho5Z6j3n7I4HC76Egq4/l0bS5b0XMi75P05B7a46S9dsGXt0WQwKXbwfAVT7tEotFWnG637sDJfbUv0Be6Ba/jm7NsHb50ghojBb1wxdjZWXBo3pB/ggkvnyrbmmYvHDGxomuqC2Ox2zazYeYk3N0emHoTUB6HuUaaWrbWkceXY/7U4eFjHZEQdgRatSzb5kxj+A98CDADG3MBsPyzvawAAAABJRU5ErkJggg==") right center no-repeat; width: 30px; height: 46px; z-index: 2; visibility: hidden; top: 215.167px; left: 760px;'
      ></passwordboxicon
      ><passwordboxicon
        pb-icon="password"
        icon-type="main"
        style='display: none; position: absolute; background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAQCAYAAAAI0W+oAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzU4NUJBRkU1QkVFMTFFNDkyRkVDMDk0Nzk5RDFBMDQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzU4NUJBRkQ1QkVFMTFFNDkyRkVDMDk0Nzk5RDFBMDQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA5M0ZFMjdERDI5NDExRTE5Njc0OTU4Rjk3NzgwODJEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA5M0ZFMjdFRDI5NDExRTE5Njc0OTU4Rjk3NzgwODJEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+MHuEgAAAAWtJREFUeNq8VCFMxEAQ3DZ1RRdfSUBTcg6JwdfjeQsaJCXYDxZ03/+7BtD/BsMLDAFdXebu9r7bpnxLSZhkvr9719vu7uxRVVXUiUlxDUbCjo2vA/qMPvr0M17AI2En7BsFX3xxBIZi7Qk8FvYh+9z+sJHx4EBEMXiHlw+MlalP/M7E+ox9xHvu+Z1B8HT9PM+r+0B0CU5x6DP7FAcu2NYlPAOv4HtzPfpdIFcSIs2Sgy7Bd/DEHO7WMlVKMfRii+rOwVTYqfGNVF2wkbJUW6ZyPCNTwho5Z6j3n7I4HC76Egq4/l0bS5b0XMi75P05B7a46S9dsGXt0WQwKXbwfAVT7tEotFWnG637sDJfbUv0Be6Ba/jm7NsHb50ghojBb1wxdjZWXBo3pB/ggkvnyrbmmYvHDGxomuqC2Ox2zazYeYk3N0emHoTUB6HuUaaWrbWkceXY/7U4eFjHZEQdgRatSzb5kxj+A98CDADG3MBsPyzvawAAAABJRU5ErkJggg==") right center no-repeat; width: 30px; height: 46px; z-index: 3; visibility: hidden; top: 260.167px; left: 760px;'
      ></passwordboxicon>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push({ name: 'main-application', params: { admin: true } });
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
.form-signin input[type='email'] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type='password'] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
