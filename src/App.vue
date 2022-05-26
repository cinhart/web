<template>
  <div id="app">
    <div v-for="fruit in fruitlist" :key="fruit.id">
      <FruitCard :name="fruit.name"  :family="fruit.family" :calories="fruit.nutritions.calories"/>
    </div>
  </div>
</template>


<script>
import FruitCard from './components/FruitCard.vue'
import {getAll} from './services/api/request.js'

export default {
  name: 'App',
  components: {
    FruitCard
},
  created: function() {
    this.getFruitList()
  },
  data(){
    return{
      post: null,
      searchbar:"",
      fruitlist : []
    }
  },
  methods: {
    getFruitList : async function() {
      this.fruitlist = await getAll()
    }
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
