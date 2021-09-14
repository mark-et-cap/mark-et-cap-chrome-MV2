let acc = document.getElementsByClassName("accordion");
let newsBtn = document.querySelector(".news-button");
let clearIcon = document.querySelector(".search-clear");
let searchBar = document.querySelector(".searchTerm");
let tickerSearchBar = document.getElementById("tickerSearchBar");
let bList = document.getElementsByClassName("brokerageList");
let cList = document.getElementsByClassName("exchangeList");
let rList = document.getElementsByClassName("sResearchList");
let crList = document.getElementsByClassName("cResearchList");

let cryptoNewsList = [
    "BTC", 
    "ETH", 
    "BCH", 
    "LTC"
];

//Search Bar Clear Icon + Accordion Menus
searchBar.addEventListener("keyup", function(){
    searchBarFill();   
});

//also called from message sent from open_allSites.js
function searchBarFill() {
  if(searchBar.value && clearIcon.style.visibility != "visible"){
    clearIcon.style.visibility = "visible";
    newsBtn.style.visibility = "visible";
    for (let i = 0; i < acc.length; i++) {
        acc[i].style.visibility = "visible";
        acc[i].style.opacity = 1;
    }
  } else if(!searchBar.value) {
    clearIcon.style.visibility = "hidden";
    newsBtn.style.visibility = "hidden";
    for (let i = 0; i < acc.length; i++) {
        acc[i].style.visibility = "hidden";
        acc[i].style.opacity = 0;
    }
  }
};

clearIcon.addEventListener("click", () => {
 searchBar.value = "";
  clearIcon.style.visibility = "hidden";
  newsBtn.style.visibility = "hidden";
});

newsBtn.addEventListener("click", () => {
    let newsTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    if (cryptoNewsList.includes(newsTicker)) {
        let newsURL = "https://www.google.com/finance/quote/";
        chrome.tabs.create({url: newsURL + newsTicker + "-USD"});
    } else {
        chrome.runtime.sendMessage({content: newsTicker.toUpperCase(), message: "find_news_exchange"}, function(response) {
            let newsURL = "https://www.google.com/finance/quote/";
            let newsExchange = response.dbResponse; 
            chrome.tabs.create({url: newsURL + newsTicker + ":" + newsExchange});
        })
    }
});


//Accordion click handlers
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
  
      let panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }


//Brokerage List
let robinhood = document.getElementsByClassName('robinhood')[0];
let webull = document.getElementsByClassName('webull')[0];
let sofi = document.getElementsByClassName('sofi')[0];
let tdameritrade = document.getElementsByClassName('tdameritrade')[0];
let etrade = document.getElementsByClassName('etrade')[0];
let charlesschwab = document.getElementsByClassName('charlesschwab')[0];
let merrilledge = document.getElementsByClassName('merrilledge')[0];
let fidelity = document.getElementsByClassName('fidelity')[0];

robinhood.addEventListener("click",  function() {
    let robinhoodURL = 'https://robinhood.com/stocks/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: robinhoodURL + searchTicker});
});

webull.addEventListener("click",  function() {
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.runtime.sendMessage({content: searchTicker.toUpperCase(), message: "find_stock_exchange"}, function(response) {
        let dbURL = response.dbResponse;
        chrome.tabs.create({url: dbURL});
    })
});

sofi.addEventListener("click",  function() {
    let sofiURL = 'https://www.sofi.com/wealth/app/stock/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: sofiURL + searchTicker});
});

tdameritrade.addEventListener("click",  function() {
    let tdameritradeURL = 'https://invest.ameritrade.com/grid/p/site#r=jPage/https://research.ameritrade.com/grid/wwws/research/stocks/summary?c_name=invest_VENDOR&symbol='; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: tdameritradeURL + searchTicker});
});

