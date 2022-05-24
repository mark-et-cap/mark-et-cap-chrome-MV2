function userOptions(){ 
    chrome.storage.sync.get([
        "selectedBrokerage",
        "selectedExchange",
        "selectedSResearch",
        "selectedCResearch"
    ], function(obj){
        let userPopupBrokerage = obj.selectedBrokerage;
        let userPopupExchange = obj.selectedExchange;
        let userPopupSResearch = obj.selectedSResearch;
        let userPopupCResearch = obj.selectedCResearch;
        switchBrokerage(userPopupBrokerage);
        switchExchange(userPopupExchange);
        switchSResearch(userPopupSResearch);
        switchCResearch(userPopupCResearch);
        popupCopy();
    });
};

function switchBrokerage(userPopupBrokerage) {
    switch (userPopupBrokerage){
        case "stockN/A":
            popupBrokerage('','',"N/A");
                break;
        case "allyinvest": 
            const allyinvestURL = 'https://live.invest.ally.com/research/stocks/';
            const allyinvestSuffix = '/overview';
            popupBrokerage(allyinvestURL, allyinvestSuffix, "Ally Invest");
                break;
        case 'charlesschwab':
            const charlesURL = 'https://www.schwab.com/public/schwab/investing/investment_help/investment_research/stock_research/stocks.html?path=/research/public/stocks/summary/?symbol=';
            popupBrokerage(charlesURL, '', "Charles Schwab");
                break;
        case 'etrade': 
            const etradeURL = 'https://www.etrade.wallst.com/v1/stocks/snapshot/snapshot.asp?ChallengeUrl=https://idp.etrade.com/idp/SSO.saml2&reinitiate-handshake=0&prospectnavyear=2011&AuthnContext=prospect&env=PRD&symbol=';
            popupBrokerage(etradeURL, '', "Etrade");    
                break;
        case 'fidelity':
            const fidelityURL = 'https://snapshot.fidelity.com/fidresearch/snapshot/landing.jhtml#/research?symbol=';
            popupBrokerage(fidelityURL, '', "Fidelity");
                break;
        case 'firstrade':
            const firtradeURL = 'https://www.firstrade.com/content/en-us/researchtools/research?ticker=';
            popupBrokerage(firtradeURL, '', "Firstrade");
                break;
        case 'merrilledge': 
            const merrillURL = 'https://www.merrilledge.com/M/cse/TM/Pages/SearchResults.aspx?k=';
            const merrillSuffix = '&tab=global&filter=all';
            popupBrokerage(merrillURL, merrillSuffix, "Merrill Edge")
                break;
        case 'moomoo':
            const moomooURL = 'https://www.moomoo.com/stock/';
            const moomooSuffix = '-US';
            popupBrokerage(moomooURL, moomooSuffix, "moomoo");
                break;
        case 'passfolio':
            const passfolioURL = 'https://web.passfolio.com/app/discover/stock/';
            popupBrokerage(passfolioURL, '', "Passfolio");
                break;
        case 'public':
            const publicURL = 'https://public.com/stocks/';
            popupBrokerage(publicURL, '', "Public");
                break;
        case "robinhood": 
            const robinhoodURL = 'https://robinhood.com/stocks/';
            popupBrokerage(robinhoodURL, '', "Robinhood");
                break;
        case 'sofi': 
            const sofiURL = 'https://www.sofi.com/wealth/app/stock/';
            popupBrokerage(sofiURL, '', "Sofi");
                break;
        case 'tdameritrade': 
            const tdaURL = 'https://invest.ameritrade.com/grid/p/site#r=jPage/https://research.ameritrade.com/grid/wwws/research/stocks/summary?c_name=invest_VENDOR&symbol=';
            popupBrokerage(tdaURL, '', "TDAmeritrade");
                break;
        case 'tradestation':
            const tradestationURL = 'https://www.tradestation.com/research/stocks/';
            popupBrokerage(tradestationURL, '', "TradeStation");
                break;
        case 'vanguard':
            const vanguardURL = 'https://personal.vanguard.com/us/secfunds/stocks/snapshot?Ticker=';
            popupBrokerage(vanguardURL, '', "Vanguard");
                break;
        case 'webull': 
            const webullURL = 'https://www.webull.com/quote/';
            popupBrokerage(webullURL, '', "Webull");
                break;
    }
};

