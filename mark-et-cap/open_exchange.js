var cryptoSymbol = '';

chrome.runtime.onMessage.addListener(
    function(request, sender, callback) {
        if(request.message == "get_symbol" || request.message == "get_selection") {
            cryptoSymbol = request.content;
        } 
    }
);

function determineExchange() {
    chrome.storage.sync.get(["selectedExchange"], function(obj) {
        userExchange = obj.selectedExchange;
        switch (userExchange){
            case 'binance':  browserBinance();
                break;
            case 'bitfinex':  browserBitfinex();
                break;
            case 'bittrex':  browserBittrex();
                break;
            case 'blockfi': browserBlockfi();
                break;
            case 'cex':  browserCex();
                break;
            case 'coinbase':  browserCoinbase();
                break;
            case 'coinbasepro': browserCoinbasePro();
                break;
            case 'cryptocom':  browserCryptocom();
                break;
            case 'etoro':  browserEtoro();
                break;
            case 'ftx': browserFTX();
                break;
            case 'gemini':  browserGemini();
                break;
            case 'kraken':  browserKraken();
                break;
            case 'okcoin': browserOkcoin();
                break;
            case 'passfoliocrypto': browserPassfolioCrypto();
                break;
            case 'publiccrypto': browserPublicCrypto();
                break;
            case 'robinhoodcrypto':  browserRHCrypto();
                break;
            case 'soficrypto': browserSofiCrypto();
                break;
            case 'uphold': browserUphold();
                break;
            case 'webullcrypto': browserWebullCrypto();
                break;
        };
    });
};

function determineExchange2() {
    chrome.storage.sync.get(["selectedExchange2"], function(obj) {
        userExchange = obj.selectedExchange2;
        switch (userExchange){
            case 'binance':  browserBinance();
                break;
            case 'bitfinex':  browserBitfinex();
                break;
            case 'bittrex':  browserBittrex();
                break;
            case 'blockfi': browserBlockfi();
                break;
            case 'cex':  browserCex();
                break;
            case 'coinbase':  browserCoinbase();
                break;
            case 'coinbasepro': browserCoinbasePro();
                break;
            case 'cryptocom':  browserCryptocom();
                break;
            case 'etoro':  browserEtoro();
                break;
            case 'ftx': browserFTX();
                break;
            case 'gemini':  browserGemini();
                break;
            case 'kraken':  browserKraken();
                break;
            case 'okcoin': browserOkcoin();
                break;
            case 'passfoliocrypto': browserPassfolioCrypto();
                break;
            case 'publiccrypto': browserPublicCrypto();
                break;
            case 'robinhoodcrypto':  browserRHCrypto();
                break;
            case 'soficrypto': browserSofiCrypto();
                break;
            case 'uphold': browserUphold();
                break;
            case 'webullcrypto': browserWebullCrypto();
                break;
        };
    });
};

function determineExchange3() {
    chrome.storage.sync.get(["selectedExchange3"], function(obj) {
        userExchange = obj.selectedExchange3;
        switch (userExchange){
            case 'binance':  browserBinance();
                break;
            case 'bitfinex':  browserBitfinex();
                break;
            case 'bittrex':  browserBittrex();
                break;
            case 'blockfi': browserBlockfi();
                break;
            case 'cex':  browserCex();
                break;
            case 'coinbase':  browserCoinbase();
                break;
            case 'coinbasepro': browserCoinbasePro();
                break;
            case 'cryptocom':  browserCryptocom();
                break;
            case 'etoro':  browserEtoro();
                break;
            case 'ftx': browserFTX();
                break;
            case 'gemini':  browserGemini();
                break;
            case 'kraken':  browserKraken();
                break;
            case 'okcoin': browserOkcoin();
                break;
            case 'passfoliocrypto': browserPassfolioCrypto();
                break;
            case 'publiccrypto': browserPublicCrypto();
                break;
            case 'robinhoodcrypto':  browserRHCrypto();
                break;
            case 'soficrypto': browserSofiCrypto();
                break;
            case 'uphold': browserUphold();
                break;
            case 'webullcrypto': browserWebullCrypto();
                break;
        };
    });
};

//order of the recentInteraction function matters, messaging from recent_Symbol.js to get_Symbol.js
//using chrome.tabs.query (where tab[0].id is where the message will be sent) if the new tab is created
//as part of the below functions, the focusDomain is lost

