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
        padding:1vw;
        padding-top: 0vw;
        padding-bottom: 0.5vw;
	}

	h2 {
    margin:0;
    font-family: 'Source Sans 3';
		font-size: 2.4vw;
	}

  h3 {
    margin:0;
    margin-bottom:1vw;
    font-size: 1.2vw;
  }

  p {
    margin:0;
    font-size: 1vw;
  }

</style>