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
let allyinvest = document.getElementsByClassName('allyinvest')[0];
let charlesschwab = document.getElementsByClassName('charlesschwab')[0];
let etrade = document.getElementsByClassName('etrade')[0];
let fidelity = document.getElementsByClassName('fidelity')[0];
let firstrade = document.getElementsByClassName('firstrade')[0];
let merrilledge = document.getElementsByClassName('merrilledge')[0];
let moomoo = document.getElementsByClassName('moomoo')[0];
let passfolio = document.getElementsByClassName('passfolio')[0];
let public = document.getElementsByClassName('public')[0];
let robinhood = document.getElementsByClassName('robinhood')[0];
let sofi = document.getElementsByClassName('sofi')[0];
let tdameritrade = document.getElementsByClassName('tdameritrade')[0];
let tradestation = document.getElementsByClassName('tradestation')[0];
let vanguard = document.getElementsByClassName('vanguard')[0];
let webull = document.getElementsByClassName('webull')[0];

allyinvest.addEventListener("click",  function() {
    let allyInvestURL = 'https://live.invest.ally.com/research/stocks/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: allyInvestURL + searchTicker + '/overview'});
});

charlesschwab.addEventListener("click",  function() {
    let charlesschwabURL = 'https://www.schwab.com/research/stocks/quotes/summary/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: charlesschwabURL + searchTicker});
});

etrade.addEventListener("click",  function() {
    let etradeURL = 'https://www.etrade.wallst.com/v1/stocks/snapshot/snapshot.asp?ChallengeUrl=https://idp.etrade.com/idp/SSO.saml2&reinitiate-handshake=0&prospectnavyear=2011&AuthnContext=prospect&env=PRD&symbol='; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: etradeURL + searchTicker});
});

fidelity.addEventListener("click",  function() {
    let fidelityURL = 'https://snapshot.fidelity.com/fidresearch/snapshot/landing.jhtml#/research?symbol='; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: fidelityURL + searchTicker});
});

firstrade.addEventListener("click",  function() {
    let firstradeURL = 'https://www.firstrade.com/content/en-us/researchtools/research?ticker='; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: firstradeURL + searchTicker});
});

merrilledge.addEventListener("click",  function() {
    let merrilledgeURL = 'https://www.merrilledge.com/M/cse/TM/Pages/SearchResults.aspx?k='; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: merrilledgeURL + searchTicker});
});

moomoo.addEventListener("click",  function() {
    let moomooURL = 'https://www.moomoo.com/stock/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: moomooURL + searchTicker + '-US'});
});

passfolio.addEventListener("click",  function() {
    let passfolioURL = 'https://web.passfolio.com/app/discover/stock/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: passfolioURL + searchTicker});
});

public.addEventListener("click",  function() {
    let publicURL = 'https://public.com/stocks/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: publicURL + searchTicker});
});

robinhood.addEventListener("click",  function() {
    let robinhoodURL = 'https://robinhood.com/stocks/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: robinhoodURL + searchTicker});
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

tradestation.addEventListener("click",  function() {
    let tradestationURL = 'https://www.tradestation.com/research/stocks/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: tradestationURL + searchTicker});
});

vanguard.addEventListener("click",  function() {
    let vanguardURL = 'https://personal.vanguard.com/us/secfunds/stocks/snapshot?Ticker='; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: vanguardURL + searchTicker});
});

webull.addEventListener("click",  function() {
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.runtime.sendMessage({content: searchTicker.toUpperCase(), message: "find_stock_exchange"}, function(response) {
        let dbURL = response.dbResponse;
        chrome.tabs.create({url: dbURL});
    })
});

//Exchange List
let binance = document.getElementsByClassName('binance')[0];
let bitfinex = document.getElementsByClassName('bitfinex')[0];
let bittrex = document.getElementsByClassName('bittrex')[0];
let blockfi = document.getElementsByClassName('blockfi')[0];
let cex = document.getElementsByClassName('cex')[0];
let coinbase = document.getElementsByClassName('coinbase')[0];
let coinbasePro = document.getElementsByClassName('coinbasepro')[0];
let cryptodotcom = document.getElementsByClassName('cryptocom')[0];
let etoro = document.getElementsByClassName('etoro')[0];
let ftx = document.getElementsByClassName('ftx')[0];
let gemini = document.getElementsByClassName('gemini')[0];
let kraken = document.getElementsByClassName('kraken')[0];
let okcoin = document.getElementsByClassName('okcoin')[0];
let passfoliocrypto = document.getElementsByClassName('passfoliocrypto')[0];
let publiccrypto = document.getElementsByClassName('publiccrypto')[0];
let robinhoodCrypto = document.getElementsByClassName('robinhoodcrypto')[0];
let soficrypto = document.getElementsByClassName('soficrypto')[0];
let uphold = document.getElementsByClassName('uphold')[0];
let webullcrypto = document.getElementsByClassName('webullcrypto')[0];