//defaults to USDT pair
function browserBinance() {
    recentInteraction(cryptoSymbol);
    let binanceURL = 'https://www.binance.com/en/trade/' + cryptoSymbol + '_USDT';
    chrome.tabs.create({ url: binanceURL });
};

//defaults to USD pair
function browserBitfinex() {
    recentInteraction(cryptoSymbol);
    let bitfinexURL = 'https://www.bitfinex.com/t/' + cryptoSymbol + ':USD';
    chrome.tabs.create({ url: bitfinexURL });
};

//defaults to USD pair
function browserBittrex() {
    recentInteraction(cryptoSymbol);
    let bittrexURL = 'https://bittrex.com/Market/Index?MarketName=USD-' + cryptoSymbol;
    chrome.tabs.create({ url: bittrexURL });
};

function browserBlockfi() {
    recentInteraction(cryptoSymbol);
    let blockfiURL = 'https://app.blockfi.com/accounts/wallet/' + cryptoSymbol.toLowerCase();
    chrome.tabs.create({ url: blockfiURL });
};

//defaults to USD pair
function browserCex() {
    recentInteraction(cryptoSymbol);
    let cexURL = 'https://cex.io/' + cryptoSymbol + '-usd';
    chrome.tabs.create({ url: cexURL });
};

function browserCoinbase() {
    recentInteraction(cryptoSymbol);
    firebaseDB.child("crypto").child(cryptoSymbol.toUpperCase()).once('value').then(function(snapshot) {
        if(snapshot.exists()) {
            let cryptoObj = snapshot.val();
            let cryptoTranslation = cryptoObj.ticker_url_translation;
            if (cryptoTranslation !== "") {
                let coinbaseURL = 'https://www.coinbase.com/price/' + cryptoTranslation;
                chrome.tabs.create({ url: coinbaseURL });
            } else {
                let coinbaseURL = 'https://www.coinbase.com/price/' + cryptoSymbol;
                chrome.tabs.create({ url: coinbaseURL });
            }
        } else {
            let coinbaseURL = 'https://www.coinbase.com/price/' + cryptoSymbol;
            chrome.tabs.create({ url: coinbaseURL });
        }
    });
};

function browserCoinbasePro() {
    recentInteraction(cryptoSymbol);
    let coinbaseProURL = 'https://pro.coinbase.com/trade/' + cryptoSymbol.toUpperCase() + '-USD';
    chrome.tabs.create({ url: coinbaseProURL });
};

//defaults to USDT pair
function browserCryptocom() {
    recentInteraction(cryptoSymbol);
    let cryptocomURL = 'https://crypto.com/exchange/trade/spot/' + cryptoSymbol.toUpperCase() + '_USDT';
    chrome.tabs.create({url: cryptocomURL});
};

function browserEtoro() {
    recentInteraction(cryptoSymbol);
    if(cryptoSymbol == "ETH") {
        let cryptoSymbol = "ethereum"
        let etoroURL  = 'https://www.etoro.com/markets/' + cryptoSymbol;
        chrome.tabs.create({url: etoroURL});
    } else {
        let etoroURL  = 'https://www.etoro.com/markets/' + cryptoSymbol;
        chrome.tabs.create({url: etoroURL});
    }
};


//defaults to USD pair
function browserFTX() {
    recentInteraction(cryptoSymbol);
    let FTXURL = 'https://ftx.us/trade/' + cryptoSymbol + '/USD';
    chrome.tabs.create({url: FTXURL});
}

//requires database call for ticker_urlname
function browserGemini() {
    recentInteraction(cryptoSymbol);
    firebaseDB.child("crypto").child(cryptoSymbol.toUpperCase()).once('value').then(function(snapshot) {
        if(snapshot.exists()) {
            let cryptoObj = snapshot.val();
            let cryptoTranslation = cryptoObj.ticker_url_translation;
            if (cryptoTranslation !== "") {
                let geminiURL = 'https://www.gemini.com/prices/' + cryptoTranslation;
                chrome.tabs.create({ url: geminiURL });
            } else {
                let geminiURL = 'https://www.gemini.com/prices/' + cryptoSymbol;
                chrome.tabs.create({ url: geminiURL });
            }
        } else {
            let geminiURL = 'https://www.gemini.com/prices/' + cryptoSymbol;
            chrome.tabs.create({ url: geminiURL });
        }
    });
};

