fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((message) => {
        let populationArray = [];
        message.forEach(element => {
            populationArray.push(element.population);
        })
        let totalPopulation = populationArray.reduce((total,value) => total + value)
        console.log(`Total populations is ${totalPopulation}`); //Output: Total populations is 7777721563
        
        
        
    })
    .catch((err) => console.log(err))