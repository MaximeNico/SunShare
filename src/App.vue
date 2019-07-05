<template>
  <div id="app">
    <div class="container-fluid app">
      <div class="row">
        <div class="col col-md-3 col-lg-2 menuSide">
          <menuSide />
        </div>
        <div class="col col-md-9 col-lg-10">
          <div class="row header">
            <appHeader />
          </div>
          <div class="row routerView">
            <transition name="fade">
              <router-view/>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menuSide from '@/components/menuSide'
import appHeader from '@/components/appHeader'

export default {
  name: 'App',
  components: {
    menuSide,
    appHeader
  }
}
</script>

<style>

html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #343434;
}

.container-fluid.app {
  height: 100%;
}
.container-fluid.app > div {
  height: 100%;
}
.container-fluid.app > div > .menuSide {
  padding: 0;
}

.header {
  margin-top: 10px;
}

/* -- TRANSITION CSS */

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