function switchExchange(userPopupExchange) {
    switch (userPopupExchange){
        case 'cryptoN/A':
            popupExchange('','',"N/A");
                break;
        case 'binance': 
            const binanceURL = 'https://www.binance.com/en/trade/';
            const binanceSuffix = '_USDT'
            popupExchange(binanceURL, binanceSuffix, "Binance");
                break;
        case 'bitfinex': 
            const bitfinexURL = 'https://www.bitfinex.com/t/';
            const bitfinexSuffix = ':USD';
            popupExchange(bitfinexURL, bitfinexSuffix, "Bitfinex");
                break; 
        case 'bittrex':
            const bittrexURL = 'https://bittrex.com/Market/Index?MarketName=USD-';
            popupExchange(bittrexURL, '', "Bittrex");
                break;
        case 'blockfi':
            const blockfiURL = 'https://app.blockfi.com/accounts/wallet/';
            popupExchange(blockfiURL, '', "BlockFi");
                break;
        case 'cex':
            const cexURL = 'https://cex.io/';
            const cexSuffix = '-usd';
            popupExchange(cexURL, cexSuffix, "Cex");
                break;
        case 'coinbase':
            const coinbaseURL = 'https://www.coinbase.com/price/';
            popupExchange(coinbaseURL, '', "Coinbase");
                break;
        case 'coinbasepro':
            const coinbaseproURL = 'https://pro.coinbase.com/trade/';
            const coinbaseproSuffix = '-USD';
            popupExchange(coinbaseproURL, coinbaseproSuffix, "CoinbasePro");
                break;
        case 'cryptocom': 
            const cryptocomURL = 'https://crypto.com/exchange/trade/spot/';
            const cryptocomSuffix = '_USDT';
            popupExchange(cryptocomURL, cryptocomSuffix, "Crypto.com");
                break;
        case 'etoro':
            const etoroURL  = 'https://www.etoro.com/markets/';
            popupExchange(etoroURL, '', "eToro");
                break;
        case 'ftx':
            const ftxURL = 'https://ftx.us/trade/';
            const ftxSuffix = '/USD';
            popupExchange(ftxURL, ftxSuffix, "FTX");
                break;
        case 'gemini':
            const geminiURL = 'https://www.gemini.com/prices/';
            popupExchange(geminiURL, '', "Gemini"); 
                break;
        case 'kraken':
            const krakenURL = 'https://www.kraken.com/en-us/prices/';
            popupExchange(krakenURL, '', "Kraken");
                break;
        case 'okcoin':
            const okcoinURL =  'https://www.okcoin.com/prices/';
            const  okcoinSuffix = '-price-chart';
            popupExchange(okcoinURL, okcoinSuffix, "okcoin");
                break; 
        case 'passfoliocrypto':
            const passfoliocryptoURL = 'https://web.passfolio.com/app/discover/crypto/';
            popupExchange(passfoliocryptoURL, '', "PassfolioCrypto");
                break;
        case 'publiccrypto':
            const publiccryptoURL = 'https://public.com/crypto/';
            popupExchange(publiccryptoURL, '', "PublicCrypto");
                break;
        case 'robinhoodcrypto': 
            const rhCryptoURL = 'https://robinhood.com/crypto/';
            popupExchange(rhCryptoURL, '', "RobinhoodCrypto");
                break;
        case 'soficrypto': //<ticker>
            const soficryptoURL = 'https://www.sofi.com/wealth/app/crypto/';
            popupExchange(soficryptoURL, '', "SoFiCrypto");
                break;
        case 'uphold':
            const upholdURL = 'https://uphold.com/en-us/assets/crypto/buy-';
            popupExchange(upholdURL, '', "uphold");
                break;
        case 'webullcrypto': 
            const webullcryptoURL = 'https://www.webull.com/cryptocurrency/';
            popupExchange(webullcryptoURL, '', "WebullCrypto");
                break;
    }
};