etrade.addEventListener("click",  function() {
    let etradeURL = 'https://www.etrade.wallst.com/v1/stocks/snapshot/snapshot.asp?ChallengeUrl=https://idp.etrade.com/idp/SSO.saml2&reinitiate-handshake=0&prospectnavyear=2011&AuthnContext=prospect&env=PRD&symbol='; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: etradeURL + searchTicker});
});

charlesschwab.addEventListener("click",  function() {
    let charlesschwabURL = 'https://www.schwab.com/public/schwab/investing/investment_help/investment_research/stock_research/stocks.html?path=/research/public/stocks/summary/?symbol='; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: charlesschwabURL + searchTicker});
});

merrilledge.addEventListener("click",  function() {
    let merrilledgeURL = 'https://www.merrilledge.com/M/cse/TM/Pages/SearchResults.aspx?k='; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: merrilledgeURL + searchTicker});
});

fidelity.addEventListener("click",  function() {
    let fidelityURL = 'https://snapshot.fidelity.com/fidresearch/snapshot/landing.jhtml#/research?symbol='; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: fidelityURL + searchTicker});
});

//Exchange List
let binance = document.getElementsByClassName('binance')[0];
let coinbase = document.getElementsByClassName('coinbase')[0];
let gemini = document.getElementsByClassName('gemini')[0];
let robinhoodCrypto = document.getElementsByClassName('robinhoodCrypto')[0];
let cex = document.getElementsByClassName('cex')[0];
let bitfinex = document.getElementsByClassName('bitfinex')[0];
let bittrex = document.getElementsByClassName('bittrex')[0];
let kraken = document.getElementsByClassName('kraken')[0];
let cryptodotcom = document.getElementsByClassName('cryptodotcom')[0];
let etoro = document.getElementsByClassName('etoro')[0];
  
binance.addEventListener("click",  function() {
    let binanceURL = 'https://www.binance.com/en/trade/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: binanceURL + searchTicker + '_USDT'});
});

coinbase.addEventListener("click",  function() {
    let coinbaseURL = 'https://www.coinbase.com/price/';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.runtime.sendMessage({content: searchTicker.toUpperCase(), message: "find_crypto_translation"}, function(response) {
        let dbTranslation = response.dbResponse;
        if (dbTranslation !== "" || dbTranslation !== "undefined"){
            chrome.tabs.create({ url: coinbaseURL + dbTranslation });
        } else {
            chrome.tabs.create({ url: coinbaseURL + searchTicker });
        }
    })
});

gemini.addEventListener("click",  function() {
    let geminiURL = 'https://www.gemini.com/prices/';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.runtime.sendMessage({content: searchTicker.toUpperCase(), message: "find_crypto_translation"}, function(response) {
        let dbTranslation = response.dbResponse;
        if (dbTranslation !== "" || dbTranslation !== "undefined"){
            chrome.tabs.create({ url: geminiURL + dbTranslation });
        } else {
            chrome.tabs.create({ url: geminiURL + searchTicker });
        }
    })
});

robinhoodCrypto.addEventListener("click",  function() {
    let robinhoodCryptoURL = 'https://robinhood.com/crypto/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: robinhoodCryptoURL + searchTicker});
});

cex.addEventListener("click",  function() {
    let cexURL = 'https://cex.io/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: cexURL + searchTicker + '-usd'});
});

bitfinex.addEventListener("click",  function() {
    let bitfinexURL = 'https://www.bitfinex.com/t/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: bitfinexURL + searchTicker + ':USD'});
});

bittrex.addEventListener("click",  function() {
    let bittrexURL = 'https://bittrex.com/Market/Index?MarketName=USD-'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: bittrexURL + searchTicker});
});

kraken.addEventListener("click",  function() {
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.runtime.sendMessage({content: searchTicker.toUpperCase(), message: "find_crypto_translation"}, function(response) {
        if(searchTicker == "BTC") {
            let dbTranslation = response.dbResponse;
            let cryptoSymbol = "XBT";
            let krakenURL = 'https://www.kraken.com/en-us/prices/' + cryptoSymbol.toLowerCase() + '-' + dbTranslation;
            chrome.tabs.create({url: krakenURL});
            return false;
        } else {
            let dbTranslation = response.dbResponse;
            let krakenURL = 'https://www.kraken.com/en-us/prices/' + searchTicker.toLowerCase() + '-' + dbTranslation;
            chrome.tabs.create({ url: krakenURL });
            return false;
        }
    })
});
     
