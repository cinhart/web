axios
.get('https://www.fruityvice.com/api/fruit/all')
.then(response => (his.info = response.data.bpi))
.catch(error => console.log(error))