function browserKraken() {
    recentInteraction(cryptoSymbol);
    firebaseDB.child("crypto").child(cryptoSymbol.toUpperCase()).once('value').then(function(snapshot) {
        if(snapshot.exists()) {
            let cryptoObj = snapshot.val();
            let cryptoTranslation = cryptoObj.ticker_url_translation;
            if (cryptoTranslation !== "") {
                if(cryptoSymbol == "BTC") {
                    let cryptoSymbol = "XBT";
                    let krakenURL = 'https://www.kraken.com/prices/' + cryptoSymbol + '-' + cryptoTranslation + '-price-chart';
                    chrome.tabs.create({ url: krakenURL });
                } else {
                    let krakenURL = 'https://www.kraken.com/prices/' + cryptoSymbol + '-' + cryptoTranslation + '-price-chart';
                    chrome.tabs.create({ url: krakenURL });
                }
            } else {
                let krakenURL = 'https://www.kraken.com/prices/' + cryptoSymbol + '-price-chart';
                chrome.tabs.create({ url: krakenURL });
            }
        } else {
            let krakenURL = 'https://www.kraken.com/prices/' + cryptoSymbol + '-price-chart';
            chrome.tabs.create({ url: krakenURL });
        }
    });
};

function browserOkcoin() {
    recentInteraction(cryptoSymbol);
    firebaseDB.child("crypto").child(cryptoSymbol.toUpperCase()).once('value').then(function(snapshot) {
        if(snapshot.exists()) {
            let cryptoObj = snapshot.val();
            let cryptoTranslation = cryptoObj.ticker_url_translation;
            if (cryptoTranslation !== "") {
                let okcoinURL = 'https://www.okcoin.com/prices/' + cryptoTranslation + '-' + cryptoSymbol + '-price-chart';
                chrome.tabs.create({ url: okcoinURL });
            } else {
                let okcoinURL = 'https://www.okcoin.com/prices/' + cryptoSymbol;
                chrome.tabs.create({ url: okcoinURL });
            }
        } else {
            let okcoinURL = 'https://www.okcoin.com/prices/' + cryptoSymbol;
            chrome.tabs.create({ url: okcoinURL });
        }
    });
};

function browserPassfolioCrypto(){
    recentInteraction(cryptoSymbol);
    let passfolioCryptoURL = 'https://web.passfolio.com/app/discover/crypto/' + cryptoSymbol.toUpperCase();
    chrome.tabs.create({ url: passfolioCryptoURL });
};

function browserPublicCrypto() {
    recentInteraction(cryptoSymbol);
    let publicCryptoURL = 'https://public.com/crypto/' + cryptoSymbol;
    chrome.tabs.create({ url: publicCryptoURL });
};

function browserRHCrypto() {
    recentInteraction(cryptoSymbol);
    let rhCryptoURL = 'https://robinhood.com/crypto/' + cryptoSymbol;
    chrome.tabs.create({ url: rhCryptoURL });
};


function browserSofiCrypto() {
    recentInteraction(cryptoSymbol);
    let sofiCryptoURL = 'https://www.sofi.com/wealth/app/crypto/' + cryptoSymbol;
    chrome.tabs.create({ url: sofiCryptoURL });
};


function browserUphold() {
    recentInteraction(cryptoSymbol);
    let upholdURL = 'https://uphold.com/en-us/assets/crypto/buy-' + cryptoSymbol.toLowerCase();
    chrome.tabs.create({ url: upholdURL });
};

function browserWebullCrypto() {
    recentInteraction(cryptoSymbol);
    firebaseDB.child("crypto").child(cryptoSymbol.toUpperCase()).once('value').then(function(snapshot) {
        if(snapshot.exists()) {
            let cryptoObj = snapshot.val();
            let cryptoTranslation = cryptoObj.ticker_url_translation;
            if (cryptoTranslation !== "") {
                let webullCryptoURL = 'https://www.webull.com/cryptocurrency/' + cryptoTranslation;
                chrome.tabs.create({ url: webullCryptoURL });
            } else {
                let webullCryptoURL = 'https://www.webull.com/cryptocurrency/' + cryptoSymbol;
                chrome.tabs.create({ url: webullCryptoURL });
            }
        } else {
            let webullCryptoURL = 'https://www.webull.com/cryptocurrency/' + cryptoSymbol;
            chrome.tabs.create({ url: webullCryptoURL });
        }
    });
};





