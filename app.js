const URL = "https://api.nomics.com/v1/currencies/ticker?key=54db4c91ba3ea5fe94e9e19ad98226e16b43265b&ids=BTC,ETH,DOGE,ADA,USDT,BNB&interval=1d,30d&convert=EUR&per-page=100&page=1";
const result  = document.querySelector('.result');


async function getCoins() {
    let response = await fetch(URL)
    let coins = await response.json()
    coins.forEach(coin => {
        const imageElement = document.createElement('img');
        const nameElement = document.createElement('h2');
        const priceElement = document.createElement('h4');
        imageElement.src = coin.logo_url
        nameElement.innerHTML = coin.name
        priceElement.innerHTML = `${parseFloat(coin.price).toFixed(2)}€`
        result.appendChild(imageElement)
        result.appendChild(nameElement)
        result.appendChild(priceElement)
    })
}

getCoins()


