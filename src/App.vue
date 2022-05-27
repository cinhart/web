<template>
  <div id="app">
    <PageHeader/>
    <div id="searchbar">
        <input type="text" v-model="search" placeholder="look for a fruit..." />
    </div>
    <div id="fruits-gallery">
      <p id="loading" v-if="isLoading">Loading...</p>
      <div class="cards" v-for="fruit in fruitlist" :key="fruit.id">
        <FruitCard :name="fruit.name"  :family="fruit.family" :order="fruit.order" :calories="fruit.nutritions.calories"/>
      </div>
    </div>
    <PageFooter/>
  </div>
</template>


<script>
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
import FruitCard from './components/FruitCard.vue'
import {getAll} from './services/api/request.js'

export default {
  name: 'App',
  components: {
    PageHeader,
    FruitCard,
    PageFooter
},
  created: function() {
    this.getFruitList()
  },
  data(){
    return{
      search:"",
      isLoading : true,
      fruitlist : []
    }
  },
  methods: {
    getFruitList : async function() {
      this.fruitlist = await getAll(),
      this.isLoading = false
    }
  }
}
</script>


<style>
body {
  min-height:100%;
  padding:0;
  margin:0;
  position:relative;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 20px;
}

#fruits-gallery {
  margin-top: 20px;
  padding-bottom: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.cards {
  background: #9ba747;
  width: 15%;
  float: left;
  padding: 20px;
  border-radius: 15px 50px;
  margin: 5px
}

#loading {
  color: #373737;
}

</style>
