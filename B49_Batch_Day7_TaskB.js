fetch('https://restcountries.com/v3.1/all')
.then((res)=> res.json())
.then((message)=> {
    let less_population_countries = message.filter((value)=> value.population < 200000)
    console.log(less_population_countries);
})
.catch((err) => console.log(err))