function switchSResearch(userPopupSResearch) {
    switch (userPopupSResearch){
        case 'sresearchN/A':
            popupSResearch('','',"N/A");
                break;
        case 'barchart': 
            const rBarchart = 'https://www.barchart.com/stocks/quotes/';
            popupSResearch(rBarchart, '', "Barchart");
                break;
        case 'benzinga':
            const rBenzinga = 'https://www.benzinga.com/quote/';
            popupSResearch(rBenzinga, '', "Benzinga");
                break;
        case 'cmlviz': 
            const rcmlviz = 'https://www.cmlviz.com/stocks/';
            popupSResearch(rcmlviz, '', "CML");
                break;
        case 'edgar': //
            const redgar = 'https://www.sec.gov/edgar/search/#/entityName=';
            popupSResearch(redgar, '', "Edgar");
                break;
        case 'finviz': 
            const rFinviz = 'https://finviz.com/quote.ashx?t=';
            popupSResearch(rFinviz, '', "Finviz");
                break;
        case 'marketwatch': 
            const rMarketWatch = 'https://www.marketwatch.com/investing/stock/';
            popupSResearch(rMarketWatch, '', "MarketWatch");
                break;
        case 'nasdaq':
            const rNasdaq = 'https://www.nasdaq.com/market-activity/stocks/';
            popupSResearch(rNasdaq, '', "Nasdaq");
                break;
        case 'nyse': 
            const rNYSE = 'https://www.nyse.com/quote/';
            popupSResearch(rNYSE, '', "NYSE");
                break;
        case 'otc': 
            const rOTC = 'https://www.otcmarkets.com/stock/';
            const rOTCSuffix = '/overview';
            popupSResearch(rOTC, rOTCSuffix, "OTC Markets");
                break;
        case 'sreddit': 
            const rReddit = 'https://www.reddit.com/r/MillennialBets/wiki/index/stocks/';
            popupSResearch(rReddit, '', "Reddit");
                break;
        case 'stocktwits': 
            const rStocktwits = 'https://stocktwits.com/symbol/';
            popupSResearch(rStocktwits, '', "Stocktwits");
                break;
        case 'swaggystocks':
            const rSwaggy = 'https://swaggystocks.com/dashboard/stocks/';
            popupSResearch(rSwaggy, '', "SwaggyStocks");
                break;
        //handled in the firebase call to get exchange info
        case 'motleyfool':
            popupSResearch('', '', "MotleyFool");
                break;
        case 'tradingview':
            const rTradingView = 'https://www.tradingview.com/symbols/';
            popupSResearch(rTradingView, '', "TradingView");
                break;
        case 'trendspider':
            const rTrendSpider = 'https://charts.trendspider.com/?symbol=';
            popupSResearch(rTrendSpider, '', "TrendSpider");
                break;        
        case 'stwitter': 
            const rTwitter = 'https://twitter.com/search?q=%24';
            const rTwitterSuffix = '&src=cashtag_click';
            popupSResearch(rTwitter, rTwitterSuffix, "Twitter");
                break;
        case 'unusualwhales':
            const rUnusualWhales = 'https://unusualwhales.com/company/';
            const rUWSuffix = '/alerts'
            popupSResearch(rUnusualWhales, rUWSuffix, "Unusual Whales");
                break;
        case 'yahoofinance': 
            const rYahoo = 'https://finance.yahoo.com/quote/';
            popupSResearch(rYahoo, '', "YahooFinance");
                break;
        case 'zackscom':
            const rZacks = 'https://www.zacks.com/stock/quote/';
            popupSResearch(rZacks, '', "Zacks");
                break;
    }
};

function switchCResearch(userPopupCResearch) {
    switch (userPopupCResearch){
        case 'cresearchN/A':
            popupCResearch('', '', "N/A");
                break;
        case 'coindesk':
            const cCoinDesk = 'https://www.coindesk.com/price/';
            popupCResearch(cCoinDesk, '', "Coindesk");
                break;
        case 'coingecko':
            const cCoinGecko = 'https://www.coingecko.com/en/coins/';
            popupCResearch(cCoinGecko, '', "CoinGecko");
                break; 
        case 'coinmarketcap': 
            const cCoinMarketCap = 'https://coinmarketcap.com/currencies/';
            popupCResearch(cCoinMarketCap, '', "CoinMarketCap");
                break;
        case 'cryptonews': 
            const cCryptoNews = 'https://cryptonews.com/coins/';
            const cCryptoNewsSuffix = '/';
            popupCResearch(cCryptoNews, cCryptoNewsSuffix, "CryptoNews");
                break;
        case 'cryptopanic': 
            const ccryptopanic = 'https://cryptopanic.com/news/';
            popupCResearch(ccryptopanic, '', "CryptoPanic");
                break;           
        case 'defipulse':
            const cDefiPulse = 'https://defipulse.com/';
            popupCResearch(cDefiPulse, '', "DefiPulse");        
                break;
        case 'glassnode': 
            const cglassnode = 'https://studio.glassnode.com/metrics?a=';
            popupCResearch(cglassnode, '', "GlassNode");        
                break;
        case 'lunarcrush': 
            const clunarcrush = 'https://lunarcrush.com/coins/';
            popupCResearch(clunarcrush, '', "LunarCrush");        
                break;
        case 'messari': 
            const cmessari = 'https://messari.io/asset/';
            popupCResearch(cmessari, '', "Messari");        
                break;
        case 'creddit': 
            const cReddit = 'https://www.reddit.com/search/?q=%24';
            popupCResearch(cReddit, '', "Reddit");
                break;
        case 'ctradingview':
            const cTradingView = 'https://www.tradingview.com/symbols/CRYPTOCAP-';
            popupCResearch(cTradingView, '', "TradingView");
                break;
        case 'ctrendspider':
            const cTrendSpider = 'https://charts.trendspider.com/?symbol=%5E';
            const cTrendSpiderSuffix = 'USD';
            popupCResearch(cTrendSpider, cTrendSpiderSuffix, "TrendSpider");
                break;
        case 'ctwitter': 
            const cTwitter = 'https://twitter.com/search?q=%24';
            const cTwitterSuffix = '&src=cashtag_click';
            popupCResearch(cTwitter, cTwitterSuffix, "Twitter");
                break;
        case 'cyahoofinance': 
            const cYahoo = 'https://finance.yahoo.com/quote/';
            const cYahooSuffix = '-USD/';
            popupCResearch(cYahoo, cYahooSuffix, "Yahoo(Crypto)");
                break;
    }
};

