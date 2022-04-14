let stockResearch = '';

chrome.runtime.onMessage.addListener(
    function(request, sender, callback) {
        if(request.message == "get_symbol" || request.message == "get_selection") {
            stockResearch = request.content;
        } 
    }
);

function determineSResearch() {
    chrome.storage.sync.get(["selectedSResearch"], function(obj) {
        userResearch = obj.selectedSResearch;
        switch (userResearch){
            case 'barchart':  researchBarchart();
                break;
            case 'benzinga':  researchBenzinga();
                break;
            case 'cmlviz': researchCML();
                break;
            case 'edgar': researchEdgar();
                break;
            case 'finviz':  researchfinviz();
                break;
            case 'marketwatch':  researchMarketWatch();
                break;
            case 'nasdaq': researchNasdaq();
                break;
            case 'nyse': researchNYSE();
                break;
            case 'otc': researchOTC();
                break;
            case 'sreddit':  researchReddit();
                break;
            case 'stocktwits':  researchStocktwits();
                break;
            case 'swaggystocks':  researchSwaggy();
                break;
            case 'motleyfool':  researchMotley();
                break;
            case 'tradingview':  researchTradingView();
                break;
            case 'stwitter':  researchTwitter();
                break;
            case 'unusualwhales':  researchUnusualWhales();
                break;
            case 'yahoofinance':  researchYahoo();
                break;
            case 'zackscom':  researchZacks();
                break;
        };
    });
};

function determineSResearch2() {
    chrome.storage.sync.get(["selectedSResearch2"], function(obj) {
        userResearch = obj.selectedSResearch2;
        switch (userResearch){
            case 'barchart':  researchBarchart();
                break;
            case 'benzinga':  researchBenzinga();
                break;
            case 'cmlviz': researchCML();
                break;
            case 'edgar': researchEdgar();
                break;
            case 'finviz':  researchfinviz();
                break;
            case 'marketwatch':  researchMarketWatch();
                break;
            case 'nasdaq': researchNasdaq();
                break;
            case 'nyse': researchNYSE();
                break;
            case 'otc': researchOTC();
                break;
            case 'sreddit':  researchReddit();
                break;
            case 'stocktwits':  researchStocktwits();
                break;
            case 'swaggystocks':  researchSwaggy();
                break;
            case 'motleyfool':  researchMotley();
                break;
            case 'tradingview':  researchTradingView();
                break;
            case 'stwitter':  researchTwitter();
                break;
            case 'unusualwhales':  researchUnusualWhales();
                break;
            case 'yahoofinance':  researchYahoo();
                break;
            case 'zackscom':  researchZacks();
                break;
        };
    });
};

function determineSResearch3() {
    chrome.storage.sync.get(["selectedSResearch3"], function(obj) {
        userResearch = obj.selectedSResearch3;
        switch (userResearch){
            case 'barchart':  researchBarchart();
                break;
            case 'benzinga':  researchBenzinga();
                break;
            case 'cmlviz': researchCML();
                break;
            case 'edgar': researchEdgar();
                break;
            case 'finviz':  researchfinviz();
                break;
            case 'marketwatch':  researchMarketWatch();
                break;
            case 'nasdaq': researchNasdaq();
                break;
            case 'nyse': researchNYSE();
                break;
            case 'otc': researchOTC();
                break;
            case 'sreddit':  researchReddit();
                break;
            case 'stocktwits':  researchStocktwits();
                break;
            case 'swaggystocks':  researchSwaggy();
                break;
            case 'motleyfool':  researchMotley();
                break;
            case 'tradingview':  researchTradingView();
                break;
            case 'stwitter':  researchTwitter();
                break;
            case 'unusualwhales':  researchUnusualWhales();
                break;
            case 'yahoofinance':  researchYahoo();
                break;
            case 'zackscom':  researchZacks();
                break;
        };
    });
};

/** To add new site, UPDATE BELOW w/ function name/url, stockResearch symbol, etc */
//order of the recentInteraction function matters, messaging from recent_Symbol.js to get_Symbol.js
//using chrome.tabs.query (where tab[0].id is where the message will be sent) if the new tab is created
//as part of the below functions, the focusDomain is lost

