<template>
    <div class="container menuSide">
      <div class="logo">
        <img src="../assets/sunshare-logo.png" alt="SunShare" height="75">
      </div>
      <div class="menu-buttons">
        <menuSideButton :title="'Tableau de bord'" :route="'dashBoard'" />
        <menuSideButton :title="'Mon équipe'" :route="'team'" />
        <menuSideButton :title="'Mon profile'" :route="'profil'" />
        <menuSideButton :title="'Bonnes pratiques'" :route="'bestPractices'" />
      </div>
      <div class="chat-button">
        <chatIcon />
      </div>
    </div>
</template>

<script>
import menuSideButton from '@/components/menuSideButton'
import chatIcon from '@/components/icons/chatIcon'

export default {
  name: 'menuSide',
  components: {
    menuSideButton,
    chatIcon
  }
}
</script>

<style lang="scss" scoped>

.container {
  background-color: #212120;
  width: 100%;
  height: 100%;
}

.menuSide {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .menu-buttons {
    min-height: 250px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}

</style>
