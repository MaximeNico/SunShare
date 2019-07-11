<template>
    <div class="LogConsent">
        <div class="container-fluid">
            <div class="row">
                <div class="col col-12">
                    <div class="container">
                      <div class="row textP">
                        <p class="text">Pour donner votre autorisation, vous devez créer un compte personnel Enedis. Il vous permet également de suivre et gérer vos données de consommation et production en fonction de votre service d’électricité. Munissez-vous de votre facture d’électricité pour créer votre espace.
                        Enedis gère le réseau d’électricité jusqu’au compteur d’électricité. Pour accèder à vos données de consommation et de production certifiées, autorisez Enedis à nous transmettre vos données Linky.</p>
                      </div>
                      <div class="row">
                        <form class="form">
                            <input class="form-control form-control-lg" type="text" placeholder="Entrez votre identifiant client" v-model="inputControl">
                              <p class="sub-text">En cliquant sur ce bouton, vous allez accéder à votre compte personnel Enedis où vous pourrez donner votre accord pour qu’Enedis nous transmette vos données.</p>
                            <button type="submit" class="btn btn-primary" @click.prevent="sendInputClient">Envoyé</button>
                        </form>
                      </div>
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
    color: aliceblue;
    .textP {
      margin-bottom: 30px;
      text-align: center;
    }
    .form {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .form-control {
        text-align: center;
        margin-bottom: 20px;
      }
      .btn {
        margin-top: 20px;
        width: 105px;
      }
    }
  }
}

</style>