function popupCopy(){
    popupCopyFavorites();
    let copyTickerID = document.querySelectorAll('a[id$="-ticker"]');
    let copyActionMenu = document.querySelectorAll('a[class$="action-copy"]');
    for(var i = 0; i < copyTickerID.length; i++) {
        let copySymbol = copyTickerID[i].innerHTML;
        copyActionMenu[i].addEventListener("click", function(){
            let copyText = document.createElement('input');
            document.body.appendChild(copyText);
            copyText.value = copySymbol;
            copyText.select();
            document.execCommand('copy'); 
            document.body.removeChild(copyText);
            chrome.notifications.create({
                type: "basic",
                title: '',
                message: `${copySymbol} Copied`,
                iconUrl: "../icons/MEC-128.png"
            }, function () {
            });
            setFavoriteTimeStamp(copySymbol);
        })
        copyActionMenu[i].innerText += copyTickerID[i].innerHTML;
    }
};

function popupBrokerage(brokerageURL, URLsuffix, source) {
    popupBrokerageFavorites(brokerageURL, URLsuffix, source);
    let allTickerId = document.querySelectorAll('a[id$="-ticker"]');
    let brokerageActionMenu = document.querySelectorAll('a[class$="action-brokerage"]');
    for(let i = 0; i < allTickerId.length; i++) {
        let thisSymbol = allTickerId[i].innerHTML;
        if (source == "N/A") {
            allTickerId[i].setAttribute("href", "https://www.google.com/search?q=" + thisSymbol);
            brokerageActionMenu.forEach(element => {
                element.style.display = "none";
            });
        } else {
            if(URLsuffix == null || URLsuffix == '') {
                if(source == "Webull") {
                    allTickerId[i].setAttribute("href", "https://www.google.com/search?q=" + thisSymbol);
                    brokerageActionMenu[i].addEventListener("click", function(e) {
                        chrome.runtime.sendMessage({content: thisSymbol.toUpperCase(), message: "find_stock_exchange"}, function(response) {
                            let dbURL = response.dbResponse;
                            setFavoriteTimeStamp(thisSymbol);
                            chrome.tabs.create({ url: dbURL});
                            return true;
                        });
                        return false;
                    });
                } else {
                    let thisBrokerageURL = brokerageURL + thisSymbol;
                    allTickerId[i].setAttribute("href", thisBrokerageURL);
                    brokerageActionMenu[i].addEventListener("click", function(e) {
                        setFavoriteTimeStamp(thisSymbol);
                        chrome.tabs.create({ url: thisBrokerageURL});
                        return false;
                    });
                }
            } else {
                let thisBrokerageURL = brokerageURL + thisSymbol + URLsuffix;
                allTickerId[i].setAttribute("href", thisBrokerageURL);
                brokerageActionMenu[i].addEventListener("click", function(e) {
                    setFavoriteTimeStamp(thisSymbol);
                    chrome.tabs.create({ url: thisBrokerageURL});
                        return false;
                });
            };
            brokerageActionMenu[i].innerText += source;
        };
    };
};
 
function popupExchange(exchangeURL, URLsuffix, source) {
    popupExchangeFavorites(exchangeURL, URLsuffix, source);
    let allCryptoId = document.querySelectorAll('a[id$="-ticker"]');
    let exchangeActionMenu = document.querySelectorAll('a[class$="action-exchange"]');
    for(let i = 0; i < allCryptoId.length; i++) {
        let thisCryptoSymbol = allCryptoId[i].innerHTML;
        if (source == "N/A") {
            exchangeActionMenu.forEach(element => {
                element.style.display = "none";
            });  
        } else {
            exchangeActionMenu[i].addEventListener("click", function(e){
                if(source == "Kraken" || source == "Coinbase" || source == "Gemini" || source == "okcoin" || source == "WebullCrypto") {
                    chrome.runtime.sendMessage({content: thisCryptoSymbol.toUpperCase(), message: "find_crypto_translation"}, function(response) {
                        let dbTranslation = response.dbResponse;
                        if (dbTranslation !== ""){
                            if(source == "Kraken") {
                                if(thisCryptoSymbol == "BTC") {
                                    let cryptoSymbol = "XBT";
                                    let krakenURL = 'https://www.kraken.com/en-us/prices/' + cryptoSymbol.toLowerCase() + '-' + dbTranslation;
                                    setFavoriteTimeStamp(thisCryptoSymbol);
                                    chrome.tabs.create({url: krakenURL});
                                    return false;
                                } else {
                                    let krakenURL = 'https://www.kraken.com/en-us/prices/' + thisCryptoSymbol.toLowerCase() + '-' + dbTranslation;
                                    setFavoriteTimeStamp(thisCryptoSymbol);
                                    chrome.tabs.create({ url: krakenURL });
                                    return false;
                                }
                            } else if(source == "okcoin") {
                                let okcoinURL =  'https://www.okcoin.com/prices/' + dbTranslation + '-' + thisCryptoSymbol + URLsuffix;
                                setFavoriteTimeStamp(thisCryptoSymbol);
                                chrome.tabs.create({ url: okcoinURL });
                                return false;
                            } else {
                                let thisExchangeURL = exchangeURL + dbTranslation
                                setFavoriteTimeStamp(thisCryptoSymbol);
                                chrome.tabs.create({ url: thisExchangeURL });
                                return false;
                            }
                        }
                    });
                } else if(source == "BlockFi" || source == "uphold") {
                    thisExchangeURL = exchangeURL + thisCryptoSymbol.toLowerCase();
                    setFavoriteTimeStamp(thisCryptoSymbol);
                    chrome.tabs.create({ url: thisExchangeURL});
                } else if(URLsuffix == null || URLsuffix == '') {
                    thisExchangeURL = exchangeURL + thisCryptoSymbol;
                    setFavoriteTimeStamp(thisCryptoSymbol);
                    chrome.tabs.create({ url: thisExchangeURL});
                } else {
                    thisExchangeURL = exchangeURL + thisCryptoSymbol.toUpperCase() + URLsuffix;
                    setFavoriteTimeStamp(thisCryptoSymbol);
                    chrome.tabs.create({ url: thisExchangeURL});
                }
                    return false;
            });
            exchangeActionMenu[i].innerText += source;  
        };
    };
};