cryptodotcom.addEventListener("click",  function() {
    let cryptodotcomURL = 'https://crypto.com/exchange/trade/spot/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: cryptodotcomURL + searchTicker + '_USDT'});
});

etoro.addEventListener("click",  function() {
    let etoroURL = 'https://www.etoro.com/markets/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: etoroURL + searchTicker});
});

//Stock Research
let twitter = document.getElementsByClassName('twitter')[0];
let marketwatch = document.getElementsByClassName('marketwatch')[0];
let barchart = document.getElementsByClassName('barchart')[0];
let motleyfool = document.getElementsByClassName('motleyfool')[0];
let yahoofinance = document.getElementsByClassName('yahoofinance')[0];
let zacksdotcom = document.getElementsByClassName('zacksdotcom')[0];
let finviz = document.getElementsByClassName('finviz')[0];
let reddit = document.getElementsByClassName('reddit')[0];
let benzinga = document.getElementsByClassName('benzinga')[0];
let swaggystocks = document.getElementsByClassName('swaggystocks')[0];
let stocktwits = document.getElementsByClassName('stocktwits')[0];
let tradingview = document.getElementsByClassName('tradingview')[0];
let unusualwhales = document.getElementsByClassName('unusualwhales')[0];    
   
twitter.addEventListener("click",  function() {
    let twitterURL = 'https://twitter.com/search?q=%24'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: twitterURL + searchTicker + '&src=cashtag_click'});
});

marketwatch.addEventListener("click",  function() {
    let marketwatchURL = 'https://www.marketwatch.com/investing/stock/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: marketwatchURL + searchTicker});
});

barchart.addEventListener("click",  function() {
    let barchartURL = 'https://www.barchart.com/stocks/quotes/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: barchartURL + searchTicker});
});

motleyfool.addEventListener("click",  function() {
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.runtime.sendMessage({content: searchTicker.toUpperCase(), message: "find_research_exchange"}, function(response) {
        let dbTranslation = response.dbResponse;
        chrome.tabs.create({ url: dbTranslation});
    })
});

yahoofinance.addEventListener("click",  function() {
    let yahoofinanceURL = 'https://finance.yahoo.com/quote/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: yahoofinanceURL + searchTicker});
});

zacksdotcom.addEventListener("click",  function() {
    let zacksdotcomURL = 'https://www.zacks.com/stock/quote/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: zacksdotcomURL + searchTicker});
});

finviz.addEventListener("click",  function() {
    let finvizURL = 'https://finviz.com/quote.ashx?t='; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: finvizURL + searchTicker});
});

reddit.addEventListener("click",  function() {
    let redditURL = 'https://www.reddit.com/r/MillennialBets/wiki/index/stocks/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: redditURL + searchTicker});
});

benzinga.addEventListener("click",  function() {
    let benzingaURL = 'https://www.benzinga.com/quote/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: benzingaURL + searchTicker});
});

swaggystocks.addEventListener("click",  function() {
    let swaggystocksURL = 'https://swaggystocks.com/dashboard/stocks/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: swaggystocksURL + searchTicker});
});

stocktwits.addEventListener("click",  function() {
    let stocktwitsURL = 'https://stocktwits.com/symbol/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: stocktwitsURL + searchTicker});
});

tradingview.addEventListener("click",  function() {
    let tradingviewURL = 'https://www.tradingview.com/symbols/';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: tradingviewURL + searchTicker});
});

unusualwhales.addEventListener("click", function() {
    let unusualwhalesURL = 'https://unusualwhales.com/company/';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: unusualwhalesURL + searchTicker + '/alerts'}) 
}); 

