/* fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((message) => {
        for (msg in message) {
            let country_name = message[msg].name.official;
            let country_capital = message[msg].capital;
            let country_flag = message[msg].flag;

            console.log(`country's name: ${country_name}, country's capital: ${country_capital}, country's flag: ${country_flag}`);
        }
    })
    .catch((err) => console.log(err)) */


fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((message) => {
        message.forEach((value) => {
            console.log(`Country Name: ${value.name.official}, Country's Capital: ${value.capital}, Country's Flag: ${value.flag}`);
        })
    })
    .catch((err) => console.log(err))