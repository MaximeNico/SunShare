<template>
    <div class="adviceBlock">
      <div class="container-fluid">
        <div class="head-block">
          <div class="title">
            <lightIcon />
            {{ title }}
          </div>
          <crossIcon @crossIconClicked="checkState" />
        </div>
        <div class="row main-contain">
          <div class="col col-2 picture-advice">
            <img src="../assets/recycling.png" alt="Recycling">
          </div>
          <div class="col col-10 text-content-advice">
            {{ adviceText }}
          </div>
        </div>
        <div class="row footer-button-contain">
          <buttonGlobal :title="'Découvrir les bonnes pratiques'" :bgColor="'#F0CC00'" :fontSize="25"  />
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
  props: {
    title: {
      type: String,
      default: 'Nos conseils'
    }
  },
  data: function () {
    return {
      adviceText: 'Cat ipsum dolor sit amet, and sometimes switches in french and say "miaou" just because well why not for groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked dont wait for the storm to pass, dance in the rain. Sit in window and stare oooh, a bird, yum cough. Have my breakfast spaghetti yarn cat dog hate mouse eat string barf pillow no baths hate everything so pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now for touch water with paw then recoil in horror sit on the laptop.'
    }
  },
  methods: {
    checkState: function (value) {
      (value) ? this.$emit('adviceBlockDestroy', true) : null
    }
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