function researchBarchart() {
    recentInteraction(stockResearch);
    let rBarchart = 'https://www.barchart.com/stocks/quotes/' + stockResearch;
    chrome.tabs.create({ url: rBarchart });
};

function researchBenzinga() {
    recentInteraction(stockResearch);
    let rBenzinga = 'https://www.benzinga.com/stock/' + stockResearch;
    chrome.tabs.create({ url: rBenzinga});
};

function researchCML() {
    recentInteraction(stockResearch);
    let rCML = 'https://www.cmlviz.com/stocks/' + stockResearch;
    chrome.tabs.create({ url: rCML });
};

function researchEdgar() {
    recentInteraction(stockResearch);
    let rEdgar = 'https://www.sec.gov/edgar/search/#/entityName=' + stockResearch;
    chrome.tabs.create({ url: rEdgar });
};

function researchfinviz() {
    recentInteraction(stockResearch);
    let rFinviz = 'https://finviz.com/quote.ashx?t=' + stockResearch;
    chrome.tabs.create({ url: rFinviz });
};

function researchMarketWatch() {
    recentInteraction(stockResearch);
    let rMarketWatch = 'https://www.marketwatch.com/investing/stock/' + stockResearch;
    chrome.tabs.create({ url: rMarketWatch });
};

function researchNasdaq() {
    recentInteraction(stockResearch);
    let rNasdaq = 'https://www.nasdaq.com/market-activity/stocks/' + stockResearch;
    chrome.tabs.create({ url: rNasdaq });
};

function researchNYSE() {
    recentInteraction(stockResearch);
    let rNYSE = 'https://www.nyse.com/quote/' + stockResearch.toUpperCase();
    chrome.tabs.create({ url: rNYSE });
};

function researchOTC() {
    recentInteraction(stockResearch);
    let rOTC = 'https://www.otcmarkets.com/stock/' + stockResearch.toUpperCase() + '/overview';
    chrome.tabs.create({ url: rOTC });
};

function researchReddit() {
    recentInteraction(stockResearch);
    let rReddit = 'https://www.reddit.com/r/MillennialBets/wiki/index/stocks/' + stockResearch;
    chrome.tabs.create({ url: rReddit });
};

function researchStocktwits() {
    recentInteraction(stockResearch);
    let rStocktwits = 'https://stocktwits.com/symbol/' + stockResearch;
    chrome.tabs.create({ url: rStocktwits });
};

function researchSwaggy() {
    recentInteraction(stockResearch);
    let rSwaggy = 'https://swaggystocks.com/dashboard/stocks/' + stockResearch;
    chrome.tabs.create({ url: rSwaggy });
};

function researchMotley() {
    recentInteraction(stockResearch);
    firebaseDB.child("stock").child(symbol.toUpperCase()).once('value').then(function(snapshot) {
        if(snapshot.exists()) {
            let stockObj = snapshot.val();
            let stockExchange = stockObj.exchange;
            let rMotley = 'https://www.fool.com/quote/' + stockExchange + '/*/' + stockResearch;
            chrome.tabs.create({ url: rMotley });
        } else {
            let rMotley = 'https://www.fool.com/quote/nysemkt/*/' + stockResearch;
            chrome.tabs.create({ url: rMotley });
        }
    });
};

function researchTradingView() {
    recentInteraction(stockResearch);
    let rTradingView = 'https://www.tradingview.com/symbols/' + stockResearch;
    chrome.tabs.create({ url: rTradingView });
};

function researchTwitter() {
    recentInteraction(stockResearch);
    let rTwitter = 'https://twitter.com/search?q=%24' + stockResearch + '&src=cashtag_click';
    chrome.tabs.create({ url: rTwitter });
};

function researchUnusualWhales() {
    recentInteraction(stockResearch);
    let rUnusualWhales = 'https://unusualwhales.com/company/' + stockResearch + '/alerts';
    chrome.tabs.create({ url: rUnusualWhales });
};

function researchYahoo() {
    recentInteraction(stockResearch);
    let rYahoo = 'https://finance.yahoo.com/quote/' + stockResearch;
    chrome.tabs.create({ url: rYahoo });
};

function researchZacks() {
    recentInteraction(stockResearch);
    let rZacks = 'https://www.zacks.com/stock/quote/' + stockResearch;
    chrome.tabs.create({ url: rZacks });
};











 




