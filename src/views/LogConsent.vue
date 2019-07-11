<template>
    <div class="LogConsent">
        <div class="container-fluid">
            <div class="row">
                <div class="col col-12">
                    <div class="container">
                        <form class="form">
                            <input class="form-control form-control-lg" type="text" placeholder="Entrez votre identifiant client" v-model="inputControl">
                            <button type="submit" class="btn btn-primary" @click.prevent="sendInputClient">Envoyé</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axiosHelper from '@/store/helper/axiosHelper'
import { mapState } from 'vuex'

export default {
  name: 'LogConsent',
  data: function () {
    return {
      inputControl: null
    }
  },
  methods: {
    sendInputClient: function () {
      // let url = 'https://gw.hml.api.enedis.fr/group/espace-particuliers/consentement-linky/oauth2/authorize?client_id=' + this.inputControl + '&state=abcdef&duration=P12M&response_type=code&redirect_uri=https://linky.sunshare.fr'
      // axiosHelper.getInfos(url)
      // window.location.replace(url)
      this.$store.commit('onUse') // replace momentaly the acces token
      this.$store.dispatch('setClientId', this.inputControl)
      this.$router.push({ name: 'dashBoard' })
    }
  }
}
</script>

<style lang="scss" scoped>

.LogConsent {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .container {
    .form {
      text-align: center;
      .form-control {
        text-align: center;
      }
      .btn {
        margin-top: 20px;
      }
    }
  }
}

</style>
