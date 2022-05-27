<template>
  <div class="fruit-card">
    <div>
      <h2 class="name">{{name}}</h2>
      <h3 class="family">{{family}}</h3>
      <h3 class="order">{{order}}</h3>
      <p class="calories">calories: {{calories}} cal</p>
      <p class="sugar">sugar: {{sugar}} g</p>
      <p class="protein">protein: {{protein}} g</p>
      <p class="fat">fat: {{fat}} g</p>
    </div>  
  </div>
</template>

<script>
	export default {
        name: 'FruitCard',
        props: {
            name: {type:String, required: true},
            family: {type:String, default:"Unspecified"},
            calories: {type:Number, required: true},
            protein: {type:Number, required: true},
            sugar: {type:Number, required: true},
            fat: {type:Number, required: true}
        }
	}
</script>

<style>

	.fruit-card {
        color: #F4F1DE;
        text-align: left;
        padding-bottom: 10px;
        padding-left: 10px;
	}

	h2 {
    margin:0;
    font-family: 'Source Sans 3';
		font-size: 22px;
	}

  h3 {
    margin:0;
    margin-bottom:10px;
    font-size: 12px;
  }

  p {
    margin:0;
    font-size: 12px;
  }

</style>