//Crypto Research
let cTwitter = document.getElementsByClassName('cTwitter')[0];
let coindesk = document.getElementsByClassName('coindesk')[0];
let cryptonews = document.getElementsByClassName('cryptonews')[0];
let coingecko = document.getElementsByClassName('coingecko')[0];
let cyahoofinance = document.getElementsByClassName('cyahoofinance')[0];
let coinmarketcap = document.getElementsByClassName('coinmarketcap')[0];
let creddit = document.getElementsByClassName('creddit')[0];
let blockfolio = document.getElementsByClassName('blockfolio')[0];
let defipulse = document.getElementsByClassName('defipulse')[0];
let ctradingview = document.getElementsByClassName('ctradingview')[0];

cTwitter.addEventListener("click",  function() {
    let cTwitterURL = 'https://twitter.com/search?q=%24';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: cTwitterURL + searchTicker + '&src=cashtag_click'});
});

cryptonews.addEventListener("click",  function() {
    let cryptonewsURL = 'https://cryptonews.com/coins/';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.runtime.sendMessage({content: searchTicker.toUpperCase(), message: "find_research_translation"}, function(response) {
        let dbTranslation = response.dbResponse;
        let thisCResearchURL = cryptonewsURL + dbTranslation;
        chrome.tabs.create({ url: thisCResearchURL});
    })
});

coindesk.addEventListener("click",  function() {
    let coindeskURL = 'https://www.coindesk.com/price/';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.runtime.sendMessage({content: searchTicker.toUpperCase(), message: "find_research_translation"}, function(response) {
        let dbTranslation = response.dbResponse;
        let thisCResearchURL = coindeskURL + dbTranslation;
        chrome.tabs.create({ url: thisCResearchURL});
    })
});

coingecko.addEventListener("click",  function() {
    let coingeckoURL = 'https://www.coingecko.com/en/coins/';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.runtime.sendMessage({content: searchTicker.toUpperCase(), message: "find_research_translation"}, function(response) {
        let dbTranslation = response.dbResponse;
        let thisCResearchURL = coingeckoURL + dbTranslation;
        chrome.tabs.create({ url: thisCResearchURL});
    })
});

cyahoofinance.addEventListener("click",  function() {
    let cyahoofinanceURL = 'https://finance.yahoo.com/quote/';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: cyahoofinanceURL + searchTicker + '-USD/'});
});

coinmarketcap.addEventListener("click",  function() {
    let coinmarketcapURL = 'https://coinmarketcap.com/currencies/';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.runtime.sendMessage({content: searchTicker.toUpperCase(), message: "find_research_translation"}, function(response) {
        let dbTranslation = response.dbResponse;
        let thisCResearchURL = coinmarketcapURL + dbTranslation;
        chrome.tabs.create({ url: thisCResearchURL});
    })
});

blockfolio.addEventListener("click",  function() {
    let blockfolioURL = 'https://blockfolio.com/coin/';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: blockfolioURL + searchTicker});
});

creddit.addEventListener("click",  function() {
    let credditURL = 'https://www.reddit.com/search/?q=%24';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: credditURL + searchTicker});
});

defipulse.addEventListener("click",  function() {
    let defipulseURL = 'https://defipulse.com/';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.runtime.sendMessage({content: searchTicker.toUpperCase(), message: "find_research_translation"}, function(response) {
        let dbTranslation = response.dbResponse;
        let thisCResearchURL = defipulseURL + dbTranslation;
        chrome.tabs.create({ url: thisCResearchURL});
    })
});

ctradingview.addEventListener("click",  function() {
    let ctradingviewURL = 'https://www.tradingview.com/symbols/CRYPTOCAP-';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: ctradingviewURL + searchTicker});
});


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.message == "open_search_page") {
            let contentTicker = request.content;
            tickerSearchBar.value = contentTicker;
            searchBarFill();
            showSearch();
        }
    }
)