function popupSResearch(sResearchURL, URLsuffix, source) {
    popupSResearchFavorites(sResearchURL, URLsuffix, source);
    let allSResearchId = document.querySelectorAll('a[id$="-ticker"]');
    let sResearchActionMenu = document.querySelectorAll('a[class$="action-SResearch"]');
    for(var i = 0; i< allSResearchId.length; i++) {
        let thisSResearchSymbol = allSResearchId[i].innerHTML;
        if (source == "N/A") {
            sResearchActionMenu.forEach(element => {
                element.style.display = "none";
            });  
        } else {
            sResearchActionMenu[i].addEventListener("click", function(e) {
                if(source == "MotleyFool") {
                    chrome.runtime.sendMessage({content: thisSResearchSymbol.toUpperCase(), message: "find_research_exchange"}, function(response) {
                        let dbTranslation = response.dbResponse;
                        setFavoriteTimeStamp(thisSResearchSymbol);
                        chrome.tabs.create({ url: dbTranslation});
                        return false;
                    });
                } else if (URLsuffix == null || URLsuffix == '') {
                    thisSResearchURL = sResearchURL + thisSResearchSymbol;
                    setFavoriteTimeStamp(thisSResearchSymbol);
                    chrome.tabs.create({ url: thisSResearchURL});
                    return false;
                } else {
                    thisSResearchURL = sResearchURL + thisSResearchSymbol + URLsuffix;
                    setFavoriteTimeStamp(thisSResearchSymbol);
                    chrome.tabs.create({ url: thisSResearchURL});
                    return false;
                }  
            });
            sResearchActionMenu[i].innerText += source;  
        };
    };
};

function popupCResearch(cResearchURL, URLsuffix, source) {
    popupCResearchFavorites(cResearchURL, URLsuffix, source);
    let allCResearchId = document.querySelectorAll('a[id$="-ticker"]');
    let cResearchActionMenu = document.querySelectorAll('a[class$="action-CResearch"]');
    for(var i = 0; i < allCResearchId.length; i++) {
        let thisCResearchSymbol = allCResearchId[i].innerHTML;
        if (source == "N/A") {
            cResearchActionMenu.forEach(element => {
                element.style.display = "none";
            });  
        } else {
            cResearchActionMenu[i].addEventListener("click", function(e) {
                if(source == "CryptoNews" || source == "CoinGecko" || source == "Coindesk" || source == "CoinMarketCap" || source == "DefiPulse" || source == "Messari") {
                    chrome.runtime.sendMessage({content: thisCResearchSymbol.toUpperCase(), message: "find_research_translation"}, function(response) {
                        let dbTranslation = response.dbResponse;
                        let thisCResearchURL = cResearchURL + dbTranslation;
                        setFavoriteTimeStamp(thisCResearchSymbol);
                        chrome.tabs.create({ url: thisCResearchURL});
                        return false;
                    });
                } else if (source == "LunarCrush") {
                    chrome.runtime.sendMessage({content: thisCResearchSymbol.toUpperCase(), message: "find_research_translation"}, function(response) {
                        let dbTranslation = response.dbResponse;
                        thisCResearchURL = cResearchURL + thisCResearchSymbol + '/' + dbTranslation;
                        setFavoriteTimeStamp(thisCResearchSymbol);
                        chrome.tabs.create({ url: thisCResearchURL});
                        return false;
                    });
                } else if (URLsuffix == null || URLsuffix == '') {
                    thisCResearchURL = cResearchURL + thisCResearchSymbol;
                    setFavoriteTimeStamp(thisCResearchSymbol);
                    chrome.tabs.create({ url: thisCResearchURL});
                    return false;
                } else {
                    thisCResearchURL = cResearchURL + thisCResearchSymbol + URLsuffix;
                    setFavoriteTimeStamp(thisCResearchSymbol);
                    chrome.tabs.create({ url: thisCResearchURL});
                    return false;
                }
            });
            cResearchActionMenu[i].innerText += source;
        };  
    };
};


