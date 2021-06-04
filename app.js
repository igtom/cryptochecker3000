const URL = "https://api.nomics.com/v1/currencies/ticker?key=54db4c91ba3ea5fe94e9e19ad98226e16b43265b&ids="
const result  = document.querySelector('.result');
const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', formSubmitted);

function formSubmitted(event) {
    event.preventDefault();
    let searchTerm = input.value;
    searchTerm = searchTerm.toUpperCase();
    searchStart();
    getCoins(searchTerm)
}

const searchStart = () => {
    result.innerHTML = '';
}

const getCoins = async searchTerm => {
    let response = await fetch(`${URL}${searchTerm}&interval=1d,30d&convert=EUR&per-page=200&page=1`)
    let coins = await response.json()
    coins.forEach(coin => {
        const imageElement = document.createElement('img');
        const nameElement = document.createElement('h2');
        const priceElement = document.createElement('h4');
        imageElement.src = coin.logo_url
        nameElement.innerHTML = `${coin.name} (${coin.id})`
        priceElement.innerHTML = `${parseFloat(coin.price).toFixed(2)}€`
        const output = document.createElement('div')
        output.setAttribute('class', 'row')
        result.appendChild(output)
        output.appendChild(imageElement)
        output.appendChild(nameElement)
        output.appendChild(priceElement)
    })
}





