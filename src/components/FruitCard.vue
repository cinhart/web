<template>
  <div class="fruit-card">
    <div>
      <h2 class="name">{{name}}</h2>
      <p class="family">famille des {{family}}</p>
      <p class="order">ordre {{order}}</p>
      <p class="calories">{{calories}} cal</p>
    </div>  
  </div>
</template>

<script>
	export default {
        name: 'FruitCard',
        props: {
            name: {type:String, required: true},
            family: {type:String, required: true},
            order: {type:String, default:"inconnu"},
            calories: {type:String, default: "???"}
        }
	}
</script>

<style>
	.fruit-card {
        display: flex;
	}

	h2 {
		font-size: 20px;
	}
</style>