<template>
    <div class="container menuSide">
        <menuSideButton :title="'Tableau de bord'" :route="'dashBoard'" />
        <menuSideButton :title="'Mon équipe'" />
        <menuSideButton :title="'Mon profile'" />
        <menuSideButton :title="'Bonnes pratiques'" />
    </div>
</template>

<script>
import menuSideButton from '@/components/menuSideButton'

export default {
  name: 'menuSide',
  components: {
    menuSideButton
  }
}
</script>

<style lang="scss" scoped>

.container {
    background-color: #212120;
    width: 100%;
    height: 100%;
}

</style>
