<template>
    <div class="graphLine" ref="graphLine"></div>
</template>

<script>
import Anychart from 'anychart'

export default {
  name: 'graphLine',
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
    var graph = Anychart.line()
    graph.data(this.dataGraph)
    // graph.title('Test graph conso months')
    graph.title(this.titleGraph)
    graph.container(this.$refs.graphLine)
    graph.draw()
  }
}
</script>

<style lang="scss" scoped>

.graphLine {
    width: 100%;
    min-height: 250px;
    height: 300px;
    padding: 5px 0 15px 0;
}

</style>