//Repeat for Favorites
function popupCopyFavorites() {
    let copyFavoriteID = document.querySelectorAll('a[id$="-favorite"]');
    let copyActionMenu = document.querySelectorAll('a[class$="action-copy"]');
    for(var i = 0; i < copyFavoriteID.length; i++) {
        let copySymbol = copyFavoriteID[i].innerHTML;
        copyActionMenu[i+15].addEventListener("click", function(){
            let copyText = document.createElement('input');
            document.body.appendChild(copyText);
            copyText.value = copySymbol;
            copyText.select();
            document.execCommand('copy'); 
            document.body.removeChild(copyText);
            chrome.notifications.create({
                type: "basic",
                title: '',
                message: `${copySymbol} Copied`,
                iconUrl: "../icons/MEC-128.png"
            }, function () {
            });
            setFavoriteTimeStamp(copySymbol);
        })
        copyActionMenu[i+15].innerText += copyFavoriteID[i].innerHTML;
    }
};

function popupBrokerageFavorites(brokerageURL, URLsuffix, source) {
    let allTickerId = document.querySelectorAll('a[id$="-favorite"]');
    let brokerageActionMenu = document.querySelectorAll('a[class$="action-brokerage"]');
    for(let i = 0; i < allTickerId.length; i++) {
        let thisSymbol = allTickerId[i].innerHTML;
        if (source == "N/A") {
            allTickerId[i].setAttribute("href", "https://www.google.com/search?q=" + thisSymbol);
            brokerageActionMenu.forEach(element => {
                element.style.display = "none";
            });
        } else {
            if(URLsuffix == null || URLsuffix == '') {
                if(source == "Webull") {
                    allTickerId[i].setAttribute("href", "https://www.google.com/search?q=" + thisSymbol);
                    brokerageActionMenu[i+15].addEventListener("click", function(e) {
                        chrome.runtime.sendMessage({content: thisSymbol.toUpperCase(), message: "find_stock_exchange"}, function(response) {
                            let dbURL = response.dbResponse;
                            setFavoriteTimeStamp(thisSymbol);
                            chrome.tabs.create({ url: dbURL});
                            return true;
                        });
                        return false;
                    });
                } else {
                    let thisBrokerageURL = brokerageURL + thisSymbol;
                    allTickerId[i].setAttribute("href", thisBrokerageURL);
                    brokerageActionMenu[i+15].addEventListener("click", function(e) {
                        setFavoriteTimeStamp(thisSymbol);
                        chrome.tabs.create({ url: thisBrokerageURL});
                        return false;
                    });
                }
            } else {
                let thisBrokerageURL = brokerageURL + thisSymbol + URLsuffix;
                allTickerId[i].setAttribute("href", thisBrokerageURL);
                brokerageActionMenu[i+15].addEventListener("click", function(e) {
                    setFavoriteTimeStamp(thisSymbol);
                    chrome.tabs.create({ url: thisBrokerageURL});
                        return false;
                });
            };
            brokerageActionMenu[i+15].innerText += source;
        };
    };
};

