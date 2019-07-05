<template>
  <div class="container-fluid dashBoard">
    <div class="row advice-contain">
      <div class="col col-12">
        <transition name="fade">
          <adviceBlock v-if="showAdvice" :title="'Conseil du jour !'" @adviceBlockDestroy="checkAdviceBlockStatus" />
        </transition>
      </div>
    </div>
    <div class="row main-contain">
      <div class="col col-8">
        <div class="container-fluid block graph-conso">
          <div class="head-block">
            {{ graphConsoTitle }}
            <moreInformationIcon />
          </div>
        </div>
      </div>
      <div class="col col-4">
        <div class="container-fluid block graph-prev">
          <div class="head-block">
            {{ graphPreviTitle }}
            <moreInformationIcon />
          </div>
        </div>
      </div>
    </div>
    <div class="row main-contain">
      <div class="col col-12">
        <div class="container-fluid score-round-graph">
          <div class="row">
            <div class="col col-5 round-graph"></div>
            <div class="col col-7 score-legend">
              <div class="row score-text">
                <p class="title">{{ scoreTitle }}</p>
                <p class="main-text">{{ scoreText }}</p>
              </div>
              <div class="row legend-roud-graph">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import adviceBlock from '@/components/adviceBlock'
import moreInformationIcon from '@/components/icons/moreInformationIcon'

export default {
  name: 'dashBoard',
  components: {
    adviceBlock,
    moreInformationIcon
  },
  data: function () {
    return {
      showAdvice: true,
      graphConsoTitle: 'Graphique de mes consommations',
      graphPreviTitle: 'Graphique prévisionnel',
      scoreTitle: 'Mon score',
      scoreText: 'Cat ipsum dolor sit amet, and sometimes switches in french and say "miaou" just because well why not for groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked dont wait for the storm to pass, dance in the rain. Sit in window and stare oooh, a bird, yum cough.'
    }
  },
  methods: {
    checkAdviceBlockStatus: function (value) {
      (value) ? this.showAdvice = false : null
    }
  }
}
</script>

<style lang="scss" scoped>

.dashBoard {
  .main-contain {
    margin-top: 15px;
    .block {
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.623);
      &.graph-conso {
        background-color: #707070;
      }
      &.graph-prev {
        background-color: #525252;
      }
      .head-block {
        color: #ffffff;
        font-size: 25px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
    .score-round-graph {
      background-color: #707070;
      .score-legend {
        .score-text {
          color: #ffffff;
          text-align: center;
          padding: 10px;
          .title {
            font-size: 65px;
            margin: auto;
          }
          .main-text {
            font-size: 20px;
            margin-top: 15px;
          }
        }
      }
    }
  }
}

</style>
