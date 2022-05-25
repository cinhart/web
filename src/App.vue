<template>
  <div id="app">
    <FruitCard name="Apple"  family="Rosaceae" calories="52"/>
    <FruitCard name="Cherry"  family="Rosaceae"/>
    <FruitCard name="Banana"  family="Musaceae"/>
  </div>
</template>


<script>
import FruitCard from './components/FruitCard.vue'

export default {
  name: 'App',
  components: {
    FruitCard
}
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
