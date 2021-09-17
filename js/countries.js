const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
const displayCountries = countries => {
    console.log(countries[0]);
    const container = document.getElementById('countries')
    const countryHTML = countries.map(country => getCountriesHTML(country))
    container.innerHTML = countryHTML.join(' ')
    console.log(countryHTML[0]);
}
const getCountriesHTML = country => {
    // using destructuring
    const { name, capital, flag } = country;
    return `
        <div class= "country">
            <h2>${'Country Name:', name}</h2>
            <h4>${'Capital Name:', capital}</h4>
            <img src="${flag}">
        </div>
    `
}
loadCountries()