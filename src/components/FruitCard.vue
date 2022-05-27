<template>
  <div class="fruit-card">
    <div>
      <h2 class="name">{{name}}</h2>
      <h3 class="family">family: {{family}}</h3>
      <h3 class="order">order: {{order}}</h3>
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
        color: #F4F1DE;
        text-align: left;
	}

	h2 {
    margin:0;
    font-family: 'Source Sans 3';
		font-size: 22px;
	}

  h3 {
    margin:0;
    font-size: 12px;
  }

  p {
    font-size: 12px;
  }

</style>