binance.addEventListener("click",  function() {
    let binanceURL = 'https://www.binance.com/en/trade/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: binanceURL + searchTicker + '_USDT'});
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

blockfi.addEventListener("click",  function() {
    let blockfiURL = 'https://app.blockfi.com/accounts/wallet/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: blockfiURL + searchTicker.toLowerCase()});
});

cex.addEventListener("click",  function() {
    let cexURL = 'https://cex.io/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: cexURL + searchTicker + '-usd'});
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

coinbasePro.addEventListener("click",  function() {
    let coinbaseProURL = 'https://pro.coinbase.com/trade/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: coinbaseProURL + searchTicker.toUpperCase() + '-USD'});
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

ftx.addEventListener("click",  function() {
    let ftxURL = 'https://ftx.us/trade/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: ftxURL + searchTicker + '/USD'});
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

kraken.addEventListener("click",  function() {
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.runtime.sendMessage({content: searchTicker.toUpperCase(), message: "find_crypto_translation"}, function(response) {
        if(searchTicker == "BTC") {
            let dbTranslation = response.dbResponse;
            let cryptoSymbol = "XBT";
            let krakenURL = 'https://www.kraken.com/prices/' + cryptoSymbol.toLowerCase() + '-' + dbTranslation;
            chrome.tabs.create({url: krakenURL});
            return false;
        } else {
            let dbTranslation = response.dbResponse;
            let krakenURL = 'https://www.kraken.com/prices/' + searchTicker.toLowerCase() + '-' + dbTranslation;
            chrome.tabs.create({ url: krakenURL });
            return false;
        }
    })
});

okcoin.addEventListener("click",  function() {
    let okcoinURL = 'https://www.okcoin.com/prices/';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.runtime.sendMessage({content: searchTicker.toUpperCase(), message: "find_crypto_translation"}, function(response) {
        let dbTranslation = response.dbResponse;
        if (dbTranslation !== "" || dbTranslation !== "undefined"){
            chrome.tabs.create({ url: okcoinURL + dbTranslation + '-' + searchTicker + '-price-chart'});
        } else {
            chrome.tabs.create({ url: okcoinURL + searchTicker + '-price-chart'});
        }
    })
});

passfoliocrypto.addEventListener("click",  function() {
    let passfoliocryptoURL = 'https://web.passfolio.com/app/discover/crypto/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: passfoliocryptoURL + searchTicker.toUpperCase()});
});

publiccrypto.addEventListener("click",  function() {
    let publiccryptoURL = 'https://public.com/crypto/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: publiccryptoURL + searchTicker.toUpperCase()});
});

robinhoodCrypto.addEventListener("click",  function() {
    let robinhoodCryptoURL = 'https://robinhood.com/crypto/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: robinhoodCryptoURL + searchTicker});
});

soficrypto.addEventListener("click",  function() {
    let soficryptoURL = 'https://www.sofi.com/wealth/app/crypto/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: soficryptoURL + searchTicker});
});

uphold.addEventListener("click",  function() {
    let upholdURL = 'https://uphold.com/en-us/assets/crypto/buy-'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: upholdURL + searchTicker.toLowerCase()});
});

webullcrypto.addEventListener("click",  function() {
    let webullcryptoURL = 'https://www.webull.com/cryptocurrency/';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.runtime.sendMessage({content: searchTicker.toUpperCase(), message: "find_crypto_translation"}, function(response) {
        let dbTranslation = response.dbResponse;
        if (dbTranslation !== "" || dbTranslation !== "undefined"){
            chrome.tabs.create({ url: webullcryptoURL + dbTranslation});
        } else {
            chrome.tabs.create({ url: webullcryptoURL + searchTicker});
        }
    })
});

//Stock Research
let barchart = document.getElementsByClassName('barchart')[0];
let benzinga = document.getElementsByClassName('benzinga')[0];
let cmlviz = document.getElementsByClassName('cmlviz')[0];
let edgar = document.getElementsByClassName('edgar')[0];
let finviz = document.getElementsByClassName('finviz')[0];
let marketwatch = document.getElementsByClassName('marketwatch')[0];
let nasdaq = document.getElementsByClassName('nasdaq')[0];
let nyse = document.getElementsByClassName('nyse')[0];
let otc = document.getElementsByClassName('otc')[0];
let reddit = document.getElementsByClassName('sreddit')[0];
let stocktwits = document.getElementsByClassName('stocktwits')[0];
let swaggystocks = document.getElementsByClassName('swaggystocks')[0];
let motleyfool = document.getElementsByClassName('motleyfool')[0];
let tradingview = document.getElementsByClassName('tradingview')[0];
let twitter = document.getElementsByClassName('stwitter')[0];
let unusualwhales = document.getElementsByClassName('unusualwhales')[0];  
let yahoofinance = document.getElementsByClassName('yahoofinance')[0];
let zacksdotcom = document.getElementsByClassName('zackscom')[0];

barchart.addEventListener("click",  function() {
    let barchartURL = 'https://www.barchart.com/stocks/quotes/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: barchartURL + searchTicker});
});

benzinga.addEventListener("click",  function() {
    let benzingaURL = 'https://www.benzinga.com/quote/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: benzingaURL + searchTicker});
});

cmlviz.addEventListener("click",  function() {
    let cmlvizURL = 'https://www.cmlviz.com/stocks/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: cmlvizURL + searchTicker});
});

edgar.addEventListener("click",  function() {
    let edgarURL = 'https://www.sec.gov/edgar/search/#/entityName='; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: edgarURL + searchTicker});
});

finviz.addEventListener("click",  function() {
    let finvizURL = 'https://finviz.com/quote.ashx?t='; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: finvizURL + searchTicker});
});

marketwatch.addEventListener("click",  function() {
    let marketwatchURL = 'https://www.marketwatch.com/investing/stock/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: marketwatchURL + searchTicker});
});

nasdaq.addEventListener("click",  function() {
    let nasdaqURL = 'https://www.nasdaq.com/market-activity/stocks/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: nasdaqURL + searchTicker});
});

nyse.addEventListener("click",  function() {
    let nyseURL = 'https://www.nyse.com/quote/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: nyseURL + searchTicker.toUpperCase()});
});

otc.addEventListener("click",  function() {
    let otcURL = 'https://www.otcmarkets.com/stock/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: otcURL + searchTicker + '/overview'});
});

reddit.addEventListener("click",  function() {
    let redditURL = 'https://www.reddit.com/r/MillennialBets/wiki/index/stocks/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: redditURL + searchTicker});
});

stocktwits.addEventListener("click",  function() {
    let stocktwitsURL = 'https://stocktwits.com/symbol/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: stocktwitsURL + searchTicker});
});

swaggystocks.addEventListener("click",  function() {
    let swaggystocksURL = 'https://swaggystocks.com/dashboard/stocks/'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: swaggystocksURL + searchTicker});
});

