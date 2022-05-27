<template>
  <div id="app">
    <PageHeader/>
    <div id="options">
      <div id="searchbar">
        <input type="text" v-model="search" placeholder="look for a fruit..." />
        <button v-if="search" @click="emptySearchbar">X</button>
      </div>
      <div id="sortbar">
        <label for="fruit-sort">Search by: </label>
        <select id="fruit-sort" v-model="fruitSortType">
          <option value="AZName">name (A-Z)</option>
          <option value="ZAName">name (Z-A)</option>
          <option value="AZFamily">family (A-Z)</option>
          <option value="ZAFamily">family (Z-A)</option>
          <option value="AZCalories">calories (lowest)</option>
          <option value="ZACalories">calories (highest)</option>
        </select>
      </div>
    </div>
    <div id="fruits-gallery">
      <p v-if="isLoading">Loading...</p>
      <div class="cards" v-for="fruit in sortedFruitlist" :key="fruit.id">
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
  computed: {
    sortedFruitlist: function() {
      let data = this.fruitlist.filter((a) => a.name.toLowerCase().includes(this.search.toLowerCase())) // filter
      let field = ""
      if(["AZName","ZAName","AZFamily","ZAFamily"].includes(this.fruitSortType)) { //name&family
        ["AZName","ZAName"].includes(this.fruitSortType) ? field="name" : field="family"
        data = data.sort((a,b) => a[field].localeCompare(b[field]))
      }
      else if(["AZCalories","ZACalories"].includes(this.fruitSortType)) { //calories
        data = data.sort((a,b) => a["nutritions"]["calories"]-b["nutritions"]["calories"])
      }
      const reversed = ["ZAName", "ZAFamily", "ZACalories"].includes(this.fruitSortType) ? true : false //reverse
      if(reversed) data = data.reverse()
      return data
    }
  },
  created: function() {
    this.getFruitList()
  },
  watch: {
    search: function(newSearch) {
      localStorage.setItem("search", newSearch)
    },
    fruitSortType: function(newfruitSortType) {
      localStorage.setItem("fruitSortType", newfruitSortType)
    },
  },
  data() {
    return{
      fruitlist: [],
      fruitSortType: localStorage.getItem("fruitSortType") || "AZName",
      isLoading: true,
      search: localStorage.getItem("search") || ""
    }
  },
  methods: {
    getFruitList : async function() {
      this.fruitlist = await getAll(),
      this.isLoading = false
    },
    emptySearchbar : function() {
      this.search = ""
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
  color: #373737;
  margin-top: 20px;
}

#options {
  display: flex;
  justify-content: center;
  gap: 10px;
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
  color: #ffffff;
  width: 15%;
  float: left;
  padding: 20px;
  border-radius: 15px 50px;
  margin: 5px
}

</style>
