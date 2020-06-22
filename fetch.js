let endpoint = 'https://restcountries.eu/rest/v2/all'
let options = {
    method: 'GET'
}


fetch(endpoint, options)
    .then((response) => response.json())
    .then((results) => {
        console.log(results);

        results.map(result => {
            console.log(result.name)

        });
    })
    .catch((error) => console.log(error));