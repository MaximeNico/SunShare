<template>
    <div class="buttonGLobal">
        <button type="button" :style="{ backgroundColor: bgColor, color: color, fontSize: fontSize }" class="btn btn-lg">{{ title }}</button>
    </div>
</template>

<script>
export default {
  name: 'buttonGlobal',
  props: {
    title: {
      type: String,
      default: 'Découvrir'
    },
    color: {
      type: String,
      default: '#ffffff'
    },
    bgColor: {
      type: String,
      default: '#000000'
    },
    fontSize: {
      type: Number,
      default: 25
    }
  }
}
</script>
