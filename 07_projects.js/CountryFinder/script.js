const btn = document.querySelector('button'),
inputEl = document.querySelector('input'),
capital = document.querySelector('.capital'),
currency = document.querySelector('.currency'),
continent = document.querySelector('.continent'),
population = document.querySelector('.population'),
language = document.querySelector('.lang'),
contentEl = document.querySelector('.content'),
country = document.querySelector('.country-name'),
infoDiv = document.querySelector('.info'),
image = document.querySelector('img');


btn.addEventListener('click',()=>{
    infoDiv.classList.add('show');
    let countryName = inputEl.value;

    if(countryName){
        infoDiv.innerHTML = 'Please wait fetching country information...'
        infoDiv.style.background = 'rgb(165, 231, 165)'
        getCountryDetails(countryName)
        country.textContent = countryName;
    }else{
        infoDiv.innerHTML = 'Please enter country name'
        infoDiv.style.background = 'rgb(233, 138, 138)'
    }
})

async function getCountryDetails(countryName){
    try {
        let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
        let resp = await fetch(url).then((data)=> data.json())
        let result = await resp[0];

        infoDiv.classList.remove('show')
        contentEl.classList.add('active')

        capital.innerHTML = `<strong>Capital:</strong>${result.capital[0]}`
        continent.innerHTML = `<strong>Continent:</strong>${result.continents[0]}`

        population.innerHTML = `<strong>Population:</strong>${result.population}`

        currency.innerHTML = `<strong>Currency:</strong>${Object.keys(result.currencies)[0]} - ${result.currencies[Object.keys(result.currencies)].name}`

        language.innerHTML = `<strong>Common Languages:</strong>${Object.values(result.languages).toString().split(",").join(", ")}`
        image.src = `${result.flags.png}`
    } catch (error) {
        infoDiv.classList.add('show')
        infoDiv.innerHTML = 'Please enter a valid country name'
        infoDiv.style.background = 'rgb(233, 138, 138)'
        contentEl.classList.remove('active')
    }
}