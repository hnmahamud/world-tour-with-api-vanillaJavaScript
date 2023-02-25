const region = document.getElementById("region");
region.addEventListener('input', () => {
    const value = region.options[region.selectedIndex].value;
    loadCountryByRegion(value);
})

const loadDetails = (code) => {
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = '';
    const loader = document.getElementById('loader');
    loader.classList.remove('hidden');
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            loader.classList.add('hidden');
            displayDetails(data)
        })
}

const loadAllCountry = () => {
    const region = document.getElementById("region");
    const value = region.options[region.selectedIndex].value;
    let url;
    if(value === 'Filter by Region') {
        url = `https://restcountries.com/v3.1/all`;
    }
    else {
        url = `https://restcountries.com/v3.1/region/${value}`
    }
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountry(data))
}

const loadCountryByRegion = (region) => {
    const url = `https://restcountries.com/v3.1/region/${region}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountry(data.slice(0, 9)))
}

const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data.slice(0, 9)))
}

loadCountry();