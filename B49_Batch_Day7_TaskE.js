fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((message) => {
        allCountries = [];
        message.forEach((value) => {
            allCountries.push(value);
        })
        // console.log(allCountries);
        usdCountries = allCountries.filter(val => {
            if(val.currencies != null){
                if(Object.keys(val.currencies) == "USD"){
                    return val;
                }
            }
        })
        usdCountries.forEach(element => {
            console.log(element.name, element.currencies);
        })
    })
    .catch((err) => console.log(err))