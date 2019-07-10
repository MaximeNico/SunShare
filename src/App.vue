<template>
  <div id="app">
    <div class="container-fluid app">
      <div class="row app" v-if="appState">
        <div class="col col-md-3 col-lg-2 menuSide">
          <menuSide />
        </div>
        <div class="col col-md-9 col-lg-10 mainContainer">
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
      <div class="row app" v-else>
        <transition>
          <router-view />
        </transition>
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
  },
  computed: {
    appState: function () {
      return this.$store.getters.appOnUse
    }
  },
  mounted: function () {
    (!this.appState) ? this.$router.push({ name: 'logConsent' }) : null
    console.log('computed mapState: ', this.appState)
  }
}
</script>

<style>

html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #343434;
}

.mainContainer {
  padding-bottom: 15px;
}

.container-fluid.app {
  height: 100%;
}

.container-fluid.app > .row.app {
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
