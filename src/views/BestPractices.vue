<template>
    <div class="bestPractices">
      <div class="container-fluid">
        <transition-group tag="div" name="list" appear>
          <div class="row" v-for="advice in advicesArray" :key="advice.id">
            <div class="col col-12">
              <div class="jumbotron jumbotron-fluid">
                <div class="container">
                  <h3 class="display-4 title">{{ advice.title }}</h3>
                  <p class="lead text">{{ advice.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
</template>

<script>
export default {
  name: 'BestPractices',
  data: function () {
    return {
      advicesArray:[
        { id: 1, title: 'UN MOUSSEUR (OU AÉRATEUR)', text: 'Une fois placé sur votre robinet, ce petit dispositif injecte de minuscules bulles d’air dans l’eau qui coule. Le débit du robinet est ainsi réduit de 30 à 50%!'},
        { id: 2, title: 'UNE DOUCHETTE ÉCONOME', text: 'Avec le même confort d’utilisation qu’une douchette classique, elle limite le débit de sortie de l’eau tout en optimisant la pression du jet. Vous réalisez ainsi jusqu’à 75% d’économies d’eau.'},
        { id: 3, title: 'UN SABLIER OU UN MINUTEUR DANS LA SALLE DE BAIN', text: 'Ce petit objet que l’on trouve quasiment dans toutes les cuisines peut être fort utile dans la salle de bain. Il vous rappellera par exemple que le temps passé sous la douche ne doit pas dépasser 5 minutes.'},
        { id: 4, title: 'UN THERMOMÈTRE', text: 'Placé dans le congélateur, le réfrigérateur et un peu partout dans la maison, il permet à tout moment de juger si la température est adéquate. Vous pourrez ainsi régler votre congélateur, votre réfrigérateur et vos radiateurs pour éviter de trop consommer'},
        { id: 5, title: 'UNE MULTIPRISE À INTERRUPTEUR', text: 'C’est l’accessoire indispensable pour faire des économies d’électricité. Brancher plusieurs appareils sur une multiprise permet d’éteindre simultanément tous vos équipements en veille. À la clé: jusqu’à 10% d’économies sur votre facture d’électricité!'},
        { id: 6, title: 'UNE PRISE PROGRAMMABLE MÉCANIQUE', text: 'Grâce à un système de programmation hebdomadaire et/ou quotidienne, cette prise doté d’une minuterie permet d’automatiser la mise en marche/l’arrêt de vos appareils électriques. En déterminant ainsi précisément leurs périodes de fonctionnement, vous réalisez des économies d’électricité.'},
        { id: 7, title: 'UN WATTMÈTRE', text: 'Relié à une prise, ce système permet de vérifier la consommation de votre appareil électrique. Il sera ensuite plus facile pour vous de mesurer les économies que vous pouvez réaliser'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.bestPractices {
  width: 100%;
  .title {
    font-size: 35px;
    font-weight: bold;
  }
  .text {
    font-weight: 600;
  }
}

/* --- transition css --- */

.list-enter-active,
.list-leave-active,
.list-move {
  transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
  transition-property: opacity, transform;
}

.list-enter {
  opacity: 0;
  transform: translateX(50px) scaleY(0.5);
}

.list-enter-to {
  opacity: 1;
  transform: translateX(0) scaleY(1);
}

.list-leave-active {
  position: absolute;
}

.list-leave-to {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: center top;
}

</style>

