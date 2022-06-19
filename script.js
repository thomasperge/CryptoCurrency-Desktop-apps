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

var percentage_btc_7d = document.getElementById("percentage_btc_7d");
var percentage_eth_7d = document.getElementById("percentage_eth_7d");
var percentage_tether_7d = document.getElementById("percentage_tether_7d");
var percentage_usd_7d = document.getElementById("percentage_usd_7d");
var percentage_bnb_7d = document.getElementById("percentage_binancecoin_7d");
var percentage_binanceusd_7d = document.getElementById("percentage_binance-usd_7d");
var percentage_cardano_7d = document.getElementById("percentage_cardano_7d");
var percentage_ripple_7d = document.getElementById("percentage_ripple_7d");
var percentage_solana_7d = document.getElementById("percentage_solana_7d");
var percentage_polkadot_7d = document.getElementById("percentage_polkadot_7d");
var percentage_doge_7d = document.getElementById("percentage_doge_7d");
var percentage_shiba_7d = document.getElementById("percentage_shiba-inu_7d");
var percentage_avalanche_7d = document.getElementById("percentage_avalanche-2_7d");
var percentage_litecoin_7d = document.getElementById("percentage_litecoin_7d");
var percentage_poligon_7d = document.getElementById("percentage_poligon_7d");
var percentage_axieInfinity_7d = document.getElementById("percentage_axie-infinity_7d");
var percentage_apecoin_7d = document.getElementById("percentage_apecoin_7d");
var percentage_the_sandbox_7d = document.getElementById("percentage_the-sandbox_7d");

