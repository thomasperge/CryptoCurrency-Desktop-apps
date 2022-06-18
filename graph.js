var bitcoin = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=9&interval=daily"
var ethereum = "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=9&interval=daily"
var tether = "https://api.coingecko.com/api/v3/coins/tether/market_chart?vs_currency=usd&days=9&interval=daily"
var usd_coin = 'https://api.coingecko.com/api/v3/coins/usd-coin/market_chart?vs_currency=usd&days=9&interval=daily'
var binancecoin = 'https://api.coingecko.com/api/v3/coins/binancecoin/market_chart?vs_currency=usd&days=9&interval=daily'
var binance_usd = 'https://api.coingecko.com/api/v3/coins/binance-usd/market_chart?vs_currency=usd&days=9&interval=daily'
var cardano = 'https://api.coingecko.com/api/v3/coins/cardano/market_chart?vs_currency=usd&days=9&interval=daily'
var ripple = 'https://api.coingecko.com/api/v3/coins/ripple/market_chart?vs_currency=usd&days=9&interval=daily'
var solana = 'https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=9&interval=daily'
var polkadot = 'https://api.coingecko.com/api/v3/coins/polkadot/market_chart?vs_currency=usd&days=9&interval=daily'
var dogecoin = "https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=9&interval=daily"
var shiba = 'https://api.coingecko.com/api/v3/coins/shiba-inu/market_chart?vs_currency=usd&days=9&interval=daily'
var avalanche = 'https://api.coingecko.com/api/v3/coins/avalanche-2/market_chart?vs_currency=usd&days=9&interval=daily'
var litecoin = 'https://api.coingecko.com/api/v3/coins/litecoin/market_chart?vs_currency=usd&days=9&interval=daily'
var poligon = 'https://api.coingecko.com/api/v3/coins/matic-network/market_chart?vs_currency=usd&days=9&interval=daily'
var axie_infinity = 'https://api.coingecko.com/api/v3/coins/axie-infinity/market_chart?vs_currency=usd&days=9&interval=daily'
var apecoin = 'https://api.coingecko.com/api/v3/coins/apecoin/market_chart?vs_currency=usd&days=9&interval=daily'
var the_sandbox = 'https://api.coingecko.com/api/v3/coins/the-sandbox/market_chart?vs_currency=usd&days=9&interval=daily'
// Setting:
//   - Site: https://www.coingecko.com/fr/api/documentation
//   - /coins/{id}/markets_charts
//      => id: bitcoin / ethereum / ...
//      => vs_currency: usd
//      => days: 9
//      => interval: daily


// === Function to get price coin on the marker place ===
function getDataPrices(ctx, urlMarketPrice, colorGraph){
    $.getJSON(urlMarketPrice, function(data) {
        console.log('URl ==>', urlMarketPrice)
        // ==== Get Data ====
        var dataPrices = []
        for(i in data.prices){
            dataPrices.push(data.prices[i][1])
        }
        console.log('Data ==> ', dataPrices)

        // ==== Config Graph ====
        var config = {
            type: 'line',
            data: {
                labels: ['d9','d8', 'd7', 'd6', 'd5', 'd4', 'd3', 'd2', 'd1', 'd0'],
                datasets: [{ 
                    data: dataPrices,
                    borderColor: colorGraph,
                    fill: false,
                    tension: 0.3,
                    borderWidth: 3.5,
                },
                ],
            },
            options: {
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        top: 3, // half border width
                        bottom: 3,
                        left: 5,
                        right: 5
                    },
                },
                elements: {
                    point: { radius: 0 },
                },
                plugins: {
                    legend: false // Hide legend
                },
                scales: {
                    y: {
                        display: false // Hide Y axis labels
                    },
                    x: {
                        display: false // Hide X axis labels
                    }
                },
            }
        };
        new Chart(ctx, config)
    });
};

const BTCgraph = document.getElementById('graphBtc').getContext('2d');
getDataPrices(BTCgraph, bitcoin, "#ff7300");

const ETHgraph = document.getElementById('graphEth').getContext('2d');
getDataPrices(ETHgraph, ethereum, "#98a3d2");

const THEgraph = document.getElementById('graphTether').getContext('2d');
getDataPrices(THEgraph, tether, "#0de4b1");

const USDgraph = document.getElementById('graphUsd').getContext('2d');
getDataPrices(USDgraph, usd_coin, "#2f7bce");

const BNBgraph = document.getElementById('graphBinancecoin').getContext('2d');
getDataPrices(BNBgraph, binancecoin, "#ffd200");

const BNBUSDgraph = document.getElementById('graphBinance-usd').getContext('2d');
getDataPrices(BNBUSDgraph, binance_usd, "#e6b311");

const CARDgraph = document.getElementById('graphCardano').getContext('2d');
getDataPrices(CARDgraph, cardano, "#2c75db");

const XRPgraph = document.getElementById('graphRipple').getContext('2d');
getDataPrices(XRPgraph, ripple, "#ffffff");

const SOLgraph = document.getElementById('graphSolana').getContext('2d');
getDataPrices(SOLgraph, solana, "#9945ff");

const POLgraph = document.getElementById('graphPolkadot').getContext('2d');
getDataPrices(POLgraph, polkadot, "#ff0087");

const DOGEgraph = document.getElementById('graphDoge').getContext('2d');
getDataPrices(DOGEgraph, dogecoin, "#decb88");

const SHIBAgraph = document.getElementById('graphShiba-inu').getContext('2d');
getDataPrices(SHIBAgraph, shiba, "#ff0000");

const AVAXgraph = document.getElementById('graphAvalanche2').getContext('2d');
getDataPrices(AVAXgraph, avalanche, "#d8494a");

const LITEgraph = document.getElementById('graphLitecoin').getContext('2d');
getDataPrices(LITEgraph, litecoin, "#838383");

const MATICgraph = document.getElementById('graphPoligon').getContext('2d');
getDataPrices(MATICgraph, poligon, "#995dff");

const AXSgraph = document.getElementById('graphAxie-infinity').getContext('2d');
getDataPrices(AXSgraph, axie_infinity, "#00ffff");

const APEgraph = document.getElementById('graphApecoin').getContext('2d');
getDataPrices(APEgraph, apecoin, "#0753f5");

const SANDgraph = document.getElementById('graphThe-sandbox').getContext('2d');
getDataPrices(SANDgraph, the_sandbox, "#00adf0");