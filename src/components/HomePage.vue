<template>
  <!-- <h1>home page</h1>
    <button @click="goToLogin">Login</button>
    <button @click="goToApp">use the app</button> -->

  <div class="site-blocks-cover" id="home-section">
    <div class="img-wrap">
      <div class="owl-carousel slide-one-item hero-slider">
        <div class="slide">
           <img src="../../public/images/natural-language-processing.png" alt="Image" /> 
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 ml-auto align-self-center">
          <div class="intro">
            <div class="heading">
              <h1>Named Entite extraction</h1>
            </div>
            <div class="text">
              <p>
                <a @click="goToLogin" class="btn btn-outline-primary btn-md"
                  >login</a
                >
              </p>
              <p>
                <a @click="goToApp" class="btn btn-outline-primary btn-md"
                  >use the app</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToApp() {
      this.$router.push({ name: 'main-application', params: { admin: false } });
      //this.$router()
    },
    goToLogin() {
      this.$router.push({ name: 'login-page' });
    }
  }
};
</script>

<style scoped>
.site-blocks-cover {
  margin-top: 0px;
}
.site-blocks-cover {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-attachment: fixed;
  position: relative;
}
.site-blocks-cover.overlay {
  position: relative;
}
.site-blocks-cover.overlay:before {
  position: absolute;
  content: '';
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.2);
}
.site-blocks-cover,
.site-blocks-cover > .container > .row {
  min-height: 600px;
  height: calc(100vh);
}
.site-blocks-cover.inner-page,
.site-blocks-cover.inner-page > .container > .row {
  min-height: 600px;
  height: calc(80vh);
}
.site-blocks-cover h1 {
  font-size: 8rem;
  font-weight: 900;
  line-height: 1;
}
@media (max-width: 991.98px) {
  .site-blocks-cover h1 {
    font-size: 4rem;
  }
}
.site-blocks-cover .sub-text {
  font-size: 1.4rem;
  color: gray;
  font-weight: 300;
}
@media (max-width: 991.98px) {
  .site-blocks-cover .sub-text {
    color: #000;
  }
}
.site-blocks-cover .img-wrap {
  position: absolute;
  z-index: -1;
  width: calc(100% - 50%);
  top: 0;
  height: 100%;
  z-index: 2;
  right: 50%;
  min-height: 600px;
  overflow: hidden;
  border-bottom-right-radius: 200px;
}
@media (max-width: 991.98px) {
  .site-blocks-cover .img-wrap {
    width: 100%;
    right: 0%;
    top: 0;
  }
  .site-blocks-cover .img-wrap .hero-slider:before {
    position: absolute;
    content: '';
    background: #fff;
    opacity: 0.5;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
.site-blocks-cover .img-wrap .slide {
  height: 100vh;
  position: relative;
}
.site-blocks-cover .img-wrap .slide img {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
.site-blocks-cover .intro {
  z-index: 3;
  position: relative;
}
.site-blocks-cover .intro .heading {
  margin-left: -150px;
}
@media (max-width: 991.98px) {
  .site-blocks-cover .intro .heading {
    margin-left: 0;
  }
}
.site-blocks-cover .intro .text {
  padding-left: 50px;
}
@media (max-width: 991.98px) {
  .site-blocks-cover .intro .text {
    padding-left: 0;
  }
}
</style>