function popupExchangeFavorites(exchangeURL, URLsuffix, source) {
    let allCryptoId = document.querySelectorAll('a[id$="-favorite"]');
    let exchangeActionMenu = document.querySelectorAll('a[class$="action-exchange"]');
    for(let i = 0; i < allCryptoId.length; i++) {
        let thisCryptoSymbol = allCryptoId[i].innerHTML;
        if (source == "N/A") {
            exchangeActionMenu.forEach(element => {
                element.style.display = "none";
            });  
        } else {
            exchangeActionMenu[i+15].addEventListener("click", function(e){
                if(source == "Kraken" || source == "Coinbase" || source == "Gemini" || source == "okcoin" || source == "WebullCrypto") {
                    chrome.runtime.sendMessage({content: thisCryptoSymbol.toUpperCase(), message: "find_crypto_translation"}, function(response) {
                        let dbTranslation = response.dbResponse;
                        if (dbTranslation !== ""){
                            if(source == "Kraken") {
                                if(thisCryptoSymbol == "BTC") {
                                    let cryptoSymbol = "XBT";
                                    let krakenURL = 'https://www.kraken.com/en-us/prices/' + cryptoSymbol.toLowerCase() + '-' + dbTranslation;
                                    setFavoriteTimeStamp(thisCryptoSymbol);
                                    chrome.tabs.create({url: krakenURL});
                                    return false;
                                } else {
                                    let krakenURL = 'https://www.kraken.com/en-us/prices/' + thisCryptoSymbol.toLowerCase() + '-' + dbTranslation;
                                    setFavoriteTimeStamp(thisCryptoSymbol);
                                    chrome.tabs.create({ url: krakenURL });
                                    return false;
                                }
                            } else if(source == "okcoin") {
                                let okcoinURL =  'https://www.okcoin.com/prices/' + dbTranslation + '-' + thisCryptoSymbol + URLsuffix;
                                setFavoriteTimeStamp(thisCryptoSymbol);
                                chrome.tabs.create({ url: okcoinURL });
                                return false;
                            } else {
                                let thisExchangeURL = exchangeURL + dbTranslation
                                setFavoriteTimeStamp(thisCryptoSymbol);
                                chrome.tabs.create({ url: thisExchangeURL });
                                return false;
                            }
                        }
                    });
                } else if(source == "BlockFi" || source == "uphold") {
                    thisExchangeURL = exchangeURL + thisCryptoSymbol.toLowerCase();
                    setFavoriteTimeStamp(thisCryptoSymbol);
                    chrome.tabs.create({ url: thisExchangeURL});
                } else if(URLsuffix == null || URLsuffix == '') {
                    thisExchangeURL = exchangeURL + thisCryptoSymbol;
                    setFavoriteTimeStamp(thisCryptoSymbol);
                    chrome.tabs.create({ url: thisExchangeURL});
                } else {
                    thisExchangeURL = exchangeURL + thisCryptoSymbol.toUpperCase() + URLsuffix;
                    setFavoriteTimeStamp(thisCryptoSymbol);
                    chrome.tabs.create({ url: thisExchangeURL});
                }
                    return false;
            });
        exchangeActionMenu[i+15].innerText += source;  
        };
    };
};

function popupSResearchFavorites(sResearchURL, URLsuffix, source) {
    let allSResearchId = document.querySelectorAll('a[id$="-favorite"]');
    let sResearchActionMenu = document.querySelectorAll('a[class$="action-SResearch"]');
    for(var i = 0; i< allSResearchId.length; i++) {
        let thisSResearchSymbol = allSResearchId[i].innerHTML;
        if (source == "N/A") {
            sResearchActionMenu.forEach(element => {
                element.style.display = "none";
            });  
        } else {
            sResearchActionMenu[i+15].addEventListener("click", function(e) {
                if(source == "MotleyFool") {
                    chrome.runtime.sendMessage({content: thisSResearchSymbol.toUpperCase(), message: "find_research_exchange"}, function(response) {
                        let dbTranslation = response.dbResponse;
                        setFavoriteTimeStamp(thisSResearchSymbol);
                        chrome.tabs.create({ url: dbTranslation});
                        return false;
                    });
                } else if (URLsuffix == null || URLsuffix == '') {
                    thisSResearchURL = sResearchURL + thisSResearchSymbol;
                    setFavoriteTimeStamp(thisSResearchSymbol);
                    chrome.tabs.create({ url: thisSResearchURL});
                    return false;
                } else {
                    thisSResearchURL = sResearchURL + thisSResearchSymbol + URLsuffix;
                    setFavoriteTimeStamp(thisSResearchSymbol);
                    chrome.tabs.create({ url: thisSResearchURL});
                    return false;
                }  
            });
            sResearchActionMenu[i+15].innerText += source;  
        };
    };
};

function popupCResearchFavorites(cResearchURL, URLsuffix, source) {
    let allCResearchId = document.querySelectorAll('a[id$="-favorite"]');
    let cResearchActionMenu = document.querySelectorAll('a[class$="action-CResearch"]');
    for(var i = 0; i < allCResearchId.length; i++) {
        let thisCResearchSymbol = allCResearchId[i].innerHTML;
        if (source == "N/A") {
            cResearchActionMenu.forEach(element => {
                element.style.display = "none";
            });  
        } else {
            cResearchActionMenu[i+15].addEventListener("click", function(e) {
                if(source == "CryptoNews" || source == "CoinGecko" || source == "Coindesk" || source == "CoinMarketCap" || source == "DefiPulse") {
                    chrome.runtime.sendMessage({content: thisCResearchSymbol.toUpperCase(), message: "find_research_translation"}, async function(response) {
                        let dbTranslation =  response.dbResponse;
                        let thisCResearchURL = cResearchURL + dbTranslation;
                        setFavoriteTimeStamp(thisCResearchSymbol);
                        chrome.tabs.create({ url: thisCResearchURL});
                        return false;
                    });
                } else if (source == "LunarCrush") {
                    chrome.runtime.sendMessage({content: thisCResearchSymbol.toUpperCase(), message: "find_research_translation"}, function(response) {
                        let dbTranslation = response.dbResponse;
                        thisCResearchURL = cResearchURL + thisCResearchSymbol + '/' + dbTranslation;
                        setFavoriteTimeStamp(thisCResearchSymbol);
                        chrome.tabs.create({ url: thisCResearchURL});
                        return false;
                    });   
                } else if (URLsuffix == null || URLsuffix == '') {
                    thisCResearchURL = cResearchURL + thisCResearchSymbol;
                    setFavoriteTimeStamp(thisCResearchSymbol);
                    chrome.tabs.create({ url: thisCResearchURL});
                    return false;
                } else {
                    thisCResearchURL = cResearchURL + thisCResearchSymbol + URLsuffix;
                    setFavoriteTimeStamp(thisCResearchSymbol);
                    chrome.tabs.create({ url: thisCResearchURL});
                    return false;
                }
            });
            cResearchActionMenu[i+15].innerText += source;
        };  
    };
};

