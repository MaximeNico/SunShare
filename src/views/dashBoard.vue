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
              <graphLine :dataGraph="tableGraphConso" :titleGraph="'test graph conso'" />
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
      tableGraphConso:
     [["0H0",320,0,0],["0H15",308,0,0],["0H30",368,0,0],["0H45",304,0,0],["1H0",248,0,0],["1H15",292,0,0],["1H30",356,0,0],["1H45",276,0,0],["2H0",256,0,0],["2H15",308,0,0],["2H30",324,0,0],["2H45",244,0,0],["3H0",248,0,0],["3H15",307,0,0],["3H30",256,0,0],["3H45",268,0,0],["4H0",292,0,0],["4H15",304,0,0],["4H30",224,0,0],["4H45",240,0,0],["5H0",324,0,0],["5H15",268,0,0],["5H30",224,0,0],["5H45",280,0,0],["6H0",324,0,0],["6H15",244,0,0],["6H30",184,0,4],["6H45",176,6,8],["7H0",160,28,28],["7H15",104,62,64],["7H30",84,109,112],["7H45",116,183,184],["8H0",56,242,240],["8H15",364,308,304],["8H30",488,373,376],["8H45",76,442,436],["9H0",0,536,400],["9H15",0,694,464],["9H30",4,485,423],["9H45",0,559,432],["10H0",0,495,352],["10H15",0,782,585],["10H30",8,690,576],["10H45",0,1139,640],["11H0",0,1227,588],["11H15",0,1277,716],["11H30",0,1310,640],["11H45",20,1391,559],["12H0",8,1268,660],["12H15",0,1412,741],["12H30",0,1567,408],["12H45",0,1490,497],["13H0",0,1667,748],["13H15",0,1668,552],["13H30",0,1618,412],["13H45",0,1614,476],["14H0",0,1604,620],["14H15",0,1590,416],["14H30",0,1511,404],["14H45",0,1539,620],["15H0",0,1374,639],["15H15",0,1320,601],["15H30",0,1276,632],["15H45",0,1216,700],["16H0",0,1141,656],["16H15",0,1092,509],["16H30",0,969,559],["16H45",0,898,541],["17H0",0,831,468],["17H15",0,767,451],["17H30",0,680,480],["17H45",0,589,480],["18H0",0,492,416],["18H15",84,297,284],["18H30",148,215,212],["18H45",132,181,180],["19H0",140,180,180],["19H15",188,169,168],["19H30",0,0,0],["19H45",0,0,0],["20H0",241,100,100],["20H15",283,95,96],["20H30",284,86,84],["20H45",284,74,76],["21H0",0,0,0],["21H15",307,23,20],["21H30",0,0,0],["21H45",0,0,0],["22H0",0,0,0],["22H15",272,17,16],["22H30",272,18,20],["22H45",489,0,0],["23H0",488,0,0],["23H15",452,0,0],["23H30",432,0,0],["23H45",0,0,0]],
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

    getDatasFromUser(id=1){
      axios.get('http://127.0.0.1:8888/datas/user/1/2019-06-27', {crossdomain: true})
        .then(function (response) {
          // handle success
          console.log(response.data);
          this.tableGraphConso = response.data
          return this.tableGraphConso;

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
    /*axios.get('http://127.0.0.1:8888/datas/user/1/2019-06-27', {crossdomain: true})
      .then(function (response) {
        // handle success
        console.log(response.data);
        this.tableGraphConso = response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });*/
  },
  methods: {
    checkAdviceBlockStatus: function (value) {
      (value) ? this.showAdvice = false : null
    },
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
