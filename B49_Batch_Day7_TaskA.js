fetch('https://restcountries.com/v3.1/all')
.then((res)=> res.json())
.then((message)=> {
    let asian_countries = message.filter((value)=> value.region == "Asia")
    console.log(asian_countries);
})
.catch((err) => console.log(err))