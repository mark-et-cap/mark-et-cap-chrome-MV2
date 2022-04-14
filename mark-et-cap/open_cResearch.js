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
            case 'coindesk':  researchCoinDesk();
                break;
            case 'coingecko':  researchCoinGecko();
                break;
            case 'coinmarketcap':  researchCoinMarketCap();
                break;
            case 'cryptonews':  researchCryptoNews();
                break;
            case 'cryptopanic': researchCryptoPanic();
                break;
            case 'defipulse':  researchDefiPulse();
                break;
            case 'glassnode': researchGlassNode();
                break;
            case 'lunarcrush': researchLunarCrush();
                break;
            case 'messari': researchMessari();
                break;
            case 'creddit':  researchCReddit();
                break;
            case 'ctradingview':  cresearchTradingView();
                break;
            case 'ctwitter':  cresearchTwitter();
                break;
            case 'cyahoofinance':  researchCYahoo();
                break;
        };
    });
};

function determineCResearch2() {
    chrome.storage.sync.get(["selectedCResearch2"], function(obj) {
        userCResearch = obj.selectedCResearch2;
        switch (userCResearch){
            case 'coindesk':  researchCoinDesk();
                break;
            case 'coingecko':  researchCoinGecko();
                break;
            case 'coinmarketcap':  researchCoinMarketCap();
                break;
            case 'cryptonews':  researchCryptoNews();
                break;
            case 'cryptopanic': researchCryptoPanic();
                break;
            case 'defipulse':  researchDefiPulse();
                break;
            case 'glassnode': researchGlassNode();
                break;
            case 'lunarcrush': researchLunarCrush();
                break;
            case 'messari': researchMessari();
                break;
            case 'creddit':  researchCReddit();
                break;
            case 'ctradingview':  cresearchTradingView();
                break;
            case 'ctwitter':  cresearchTwitter();
                break;
            case 'cyahoofinance':  researchCYahoo();
                break;
        };
    });
};

function determineCResearch3() {
    chrome.storage.sync.get(["selectedCResearch3"], function(obj) {
        userCResearch = obj.selectedCResearch3;
        switch (userCResearch){
            case 'coindesk':  researchCoinDesk();
                break;
            case 'coingecko':  researchCoinGecko();
                break;
            case 'coinmarketcap':  researchCoinMarketCap();
                break;
            case 'cryptonews':  researchCryptoNews();
                break;
            case 'cryptopanic': researchCryptoPanic();
                break;
            case 'defipulse':  researchDefiPulse();
                break;
            case 'glassnode': researchGlassNode();
                break;
            case 'lunarcrush': researchLunarCrush();
                break;
            case 'messari': researchMessari();
                break;
            case 'creddit':  researchCReddit();
                break;
            case 'ctradingview':  cresearchTradingView();
                break;
            case 'ctwitter':  cresearchTwitter();
                break;
            case 'cyahoofinance':  researchCYahoo();
                break;
        };
    });
};

//** UPDATE BELOW w/ function name/address, cryptoResearch symbol, etc **
//order of the recentInteraction function matters, messaging from recent_Symbol.js to get_Symbol.js
//using chrome.tabs.query (where tab[0].id is where the message will be sent) if the new tab is created
//as part of the below functions, the focusDomain is lost
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

function researchCryptoPanic() {
    recentInteraction(cryptoResearch);
    let cCryptoPanic = 'https://cryptopanic.com/news/' + cryptoResearch ;
    chrome.tabs.create({ url: cCryptoPanic });
};

function researchDefiPulse() {
    recentInteraction(cryptoResearch);
    firebaseDB.child("crypto").child(cryptoSymbol.toUpperCase()).once('value').then(function(snapshot) {
        if(snapshot.exists()) {
            let cryptoObj = snapshot.val();
            let cryptoTranslation = cryptoObj.ticker_url_translation;
            if (cryptoTranslation !== "") {
                let cDefiPulse = 'https://defipulse.com/projects/' + cryptoTranslation;
                chrome.tabs.create({ url: cDefiPulse });
            } else {
                let cDefiPulse = 'https://defipulse.com/projects/' + cryptoResearch.toLocaleLowerCase();
                chrome.tabs.create({ url: cDefiPulse });
            }
        } else {
            let cDefiPulse = 'https://defipulse.com/projects/' + cryptoResearch.toLocaleLowerCase();
            chrome.tabs.create({ url: cDefiPulse });
        }
    });
};

function researchGlassNode() {
    recentInteraction(cryptoResearch);
    let cGlassNode = 'https://studio.glassnode.com/metrics?a=' + cryptoResearch;
    chrome.tabs.create({ url: cGlassNode });
};

function researchLunarCrush() {
    recentInteraction(cryptoResearch);
    firebaseDB.child("crypto").child(cryptoSymbol.toUpperCase()).once('value').then(function(snapshot) {
        if(snapshot.exists()) {
            let cryptoObj = snapshot.val();
            let cryptoTranslation = cryptoObj.ticker_url_translation;
            if (cryptoTranslation !== "") {
                let cLunarCrush = 'https://lunarcrush.com/coins/' + cryptoResearch + '/' + cryptoTranslation;
                chrome.tabs.create({ url: cLunarCrush });
            } else {
                let cLunarCrush = 'https://lunarcrush.com/coins/' + cryptoResearch;
                chrome.tabs.create({ url: cLunarCrush });
            }
        } else {
            let cLunarCrush = 'https://lunarcrush.com/coins/' + cryptoResearch;
            chrome.tabs.create({ url: cLunarCrush });
        }
    });
};

function researchMessari() {
    recentInteraction(cryptoResearch);
    firebaseDB.child("crypto").child(cryptoSymbol.toUpperCase()).once('value').then(function(snapshot) {
        if(snapshot.exists()) {
            let cryptoObj = snapshot.val();
            let cryptoTranslation = cryptoObj.ticker_url_translation;
            if (cryptoTranslation !== "") {
                let cMessari  = 'https://messari.io/asset/' + cryptoTranslation;
                chrome.tabs.create({ url: cMessari });
            } else {
                let cMessari = 'https://messari.io/asset/' + cryptoTranslation;
                chrome.tabs.create({ url: cMessari });
            }
        } else {
            let cMessari = 'https://messari.io/asset/' + cryptoResearch;
            chrome.tabs.create({ url: cMessari });
        }
    });
};

function researchCReddit() {
    recentInteraction(cryptoResearch);
    let cReddit = 'https://www.reddit.com/search/?q=%24' + cryptoResearch;
    chrome.tabs.create({ url: cReddit });
};

function cresearchTradingView() {
    recentInteraction(cryptoResearch);
    let cTradingView = 'https://www.tradingview.com/symbols/CRYPTOCAP-' + cryptoResearch;
    chrome.tabs.create({ url: cTradingView });
};

function cresearchTwitter() {
    recentInteraction(cryptoResearch);
    let cTwitter = 'https://twitter.com/search?q=%24' + cryptoResearch + '&src=cashtag_click';
    chrome.tabs.create({ url: cTwitter });
};

function researchCYahoo() {
    recentInteraction(cryptoResearch);
    let cYahoo = 'https://finance.yahoo.com/quote/' + cryptoResearch + '-USD/';
    chrome.tabs.create({ url: cYahoo });
};
