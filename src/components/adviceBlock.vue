<template>
    <div class="adviceBlock">
      <div class="container-fluid">
        <div class="head-block">
          <div class="title">
            <lightIcon />
            Petit conseil du jour: {{ randomAdvice.title }}
          </div>
          <crossIcon @crossIconClicked="checkState" />
        </div>
        <div class="row main-contain">
          <div class="col col-2 picture-advice">
            <img src="../assets/recycling.png" height="85" alt="Recycling" class="img">
          </div>
          <div class="col col-10 text-content-advice">
            {{ randomAdvice.text }}
          </div>
        </div>
        <div class="row footer-button-contain">
          <buttonGlobal :title="'Découvrir les bonnes pratiques'" :bgColor="'#F0CC00'" :fontSize="25" :routeName="'bestPractices'" />
        </div>
      </div>
    </div>
</template>

<script>
import lightIcon from '@/components/icons/lightIcon'
import crossIcon from '@/components/icons/crossIcon'
import buttonGlobal from '@/components/buttonGlobal'

export default {
  name: 'adviceBlock',
  components: {
    lightIcon,
    crossIcon,
    buttonGlobal
  },
  data: function () {
    return {
      advicesTable:[
        { title: 'UN MOUSSEUR (OU AÉRATEUR)', text: 'Une fois placé sur votre robinet, ce petit dispositif injecte de minuscules bulles d’air dans l’eau qui coule. Le débit du robinet est ainsi réduit de 30 à 50%!'},
        { title: 'UNE DOUCHETTE ÉCONOME', text: 'Avec le même confort d’utilisation qu’une douchette classique, elle limite le débit de sortie de l’eau tout en optimisant la pression du jet. Vous réalisez ainsi jusqu’à 75% d’économies d’eau.'},
        { title: 'UN SABLIER OU UN MINUTEUR DANS LA SALLE DE BAIN', text: 'Ce petit objet que l’on trouve quasiment dans toutes les cuisines peut être fort utile dans la salle de bain. Il vous rappellera par exemple que le temps passé sous la douche ne doit pas dépasser 5 minutes.'},
        { title: 'UN THERMOMÈTRE', text: 'Placé dans le congélateur, le réfrigérateur et un peu partout dans la maison, il permet à tout moment de juger si la température est adéquate. Vous pourrez ainsi régler votre congélateur, votre réfrigérateur et vos radiateurs pour éviter de trop consommer'},
        { title: 'UNE MULTIPRISE À INTERRUPTEUR', text: 'C’est l’accessoire indispensable pour faire des économies d’électricité. Brancher plusieurs appareils sur une multiprise permet d’éteindre simultanément tous vos équipements en veille. À la clé: jusqu’à 10% d’économies sur votre facture d’électricité!'},
        { title: 'UNE PRISE PROGRAMMABLE MÉCANIQUE', text: 'Grâce à un système de programmation hebdomadaire et/ou quotidienne, cette prise doté d’une minuterie permet d’automatiser la mise en marche/l’arrêt de vos appareils électriques. En déterminant ainsi précisément leurs périodes de fonctionnement, vous réalisez des économies d’électricité.'},
        { title: 'UN WATTMÈTRE', text: 'Relié à une prise, ce système permet de vérifier la consommation de votre appareil électrique. Il sera ensuite plus facile pour vous de mesurer les économies que vous pouvez réaliser'}
      ]
    }
  },
  computed: {
    randomAdvice: function () {
      let randomNumber = Math.floor(Math.random() * Math.floor(this.advicesTable.length))
      return this.advicesTable[randomNumber]
    }
  },
  methods: {
    checkState: function (value) {
      (value) ? this.$emit('adviceBlockDestroy', true) : null
    },
  }
}
</script>

<style lang="scss" scoped>

.adviceBlock {
  border-radius: 5px;
  width: 100%;
  background-color: #FEF5EF;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.623);
  .container-fluid {
    padding-top: 5px;
    padding-bottom: 5px;
    .head-block {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .title {
        color: #343434;
        font-size: 25px;
        font-weight: 600;
      }
    }
    .picture-advice {
      .img {
        margin-top: 25px;
      }
    }
    .col {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
    .footer-button-contain {
      padding: 15px;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
}

</style>
