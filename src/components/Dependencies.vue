<template>
  <section class="team-boxed">
    <div class="container">
      <div class="intro">
        <h2 class="text-center">About</h2>
        <p class="text-center">Quickly view crypto prices in real-time via Binance API for popular currencies as well as conversions to/from USD.</p>
        <p> .</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Dependencies',
  data: () => ({
    items: [
      {
        key: 'websocket',
        name: 'WebSocket',
        title: 'API',
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSocket',
        description: 'Interactive communication session between the user\'s browser and a server.',
        image: require('../assets/img/websocket.svg')
      },
      {
        key: 'vue-js',
        name: 'Vue.js',
        title: 'FRAMEWORK',
        url: 'https://github.com/vuejs/vue',
        description: 'The Progressive JavaScript Framework',
        image: require('../assets/img/vue.svg')
      },
      {
        key: 'bootstrap',
        name: 'Bootstrap',
        title: 'FRAMEWORK',
        url: 'https://github.com/twbs/bootstrap',
        description: 'Build fast, responsive sites with Bootstrap',
        image: require('../assets/img/bootstrap.png')
      },
      {
        key: 'd3-js',
        name: 'D3.js',
        title: 'VISUALIZING',
        url: 'https://github.com/d3/d3',
        description: 'Library for visualizing data using web standards',
        image: require('../assets/img/d3.svg')
      }
    ]
  })
}
</script>

<style scoped>
.team-boxed .description {
  min-height: 120px;
}
.team-boxed .title {
  user-select: none;
}
</style>
