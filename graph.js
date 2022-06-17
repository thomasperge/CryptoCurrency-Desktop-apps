var btcUrl = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=9&interval=daily"
var ethUrl = "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=9&interval=daily"
var thetUrl = "https://api.coingecko.com/api/v3/coins/tether/market_chart?vs_currency=usd&days=9&interval=daily"
var dogeUrl = "https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=9&interval=daily"
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
getDataPrices(BTCgraph, btcUrl, "#ff7300")

const ETHgraph = document.getElementById('graphEth').getContext('2d');
getDataPrices(ETHgraph, ethUrl, "#62688f")

const THEgraph = document.getElementById('graphTether').getContext('2d');
getDataPrices(THEgraph, thetUrl, "#03ac84")

const DOGEgraph = document.getElementById('graphDoge').getContext('2d');
getDataPrices(DOGEgraph, dogeUrl, "#decb88")