function resetUserOptions() {
    let favoritesSection = document.querySelectorAll('a[id$="-favorite"]');
    let resetCopyText = document.querySelectorAll('a[class$="action-copy"]');
    let resetBrokerage = document.querySelectorAll('a[class$="action-brokerage"]');
    let resetExchange = document.querySelectorAll('a[class$="action-exchange"]');
    let resetSResearch = document.querySelectorAll('a[class$="action-SResearch"]')
    let resetCResearch = document.querySelectorAll('a[class$="action-CResearch"]');
    for (let i = 0; i < favoritesSection.length; i++) {
        //recents
        resetCopyText[i].innerText = "Copy ";
        resetBrokerage[i].innerText = "Open w/ ";
        resetExchange[i].innerText = "Open w/ ";
        resetSResearch[i].innerText = "Open w/ ";
        resetCResearch[i].innerText = "Open w/ ";
    
        //Favorites
        resetCopyText[i+15].innerText = "Copy ";
        resetBrokerage[i+15].innerText = "Open w/ ";
        resetExchange[i+15].innerText = "Open w/ ";
        resetSResearch[i+15].innerText = "Open w/ ";
        resetCResearch[i+15].innerText = "Open w/ ";

        //clone existing nodes
        let newResetCopyText = resetCopyText[i].cloneNode(true);
        let newResetCopyTextFav = resetCopyText[i+15].cloneNode(true);
        let newResetBrokerage = resetBrokerage[i].cloneNode(true);
        let newResetBrokerageFav = resetBrokerage[i+15].cloneNode(true);
        let newResetExchange = resetExchange[i].cloneNode(true);
        let newResetExchangeFav = resetExchange[i+15].cloneNode(true);
        let newResetSResearch = resetSResearch[i].cloneNode(true);
        let newResetSResearchFav = resetSResearch[i+15].cloneNode(true);
        let newResetCResearch = resetCResearch[i].cloneNode(true);
        let newResetCResearchFav = resetCResearch[i+15].cloneNode(true);

        //create new nodes to remove all event listeners
        resetCopyText[i].parentNode.replaceChild(newResetCopyText, resetCopyText[i]);
        resetCopyText[i+15].parentNode.replaceChild(newResetCopyTextFav, resetCopyText[i+15]);
        resetBrokerage[i].parentNode.replaceChild(newResetBrokerage, resetBrokerage[i]);
        resetBrokerage[i+15].parentNode.replaceChild(newResetBrokerageFav, resetBrokerage[i+15]);
        resetExchange[i].parentNode.replaceChild(newResetExchange, resetExchange[i]);
        resetExchange[i+15].parentNode.replaceChild(newResetExchangeFav, resetExchange[i+15]);
        resetSResearch[i].parentNode.replaceChild(newResetSResearch, resetSResearch[i]);
        resetSResearch[i+15].parentNode.replaceChild(newResetSResearchFav, resetSResearch[i+15]);
        resetCResearch[i].parentNode.replaceChild(newResetCResearch, resetCResearch[i]);
        resetCResearch[i+15].parentNode.replaceChild(newResetCResearchFav, resetCResearch[i+15]);
    };
    userOptions()
}
 
function setFavoriteTimeStamp(ticker) {
    chrome.storage.sync.get([
        "selectedFavorites",
        "favoritesTimeStamp"
    ], function(obj){
        let userSelectedFavorites = obj.selectedFavorites;
        let favoritesTimeStamp = obj.favoritesTimeStamp;
        if(userSelectedFavorites.includes(ticker)) {
            let index = userSelectedFavorites.indexOf(ticker);
            let favTimeStamp = new Date();
            favoritesTimeStamp[index] = favTimeStamp.toLocaleString([], {year: '2-digit', month: '2-digit', day: 'numeric', hour: '2-digit', minute: '2-digit'});
            chrome.storage.sync.set({
                'favoritesTimeStamp': favoritesTimeStamp
            });
        };
    });
};

document.addEventListener('DOMContentLoaded', function(){
    userOptions();
});
