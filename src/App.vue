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
        <FruitCard :name="fruit.name"  :family="fruit.family" :calories="fruit.nutritions.calories" 
          :protein="fruit.nutritions.protein" :sugar="fruit.nutritions.sugar" :fat="fruit.nutritions.fat"/>
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
@import url('https://fonts.googleapis.com/css2?family=Sintony&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@900&display=swap');

body, html {
  padding:0;
  margin:0;
  background: #F4F1DE;
}


#app {
  font-family: 'Sintony';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3d405b;
  font-size: 1.2vw;
}

#options {
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
}

input, select, button {
  font-size: 1.2vw;
  background: #F2CC8F;
  border: 0;
  padding: 0.5vw;
  outline-color: #E07A5F;
  font-family: 'Sintony';
  color:#3d405b;
  box-shadow: inset 1px 2px 4px rgba(61, 64, 91, 0.1);
}

::placeholder {
  font-family: 'Sintony';
  color:#3d405b;
}

#fruits-gallery {
  padding: 3%;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.cards {
  background: #81B29A;
  box-shadow: 2px 4px 4px rgba(61, 64, 91, 0.1);
  border-radius: 0.5vw 5vw;
  width: 15%;
  float: left;
  padding: 2vw;
  margin: 5px
}

</style>