motleyfool.addEventListener("click",  function() {
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.runtime.sendMessage({content: searchTicker.toUpperCase(), message: "find_research_exchange"}, function(response) {
        let dbTranslation = response.dbResponse;
        chrome.tabs.create({ url: dbTranslation});
    })
});
  
tradingview.addEventListener("click",  function() {
    let tradingviewURL = 'https://www.tradingview.com/symbols/';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: tradingviewURL + searchTicker});
}); 

twitter.addEventListener("click",  function() {
    let twitterURL = 'https://twitter.com/search?q=%24'; 
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: twitterURL + searchTicker + '&src=cashtag_click'});
});

unusualwhales.addEventListener("click", function() {
    let unusualwhalesURL = 'https://unusualwhales.com/company/';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: unusualwhalesURL + searchTicker + '/alerts'}) 
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


//Crypto Research
let coindesk = document.getElementsByClassName('coindesk')[0];
let coingecko = document.getElementsByClassName('coingecko')[0];
let coinmarketcap = document.getElementsByClassName('coinmarketcap')[0];
let cryptonews = document.getElementsByClassName('cryptonews')[0];
let cryptopanic = document.getElementsByClassName('cryptopanic')[0];
let defipulse = document.getElementsByClassName('defipulse')[0];
let glassnode = document.getElementsByClassName('glassnode')[0];
let lunarcrush = document.getElementsByClassName('lunarcrush')[0];
let messari = document.getElementsByClassName('messari')[0];
let creddit = document.getElementsByClassName('creddit')[0];
let ctradingview = document.getElementsByClassName('ctradingview')[0];
let cTwitter = document.getElementsByClassName('ctwitter')[0];
let cyahoofinance = document.getElementsByClassName('cyahoofinance')[0];

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

coinmarketcap.addEventListener("click",  function() {
    let coinmarketcapURL = 'https://coinmarketcap.com/currencies/';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.runtime.sendMessage({content: searchTicker.toUpperCase(), message: "find_research_translation"}, function(response) {
        let dbTranslation = response.dbResponse;
        let thisCResearchURL = coinmarketcapURL + dbTranslation;
        chrome.tabs.create({ url: thisCResearchURL});
    })
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

cryptopanic.addEventListener("click",  function() {
    let cryptopanicURL = 'https://cryptopanic.com/news/';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: cryptopanicURL + searchTicker});
});

