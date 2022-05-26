<template>
  <div class="fruit-card">
    <div>
      <h2 class="name">{{name}}</h2>
      <p class="family">family: {{family}}</p>
      <p class="order">order: {{order}}</p>
      <p class="calories">calories: {{calories}} cal</p>
    </div>  
  </div>
</template>

<script>
	export default {
        name: 'FruitCard',
        props: {
            name: {type:String, required: true},
            family: {type:String, default:"Unspecified"},
            order: {type:String, default:"Unspecified"},
            calories: {type:Number, required: true}
        }
	}
</script>

<style>
	.fruit-card {
        text-align: left;
	}

	h2 {
		font-size: 20px;
	}
</style>