<template>
    <div class=" container-fluid appHeader">
      <div class="weatherDay">
        Aujourd'hui: <p class="weather">{{ weather }}</p>
      </div>
      <div class="helloUser">
        Bonjour  {{ userName }}
      </div>
    </div>
</template>

<script>
export default {
  name: 'appHeader',
  data: function () {
    return {
      weather: '19°c',
      userName: 'USER_NAME'
    }
  }
}
</script>

<style lang="scss" scoped>

.appHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #ffffff;
  font-size: 25px;
  .weatherDay {
    display: flex;
    flex-direction: row;
    .weather {
      color: #ADADAD;
      margin-left: 10px;
    }
  }
}

</style>
