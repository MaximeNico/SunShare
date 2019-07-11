<template>
  <div id="app">
    <div class="container-fluid app">
      <div class="row app" v-if="hasToken">
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
import { mapState } from 'vuex'
import axiosHelper from '@/store/helper/axiosHelper'

export default {
  name: 'App',
  components: {
    menuSide,
    appHeader
  },
  data: function () {
    return {
      hasToken: false,
      receiveToken: false
    }
  },
  computed: mapState([
    'app'
  ]),
  created: function () {
    // https://linky.sunshare.fr?code=d2NdD7128QF72BXuAdJCdoM9qHfHPo&state=abcdef&usage_point_id=22516914714270
  },
  mounted: function () {
    console.log('Created app component :', window.location)
    let urlP = window.location.href
    console.log('url parse search :', urlP.search())
    let code = 'Ap7J7rUeupjSUmcKXnrB5rXorIsvaB'
    let clientId = 'a782e2d9-f1da-4c11-8659-2084fd407f99'
    let url = ' https://gw.hml.api.enedis.fr/v1/oauth2/token?redirect_uri=https://linky.sunshare.fr&grant_type=authorization_code&client_id=' + clientId + '&client_secret=b736094a-0776-4d07-ac16-9861a0540a25&code=' + code
    // axiosHelper.postInfos(url)
    console.log(axiosHelper.postInfos(url))
  },
  updated: function () {
    console.log('APP updated !')
    (!this.app.token.accessToken) ? this.$router.push({ name: 'logConsent' }) : null
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
