var btc = document.getElementById("bitcoin")
var eth = document.getElementById("ethereum")
var doge = document.getElementById("dogecoin")
var tether = document.getElementById("tether")

var percentage_btc = document.getElementById("percentage_btc")
var percentage_eth = document.getElementById("percentage_eth")
var percentage_doge = document.getElementById("percentage_doge")
var percentage_tether = document.getElementById("percentage_tether")

var settings = {
    "async": true,
    "scrossDomian": true,
    "url": "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cdogecoin%2Csolana%2Ctether%2Cusd%2Ccardano%2Cpolkadot&order=market_cap_desc&page=1&sparkline=false&price_change_percentage=24h%2C7d",
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function (response){
    for(indice in response){
        // console.log(response[indice])
        
        // Function display
        function display(nameBlock, indice, percentageBlock, changePriceDay, colorPercent){
            nameBlock.innerHTML = indice.current_price
            percentageBlock.innerHTML = Math.round(changePriceDay * 100) / 100 + "%"
            percentageBlock.setAttribute("style", `color: ${colorPercent}`)
        }

        // Function DisplayImage
        function displayImage(src, width, height, alt){
            var img = document.createElement("img");
            img.src = src;
            img.setAttribute("style", `width: ${width}px; height: ${height}px; display: block; margin: 8px`);
            var block = document.getElementById(`${alt}`);
            block.appendChild(img);
            block.setAttribute("style", "margin-right: 10px")
        }

        function color(pricePercent){
            if (pricePercent >= 0){
                return 'greenyellow'
            } else {
                return 'red'
            }
        }

        if(response[indice].id == 'bitcoin'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            display(btc, response[indice], percentage_btc, pricePercent, color(pricePercent))
            displayImage(response[indice].image, 41, 41, 'BitcoinImage');
        }
        if(response[indice].id == 'ethereum'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            display(eth, response[indice], percentage_eth, pricePercent, color(pricePercent))
            displayImage(response[indice].image, 41, 41, 'EthereumImage');
        }
        if(response[indice].id == 'tether'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            display(tether, response[indice], percentage_tether, pricePercent, color(pricePercent))
            displayImage(response[indice].image, 41, 41, 'TetherImage');
        }
        if(response[indice].id == 'dogecoin'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            display(doge, response[indice], percentage_doge, pricePercent, color(pricePercent))
            displayImage(response[indice].image, 41, 41, 'DogeImage');
        }
    }
})
