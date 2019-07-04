<template>
    <div class="menuSideButton" @click="goToView">
        {{ title }}
        <menuSideButtonIcon />
    </div>
</template>

<script>
import menuSideButtonIcon from '@/components/icons/menuSideButtonIcon'

export default {
  name: 'menuSideButton',
  components: {
    menuSideButtonIcon
  },
  props: {
    title: {
      type: String
    },
    route: {
      type: String
    }
  },
  methods: {
    goToView: function () {
      this.$router.push({ name: this.route })
    }
  }
}
</script>

<style lang="scss" scoped>

.menuSideButton {
    color: #ffffff;
    cursor: pointer;
}

</style>
