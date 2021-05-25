const URL = "https://api.nomics.com/v1/currencies/ticker?key=your-api-key&ids=BTC,ETH,DOGE,ADA,USDT,BNB&interval=1d,30d&convert=EUR&per-page=100&page=1";
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



