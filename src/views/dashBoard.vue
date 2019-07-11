<template>
  <div class="container-fluid dashBoard">
    <div class="row advice-contain">
      <div class="col col-12">
        <transition name="fade" mode="in-out">
          <adviceBlock v-if="showAdvice" @adviceBlockDestroy="checkAdviceBlockStatus" />
        </transition>
      </div>
    </div>
    <div class="row main-contain">
      <div class="col col-8">
        <div class="container-fluid block graph-conso">
          <div class="row">
            <div class="container">
              <div class="head-block">
                {{ graphConsoTitle }}
                <moreInformationIcon />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col col-12">
              <graphLine :dataGraph="getDatasFromUser" :titleGraph="'test graph conso'" />
            </div>
          </div>
        </div>
      </div>
      <div class="col col-4">
        <div class="container-fluid block graph-prev">
          <div class="row">
            <div class="container">
              <div class="head-block">
                {{ graphPreviTitle }}
                <moreInformationIcon />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col col-12">
              <graphLine :dataGraph="tableGraphPrev" :titleGraph="'test graph previ'" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row main-contain">
      <div class="col col-12">
        <div class="container-fluid score-round-graph">
          <div class="row">
            <div class="col col-5 round-graph">
              <graphDoughnut :dataGraph="tableGraphScore" :titleGraph="null" />
            </div>
            <div class="col col-7 score-legend">
              <div class="row score-text">
                <p class="title">{{ scoreTitle }}</p>
                <p class="main-text">{{ scoreText }}</p>
              </div>
              <!-- <div class="row legend-roud-graph">
                Legends
              </div> -->
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
import graphLine from '@/components/graphLine'
import graphDoughnut from '@/components/graphDoughnut'
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'dashBoard',
  components: {
    adviceBlock,
    moreInformationIcon,
    graphLine,
    graphDoughnut
  },
  data: function () {
    return {
      //tableGraphConso:
      /*[
        ['8h', 350, 450, 210],
        ['10h', 340, 240, 220],
        ['12h', 520, 280, 210],
        ['14h', 560, 480, 320],
        ['16h', 550, 500, 280],
        ['18h', 430, 520, 250],
        ['20h', 300, 450, 220]
      ]*/
      tableGraphPrev: [
        ['8h', 120, 150, 250],
        ['12h', 250, 360, 170],
        ['16h', 200, 420, 150],
        ['20h', 180, 190, 150]
      ],
      tableGraphScore: [
        ['Injection', 25],
        ['Soutirage', 15],
        ['Auto-consommation', 60]
      ],
      showAdvice: true,
      graphConsoTitle: 'Graphique de mes consommations',
      graphPreviTitle: 'Graphique prévisionnel',
      scoreTitle: 'Mon score',
      scoreText: 'Cat ipsum dolor sit amet, and sometimes switches in french and say "miaou" just because well why not for groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked dont wait for the storm to pass, dance in the rain. Sit in window and stare oooh, a bird, yum cough.'
    }
  },
  computed: mapState([
    'app'
  ]),
  computed: {
    getDatasFromUser: function(id=1){
      axios.get('http://127.0.0.1:8888/datas/user/1/2019-06-27', {crossdomain: true})
        .then(function (response) {
          // handle success
          console.log(response.data);
          return response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });

    }
  },
  mounted: function () {
    (!this.app.token.accessToken) ? this.$router.push({ name: 'logConsent' }) : null
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
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
    .score-round-graph {
      background-color: #707070;
      .round-graph {
        padding: 10px 0 0 15px;
      }
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
