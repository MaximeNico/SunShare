<template>
    <div class="graphDoughnut" ref="graphDoughnut"></div>
</template>

<script>
import Anychart from 'anychart'

export default {
  name: 'graphDoughnut',
  props: {
    dataGraph: {
      type: Array
    },
    titleGraph: {
      type: String,
      default: 'Graphique'
    }
  },
  mounted: function () {
    var graph = Anychart.pie()
    graph.data(this.dataGraph)
    graph.innerRadius('75%')
    graph.title(this.titleGraph)
    graph.labels().position('inside')
    graph.labels().fontColor('#000000')
    graph.insideLabelsOffset('-75%')
    graph.container(this.$refs.graphDoughnut)
    graph.draw()
  }
}
</script>

<style lang="scss" scoped>

.graphDoughnut {
    width: 100%;
    min-height: 250px;
    height: 300px;
    padding: 5px 0 15px 0;
}

</style>
