const displayCountry = (data) => {
    const countryContainer = document.getElementById('country-container');
    countryContainer.innerHTML = '';
    data.forEach(element => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('border', 'shadow-lg', 'p-4');
        newDiv.innerHTML = `
        <p>Name: ${element.name.common}</p>
        <p>Capital: ${element.capital === undefined ? 'No capital' : element.capital[0]}</p>
        <button onclick="loadDetails('${element.cca2}')" class="btn btn-xs">Details</button>
        `
        countryContainer.appendChild(newDiv)
    });
}

const displayDetails = (data) => {
    const detailsContainer = document.getElementById('details-container');
    data.forEach(element => {
        detailsContainer.classList.add('bg-gray-900', 'text-center', 'text-white', 'border', 'shadow-lg', 'p-4', 'my-2');
        detailsContainer.innerHTML = `
        <p>Name: ${element.name.common}</p>
        <img class="mt-4 mx-auto" src="${element.flags.png}" alt="">
        `
    });
}