defipulse.addEventListener("click",  function() {
    let defipulseURL = 'https://defipulse.com/projects/';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.runtime.sendMessage({content: searchTicker.toUpperCase(), message: "find_research_translation"}, function(response) {
        let dbTranslation = response.dbResponse;
        let thisCResearchURL = defipulseURL + dbTranslation;
        chrome.tabs.create({ url: thisCResearchURL});
    })
});
 
glassnode.addEventListener("click",  function() {
    let glassnodeURL = 'https://studio.glassnode.com/metrics?a=';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: glassnodeURL + searchTicker});
});

lunarcrush.addEventListener("click",  function() {
    let lunarcrushURL = 'https://lunarcrush.com/coins/';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.runtime.sendMessage({content: searchTicker.toUpperCase(), message: "find_research_translation"}, function(response) {
        let dbTranslation = response.dbResponse;
        let thisCResearchURL = lunarcrushURL + searchTicker +'/' + dbTranslation;
        chrome.tabs.create({ url: thisCResearchURL});
    })
});

messari.addEventListener("click",  function() {
    let messariURL = 'https://messari.io/asset/';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.runtime.sendMessage({content: searchTicker.toUpperCase(), message: "find_research_translation"}, function(response) {
        let dbTranslation = response.dbResponse;
        let thisCResearchURL = messariURL + dbTranslation;
        chrome.tabs.create({ url: thisCResearchURL});
    })
});

creddit.addEventListener("click",  function() {
    let credditURL = 'https://www.reddit.com/search/?q=%24';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: credditURL + searchTicker});
});

ctradingview.addEventListener("click",  function() {
    let ctradingviewURL = 'https://www.tradingview.com/symbols/CRYPTOCAP-';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: ctradingviewURL + searchTicker});
});

cTwitter.addEventListener("click",  function() {
    let cTwitterURL = 'https://twitter.com/search?q=%24';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: cTwitterURL + searchTicker + '&src=cashtag_click'});
});

cyahoofinance.addEventListener("click",  function() {
    let cyahoofinanceURL = 'https://finance.yahoo.com/quote/';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: cyahoofinanceURL + searchTicker + '-USD/'});
});

//Stock Options
let  optbarchart = document.getElementsByClassName('optbarchart')[0];
let  optmarketchameleon = document.getElementsByClassName('optmarketchameleon')[0];
let  optoptionvisualizer = document.getElementsByClassName('optoptionvisualizer')[0];
let  optoptionistics = document.getElementsByClassName('optoptionistics')[0];
let  optTDA = document.getElementsByClassName('optTDA')[0];
let  optunusualwhales = document.getElementsByClassName('optunusualwhales')[0];
let  optyahoofinance = document.getElementsByClassName('optyahoofinance')[0];

optbarchart.addEventListener("click",  function() {
    let optbarchartURL = 'https://www.barchart.com/stocks/quotes/';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: optbarchartURL + searchTicker + '/options'});
});

optmarketchameleon.addEventListener("click",  function() {
    let optmarketchameleonURL = 'https://marketchameleon.com/Overview/';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: optmarketchameleonURL + searchTicker + '/OptionChain/'});
});

optoptionvisualizer.addEventListener("click",  function() {
    let optoptionvisualizerURL = 'https://www.optionvisualizer.com/ticker/';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: optoptionvisualizerURL + searchTicker});
});
 
optoptionistics.addEventListener("click",  function() {
    let optoptionisticsURL = 'https://www.optionistics.com/quotes/stock-quotes/';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: optoptionisticsURL + searchTicker});
});

optTDA.addEventListener("click",  function() {
    let optTDAURL = 'https://invest.ameritrade.com/cgi-bin/apps/u/OptionChain?symbol=';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: optTDAURL + searchTicker + '&leg=symbol&type=CP&range=N&expire=A'});
});

optunusualwhales.addEventListener("click",  function() {
    let optunusualwhalesURL = 'https://www.unusualwhales.com/flow?limit=250&ticker_symbol=';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: optunusualwhalesURL + searchTicker});
});

optyahoofinance.addEventListener("click",  function() {
    let optyahoofinanceURL = 'https://finance.yahoo.com/quote/';
    let searchTicker = tickerSearchBar.value.toString().replace(/\W+/g, '');
    chrome.tabs.create({url: optyahoofinanceURL + searchTicker + '/options?p=' + searchTicker});
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
