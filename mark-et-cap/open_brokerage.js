let symbol = '';

chrome.runtime.onMessage.addListener(
    function(request, sender, callback) {
        if(request.message == "get_symbol" || request.message == "get_selection") {
            symbol = request.content;
        } 
    }
);

function determineBrokerage() {
    chrome.storage.sync.get(["selectedBrokerage"], function(obj) {
        userBrokerage = obj.selectedBrokerage;
        switch (userBrokerage){
            case "robinhood": browserRobinhood();
                break;
            case 'sofi': browserSofi();
                break;
            case 'webull': browserWebull();
                break;
            case 'tdameritrade': browserTDA();
                break;
            case 'etrade': browserEtrade();
                break;
            case 'charlesschwab': browserCharles();
                break;
            case 'merrilledge': browserMerrill();
                break;
            case 'fidelity': browserFidelity();
                break;
        };
    });
};

//order of the recentInteraction function matters, messaging from recent_Symbol.js to get_Symbol.js
//using chrome.tabs.query (where tab[0].id is where the message will be sent) if the new tab is created
//as part of the below functions, the focusDomain is lost
function browserRobinhood() {
    recentInteraction(symbol);
    const robinhoodURL = 'https://robinhood.com/stocks/' + symbol;
    chrome.tabs.create({ url: robinhoodURL });
};

function browserSofi() {
    recentInteraction(symbol);
    const sofiURL = 'https://www.sofi.com/wealth/app/stock/' + symbol;
    chrome.tabs.create({ url: sofiURL });
};

function browserWebull() {
    recentInteraction(symbol);
    firebaseDB.child("stock").child(symbol.toUpperCase()).once('value').then(function(snapshot) {
        if(snapshot.exists()) {
            let stockObj = snapshot.val();
            let stockExchange = stockObj.exchange;
            let webullURL = 'https://www.webull.com/quote/' + stockExchange + '-' + symbol.toLowerCase();
            chrome.tabs.create({ url: webullURL });
        } else {
            let webullURL = 'https://www.webull.com/quote/nysearca-' + symbol.toLowerCase();
            chrome.tabs.create({ url: webullURL });
        }
    });
};

function browserTDA() {
    recentInteraction(symbol);
    let tdaURL = 'https://invest.ameritrade.com/grid/p/site#r=jPage/https://research.ameritrade.com/grid/wwws/research/stocks/summary?c_name=invest_VENDOR&symbol=' + symbol;
    chrome.tabs.create({ url: tdaURL });
};

function browserEtrade() {
    recentInteraction(symbol);
    let etradeURL = 'https://www.etrade.wallst.com/v1/stocks/snapshot/snapshot.asp?ChallengeUrl=https://idp.etrade.com/idp/SSO.saml2&reinitiate-handshake=0&prospectnavyear=2011&AuthnContext=prospect&env=PRD&symbol=' + symbol;
    chrome.tabs.create({ url: etradeURL });
};

function browserCharles() {
    recentInteraction(symbol);
    let charlesURL = 'https://www.schwab.com/public/schwab/investing/investment_help/investment_research/stock_research/stocks.html?path=/research/public/stocks/summary/?symbol=' + symbol;
    chrome.tabs.create({ url: charlesURL });
};

function browserMerrill() {
    recentInteraction(symbol);
    let merrillURL = 'https://www.merrilledge.com/M/cse/TM/Pages/SearchResults.aspx?k=' + symbol + '&tab=global&filter=all';
    chrome.tabs.create({ url: merrillURL });
};

function browserFidelity() {
    recentInteraction(symbol);
    let fidelityURL = 'https://snapshot.fidelity.com/fidresearch/snapshot/landing.jhtml#/research?symbol=' + symbol;
    chrome.tabs.create({ url: fidelityURL });
};
