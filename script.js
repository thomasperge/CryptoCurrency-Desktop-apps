var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var tether = document.getElementById("tether");
var usd = document.getElementById("usd-coin");
var bnb = document.getElementById("binancecoin");
var binanceusd = document.getElementById("binance-usd");
var cardano = document.getElementById("cardano");
var ripple = document.getElementById("ripple");
var solana = document.getElementById("solana");
var polkadot = document.getElementById("polkadot");
var doge = document.getElementById("dogecoin");
var shiba = document.getElementById("shiba-inu");
var avalanche = document.getElementById("avalanche-2");
var litecoin = document.getElementById("litecoin");
var poligon = document.getElementById("poligon");
var axieInfinity = document.getElementById("axie-infinity");
var apecoin = document.getElementById("apecoin");
var the_sandbox = document.getElementById("the-sandbox");

var percentage_btc = document.getElementById("percentage_btc");
var percentage_eth = document.getElementById("percentage_eth");
var percentage_tether = document.getElementById("percentage_tether");
var percentage_usd = document.getElementById("percentage_usd");
var percentage_bnb = document.getElementById("percentage_binancecoin");
var percentage_binanceusd = document.getElementById("percentage_binance-usd");
var percentage_cardano = document.getElementById("percentage_cardano");
var percentage_ripple = document.getElementById("percentage_ripple");
var percentage_solana = document.getElementById("percentage_solana");
var percentage_polkadot = document.getElementById("percentage_polkadot");
var percentage_doge = document.getElementById("percentage_doge");
var percentage_shiba = document.getElementById("percentage_shiba-inu");
var percentage_avalanche = document.getElementById("percentage_avalanche-2");
var percentage_litecoin = document.getElementById("percentage_litecoin");
var percentage_poligon = document.getElementById("percentage_poligon");
var percentage_axieInfinity = document.getElementById("percentage_axie-infinity");
var percentage_apecoin = document.getElementById("percentage_apecoin");
var percentage_the_sandbox = document.getElementById("percentage_the-sandbox");

var settings = {
    "async": true,
    "scrossDomian": true,
    "url": "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Ctether%2Cusd-coin%2Cbinancecoin%2Cbinance-usd%2Ccardano%2Cripple%2Csolana%2Cpolkadot%2Cdogecoin%2Cshiba-inu%2Cavalanche-2%2Clitecoin%2Cmatic-network%2Caxie-infinity%2Capecoin%2Cthe-sandbox&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h",
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
            img.setAttribute("style", `width: ${width}px; height: ${height}px; display: block; margin: 5px; margin-right: 11px`);
            var block = document.getElementById(`${alt}`);
            block.appendChild(img);
            block.setAttribute("style", "margin-right: 15px")
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
            displayImage(response[indice].image, 36, 36, 'BitcoinImage');
        };
        if(response[indice].id == 'ethereum'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            display(eth, response[indice], percentage_eth, pricePercent, color(pricePercent))
            displayImage(response[indice].image, 36, 36, 'EthereumImage');
        };
        if(response[indice].id == 'tether'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            display(tether, response[indice], percentage_tether, pricePercent, color(pricePercent))
            displayImage(response[indice].image, 36, 36, 'TetherImage');
        };
        if(response[indice].id == 'usd-coin'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            display(usd, response[indice], percentage_usd, pricePercent, color(pricePercent))
            displayImage(response[indice].image, 36, 36, 'UsdImage');
        };
        if(response[indice].id == 'binancecoin'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            display(bnb, response[indice], percentage_bnb, pricePercent, color(pricePercent))
            displayImage(response[indice].image, 36, 36, 'BinancecoinImage');
        };
        if(response[indice].id == 'binance-usd'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            display(binanceusd, response[indice], percentage_binanceusd, pricePercent, color(pricePercent))
            displayImage(response[indice].image, 36, 36, 'BinanceusdImage');
        };
        if(response[indice].id == 'cardano'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            display(cardano, response[indice], percentage_cardano, pricePercent, color(pricePercent))
            displayImage(response[indice].image, 36, 36, 'CardanoImage');
        };
        if(response[indice].id == 'ripple'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            display(ripple, response[indice], percentage_ripple, pricePercent, color(pricePercent))
            displayImage(response[indice].image, 36, 36, 'RippleImage');
        };
        if(response[indice].id == 'solana'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            display(solana, response[indice], percentage_solana, pricePercent, color(pricePercent))
            displayImage(response[indice].image, 36, 36, 'SolanaImage');
        };
        if(response[indice].id == 'polkadot'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            display(polkadot, response[indice], percentage_polkadot, pricePercent, color(pricePercent))
            displayImage(response[indice].image, 36, 36, 'PolkadotImage');
        };
        if(response[indice].id == 'dogecoin'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            display(doge, response[indice], percentage_doge, pricePercent, color(pricePercent))
            displayImage(response[indice].image, 36, 36, 'DogeImage');
        };
        if(response[indice].id == 'shiba-inu'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            display(shiba, response[indice], percentage_shiba, pricePercent, color(pricePercent))
            displayImage(response[indice].image, 36, 36, 'Shiba-inuImage');
        };
        if(response[indice].id == 'avalanche-2'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            display(avalanche, response[indice], percentage_avalanche, pricePercent, color(pricePercent))
            displayImage(response[indice].image, 36, 36, 'Avalanche2Image');
        };
        if(response[indice].id == 'litecoin'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            display(litecoin, response[indice], percentage_litecoin, pricePercent, color(pricePercent))
            displayImage(response[indice].image, 36, 36, 'LitecoinImage');
        };
        if(response[indice].id == 'matic-network'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            display(poligon, response[indice], percentage_poligon, pricePercent, color(pricePercent))
            displayImage(response[indice].image, 36, 36, 'PoligonImage');
        };
        if(response[indice].id == 'axie-infinity'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            display(axieInfinity, response[indice], percentage_axieInfinity, pricePercent, color(pricePercent))
            displayImage(response[indice].image, 36, 36, 'Axie-infinityImage');
        };
        if(response[indice].id == 'apecoin'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            display(apecoin, response[indice], percentage_apecoin, pricePercent, color(pricePercent))
            displayImage(response[indice].image, 36, 36, 'ApecoinImage');
        };
        if(response[indice].id == 'the-sandbox'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            display(the_sandbox, response[indice], percentage_the_sandbox, pricePercent, color(pricePercent))
            displayImage(response[indice].image, 36, 36, 'The-sandboxImage');
        };
    }
})
