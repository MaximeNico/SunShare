<template>
  <div id="app">
    <div class="container-fluid app">
      <div class="row">
        <div class="col-3 menuSide">
          <menuSide />
        </div>
        <div class="col-9 routerView">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menuSide from '@/components/menuSide'

export default {
  name: 'App',
  components: {
    menuSide
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container-fluid.app {
  height: 100%;
}
.container-fluid.app > div {
  height: 100%;
}
.container-fluid.app > div > .menuSide {
  padding: 0;
  max-width: 206px;
}

</style>