var settings = {
    "async": true,
    "scrossDomian": true,
    "url": "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Ctether%2Cusd-coin%2Cbinancecoin%2Cbinance-usd%2Ccardano%2Cripple%2Csolana%2Cpolkadot%2Cdogecoin%2Cshiba-inu%2Cavalanche-2%2Clitecoin%2Cmatic-network%2Caxie-infinity%2Capecoin%2Cthe-sandbox&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C7d",
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function (response){
    for(indice in response){
        // console.log(response[indice])
        
        // Function display
        function display(nameBlock, indice, percentageBlock, percentageBlock7d, changePriceDay, changePrice7d, colorPercent24h, colorPercent7d){
            nameBlock.innerHTML = indice.current_price
            percentageBlock.innerHTML = Math.round(changePriceDay * 100) / 100 + "%"
            percentageBlock7d.innerHTML = Math.round(changePrice7d * 100) / 100 + "%"
            percentageBlock.setAttribute("style", `color: ${colorPercent24h}`)
            percentageBlock7d.setAttribute("style", `color: ${colorPercent7d}`)
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
            let pricePercent_7d = (Math.round(response[indice].price_change_percentage_7d_in_currency * 100) / 100)
            display(btc, response[indice], percentage_btc, percentage_btc_7d, pricePercent, pricePercent_7d, color(pricePercent), color(pricePercent_7d))
            displayImage(response[indice].image, 36, 36, 'BitcoinImage');
        };
        if(response[indice].id == 'ethereum'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            let pricePercent_7d = (Math.round(response[indice].price_change_percentage_7d_in_currency * 100) / 100)
            display(eth, response[indice], percentage_eth, percentage_eth_7d, pricePercent, pricePercent_7d, color(pricePercent), color(pricePercent_7d))
            displayImage(response[indice].image, 36, 36, 'EthereumImage');
        };
        if(response[indice].id == 'tether'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            let pricePercent_7d = (Math.round(response[indice].price_change_percentage_7d_in_currency * 100) / 100)
            display(tether, response[indice], percentage_tether, percentage_tether_7d, pricePercent, pricePercent_7d, color(pricePercent), color(pricePercent_7d))
            displayImage(response[indice].image, 36, 36, 'TetherImage');
        };
        if(response[indice].id == 'usd-coin'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            let pricePercent_7d = (Math.round(response[indice].price_change_percentage_7d_in_currency * 100) / 100)
            display(usd, response[indice], percentage_usd, percentage_usd_7d, pricePercent, pricePercent_7d, color(pricePercent), color(pricePercent_7d))
            displayImage(response[indice].image, 36, 36, 'UsdImage');
        };
        if(response[indice].id == 'binancecoin'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            let pricePercent_7d = (Math.round(response[indice].price_change_percentage_7d_in_currency * 100) / 100)
            display(bnb, response[indice], percentage_bnb, percentage_bnb_7d, pricePercent, pricePercent_7d, color(pricePercent), color(pricePercent_7d))
            displayImage(response[indice].image, 36, 36, 'BinancecoinImage');
        };
        if(response[indice].id == 'binance-usd'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            let pricePercent_7d = (Math.round(response[indice].price_change_percentage_7d_in_currency * 100) / 100)
            display(binanceusd, response[indice], percentage_binanceusd, percentage_binanceusd_7d, pricePercent, pricePercent_7d, color(pricePercent), color(pricePercent_7d))
            displayImage(response[indice].image, 36, 36, 'BinanceusdImage');
        };
        if(response[indice].id == 'cardano'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            let pricePercent_7d = (Math.round(response[indice].price_change_percentage_7d_in_currency * 100) / 100)
            display(cardano, response[indice], percentage_cardano, percentage_cardano_7d, pricePercent, pricePercent_7d, color(pricePercent), color(pricePercent_7d))
            displayImage(response[indice].image, 36, 36, 'CardanoImage');
        };
        if(response[indice].id == 'ripple'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            let pricePercent_7d = (Math.round(response[indice].price_change_percentage_7d_in_currency * 100) / 100)
            display(ripple, response[indice], percentage_ripple, percentage_ripple_7d, pricePercent, pricePercent_7d, color(pricePercent), color(pricePercent_7d))
            displayImage(response[indice].image, 36, 36, 'RippleImage');
        };
        if(response[indice].id == 'solana'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            let pricePercent_7d = (Math.round(response[indice].price_change_percentage_7d_in_currency * 100) / 100)
            display(solana, response[indice], percentage_solana, percentage_solana_7d, pricePercent, pricePercent_7d, color(pricePercent), color(pricePercent_7d))
            displayImage(response[indice].image, 36, 36, 'SolanaImage');
        };
        if(response[indice].id == 'polkadot'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            let pricePercent_7d = (Math.round(response[indice].price_change_percentage_7d_in_currency * 100) / 100)
            display(polkadot, response[indice], percentage_polkadot, percentage_polkadot_7d, pricePercent, pricePercent_7d, color(pricePercent), color(pricePercent_7d))
            displayImage(response[indice].image, 36, 36, 'PolkadotImage');
        };
        if(response[indice].id == 'dogecoin'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            let pricePercent_7d = (Math.round(response[indice].price_change_percentage_7d_in_currency * 100) / 100)
            display(doge, response[indice], percentage_doge, percentage_doge_7d, pricePercent, pricePercent_7d, color(pricePercent), color(pricePercent_7d))
            displayImage(response[indice].image, 36, 36, 'DogeImage');
        };
        if(response[indice].id == 'shiba-inu'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            let pricePercent_7d = (Math.round(response[indice].price_change_percentage_7d_in_currency * 100) / 100)
            display(shiba, response[indice], percentage_shiba, percentage_shiba_7d, pricePercent, pricePercent_7d, color(pricePercent), color(pricePercent_7d))
            displayImage(response[indice].image, 36, 36, 'Shiba-inuImage');
        };
        if(response[indice].id == 'avalanche-2'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            let pricePercent_7d = (Math.round(response[indice].price_change_percentage_7d_in_currency * 100) / 100)
            display(avalanche, response[indice], percentage_avalanche, percentage_avalanche_7d, pricePercent, pricePercent_7d, color(pricePercent), color(pricePercent_7d))
            displayImage(response[indice].image, 36, 36, 'Avalanche2Image');
        };
        if(response[indice].id == 'litecoin'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            let pricePercent_7d = (Math.round(response[indice].price_change_percentage_7d_in_currency * 100) / 100)
            display(litecoin, response[indice], percentage_litecoin, percentage_litecoin_7d, pricePercent, pricePercent_7d, color(pricePercent), color(pricePercent_7d))
            displayImage(response[indice].image, 36, 36, 'LitecoinImage');
        };
        if(response[indice].id == 'matic-network'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            let pricePercent_7d = (Math.round(response[indice].price_change_percentage_7d_in_currency * 100) / 100)
            display(poligon, response[indice], percentage_poligon, percentage_poligon_7d, pricePercent, pricePercent_7d, color(pricePercent), color(pricePercent_7d))
            displayImage(response[indice].image, 36, 36, 'PoligonImage');
        };
        if(response[indice].id == 'axie-infinity'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            let pricePercent_7d = (Math.round(response[indice].price_change_percentage_7d_in_currency * 100) / 100)
            display(axieInfinity, response[indice], percentage_axieInfinity, percentage_axieInfinity_7d, pricePercent, pricePercent_7d, color(pricePercent), color(pricePercent_7d))
            displayImage(response[indice].image, 36, 36, 'Axie-infinityImage');
        };
        if(response[indice].id == 'apecoin'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            let pricePercent_7d = (Math.round(response[indice].price_change_percentage_7d_in_currency * 100) / 100)
            display(apecoin, response[indice], percentage_apecoin, percentage_apecoin_7d, pricePercent, pricePercent_7d, color(pricePercent), color(pricePercent_7d))
            displayImage(response[indice].image, 36, 36, 'ApecoinImage');
        };
        if(response[indice].id == 'the-sandbox'){
            let pricePercent = (Math.round(response[indice].price_change_percentage_24h_in_currency * 100) / 100)
            let pricePercent_7d = (Math.round(response[indice].price_change_percentage_7d_in_currency * 100) / 100)
            display(the_sandbox, response[indice], percentage_the_sandbox, percentage_the_sandbox_7d, pricePercent, pricePercent_7d, color(pricePercent), color(pricePercent_7d))
            displayImage(response[indice].image, 36, 36, 'The-sandboxImage');
        };
    }
})
