let cryptoResearch = '';

chrome.runtime.onMessage.addListener(
    function(request, sender, callback) {
        if(request.message == "get_symbol" || request.message == "get_selection") {
            cryptoResearch = request.content;
        } 
    }
);

function determineCResearch() {
    chrome.storage.sync.get(["selectedCResearch"], function(obj) {
        userCResearch = obj.selectedCResearch;
        switch (userCResearch){
            case 'ctwitter': cresearchTwitter();
                break;
            case 'cryptonews': researchCryptoNews();
                break;
            case 'coingecko': researchCoinGecko();
                break; 
            case 'coindesk': researchCoinDesk();
                break;
            case 'cyahoofinance': researchCYahoo();
                break;
            case 'coinmarketcap': researchCoinMarketCap();
                break;
            case 'blockfolio': researchBlockfolio();
                break;
            case 'creddit': researchCReddit();
                break;
            case 'defipulse': researchDefiPulse();
                break;
            case 'ctradingview': cresearchTradingView();
                break;
        };
    });
};

//** UPDATE BELOW w/ function name/address, cryptoResearch symbol, etc **
//order of the recentInteraction function matters, messaging from recent_Symbol.js to get_Symbol.js
//using chrome.tabs.query (where tab[0].id is where the message will be sent) if the new tab is created
//as part of the below functions, the focusDomain is lost

function cresearchTwitter() {
    recentInteraction(cryptoResearch);
    let cTwitter = 'https://twitter.com/search?q=%24' + cryptoResearch + '&src=cashtag_click';
    chrome.tabs.create({ url: cTwitter });
};

function researchCryptoNews() {
    recentInteraction(cryptoResearch);
    firebaseDB.child("crypto").child(cryptoSymbol.toUpperCase()).once('value').then(function(snapshot) {
        if(snapshot.exists()) {
            let cryptoObj = snapshot.val();
            let cryptoTranslation = cryptoObj.ticker_url_translation;
            if (cryptoTranslation !== "") {
                let cCryptoNews = 'https://cryptonews.com/coins/' + cryptoTranslation + '/';
                chrome.tabs.create({ url: cCryptoNews });
            } else {
                let cCryptoNews = 'https://cryptonews.com/coins/' + cryptoResearch + '/';
                chrome.tabs.create({ url: cCryptoNews });
            }
        } else {
            let cCryptoNews = 'https://cryptonews.com/coins/' + cryptoResearch + '/';
            chrome.tabs.create({ url: cCryptoNews });
        }
    });
};

function researchCoinGecko() {
    recentInteraction(cryptoResearch);
    firebaseDB.child("crypto").child(cryptoSymbol.toUpperCase()).once('value').then(function(snapshot) {
        if(snapshot.exists()) {
            let cryptoObj = snapshot.val();
            let cryptoTranslation = cryptoObj.ticker_url_translation;
            if (cryptoTranslation !== "") {
                let cCoinGecko = 'https://www.coingecko.com/en/coins/' + cryptoTranslation.toLowerCase();
                chrome.tabs.create({ url: cCoinGecko });
            } else {
                let cCoinGecko = 'https://www.coingecko.com/en/coins/' + cryptoResearch;
                chrome.tabs.create({ url: cCoinGecko });
            }
        } else {
            let cCoinGecko = 'https://www.coingecko.com/en/coins/' + cryptoResearch;
            chrome.tabs.create({ url: cCoinGecko });
        }
    });
};

function researchCoinDesk() {
    recentInteraction(cryptoResearch);
    firebaseDB.child("crypto").child(cryptoSymbol.toUpperCase()).once('value').then(function(snapshot) {
        if(snapshot.exists()) {
            let cryptoObj = snapshot.val();
            let cryptoTranslation = cryptoObj.ticker_url_translation;
            if (cryptoTranslation !== "") {
                let cCoinDesk = 'https://www.coindesk.com/price/' + cryptoTranslation;
                chrome.tabs.create({ url: cCoinDesk });
            } else {
                let cCoinDesk = 'https://www.coindesk.com/price/' + cryptoResearch;
                chrome.tabs.create({ url: cCoinDesk });
            }
        } else {
            let cCoinDesk = 'https://www.coindesk.com/price/' + cryptoResearch;
            chrome.tabs.create({ url: cCoinDesk });
        }
    });
};

function researchCYahoo() {
    recentInteraction(cryptoResearch);
    let cYahoo = 'https://finance.yahoo.com/quote/' + cryptoResearch + '-USD/';
    chrome.tabs.create({ url: cYahoo });
};

function researchCoinMarketCap() {
    recentInteraction(cryptoResearch);
    firebaseDB.child("crypto").child(cryptoSymbol.toUpperCase()).once('value').then(function(snapshot) {
        if(snapshot.exists()) {
            let cryptoObj = snapshot.val();
            let cryptoTranslation = cryptoObj.ticker_url_translation;
            if (cryptoTranslation !== "") {
                let cCoinMarketCap = 'https://coinmarketcap.com/currencies/' + cryptoTranslation;
                chrome.tabs.create({ url: cCoinMarketCap });
            } else {
                let cCoinMarketCap = 'https://coinmarketcap.com/currencies/' + cryptoResearch;
                chrome.tabs.create({ url: cCoinMarketCap });
            }
        } else {
            let cCoinMarketCap = 'https://coinmarketcap.com/currencies/'  + cryptoResearch;
            chrome.tabs.create({ url: cCoinMarketCap });
        }
    });
};

function researchBlockfolio() {
    recentInteraction(cryptoResearch);
    let cBlockfolio = 'https://blockfolio.com/coin/' + cryptoResearch;
    chrome.tabs.create({ url: cBlockfolio });
};

function researchCReddit() {
    recentInteraction(cryptoResearch);
    let cReddit = 'https://www.reddit.com/search/?q=%24' + cryptoResearch;
    chrome.tabs.create({ url: cReddit });
};

function researchDefiPulse() {
    recentInteraction(cryptoResearch);
    firebaseDB.child("crypto").child(cryptoSymbol.toUpperCase()).once('value').then(function(snapshot) {
        if(snapshot.exists()) {
            let cryptoObj = snapshot.val();
            let cryptoTranslation = cryptoObj.ticker_url_translation;
            if (cryptoTranslation !== "") {
                let cDefiPulse = 'https://defipulse.com/' + cryptoTranslation;
                chrome.tabs.create({ url: cDefiPulse });
            } else {
                let cDefiPulse = 'https://defipulse.com/' + cryptoResearch;
                chrome.tabs.create({ url: cDefiPulse });
            }
        } else {
            let cDefiPulse = 'https://defipulse.com/' + cryptoResearch;
            chrome.tabs.create({ url: cDefiPulse });
        }
    });
};

function cresearchTradingView() {
    recentInteraction(cryptoResearch);
    let cTradingView = 'https://www.tradingview.com/symbols/CRYPTOCAP-' + cryptoResearch;
    chrome.tabs.create({ url: cTradingView });
};
