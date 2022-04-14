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
            case 'allyinvest': browserAlly();
                break;
            case 'charlesschwab': browserCharles();
                break;
            case 'etrade': browserEtrade();
                break;
            case 'fidelity': browserFidelity();
                break;
            case 'firstrade': browserFirstTrade();
                break;
            case 'merrilledge': browserMerrill();
                break;
            case 'moomoo': browserMooMoo();
                break;
            case 'passfolio': browserPassfolio();
                break;
            case 'public': browserPublic();
                break;
            case "robinhood": browserRobinhood();
                break;
            case 'sofi': browserSofi();
                break;
            case 'tdameritrade': browserTDA();
                break;
            case 'tradestation': browserTradeStation();
                break;
            case 'vanguard': browserVanguard();
                break;
            case 'webull': browserWebull();
                break;
        };
    });
};

function determineBrokerage2() {
    chrome.storage.sync.get(["selectedBrokerage2"], function(obj) {
        userBrokerage = obj.selectedBrokerage2;
        switch (userBrokerage){
            case 'allyinvest': browserAlly();
                break;
            case 'charlesschwab': browserCharles();
                break;
            case 'etrade': browserEtrade();
                break;
            case 'fidelity': browserFidelity();
                break;
            case 'firstrade': browserFirstTrade();
                break;
            case 'merrilledge': browserMerrill();
                break;
            case 'moomoo': browserMooMoo();
                break;
            case 'passfolio': browserPassfolio();
                break;
            case 'public': browserPublic();
                break;
            case "robinhood": browserRobinhood();
                break;
            case 'sofi': browserSofi();
                break;
            case 'tdameritrade': browserTDA();
                break;
            case 'tradestation': browserTradeStation();
                break;
            case 'vanguard': browserVanguard();
                break;
            case 'webull': browserWebull();
                break;
        };
    });
};

function determineBrokerage3() {
    chrome.storage.sync.get(["selectedBrokerage3"], function(obj) {
        userBrokerage = obj.selectedBrokerage3;
        switch (userBrokerage){
            case 'allyinvest': browserAlly();
                break;
            case 'charlesschwab': browserCharles();
                break;
            case 'etrade': browserEtrade();
                break;
            case 'fidelity': browserFidelity();
                break;
            case 'firstrade': browserFirstTrade();
                break;
            case 'merrilledge': browserMerrill();
                break;
            case 'moomoo': browserMooMoo();
                break;
            case 'passfolio': browserPassfolio();
                break;
            case 'public': browserPublic();
                break;
            case "robinhood": browserRobinhood();
                break;
            case 'sofi': browserSofi();
                break;
            case 'tdameritrade': browserTDA();
                break;
            case 'tradestation': browserTradeStation();
                break;
            case 'vanguard': browserVanguard();
                break;
            case 'webull': browserWebull();
                break;
        };
    });
};
//order of the recentInteraction function matters, messaging from recent_Symbol.js to get_Symbol.js
//using chrome.tabs.query (where tab[0].id is where the message will be sent) if the new tab is created
//as part of the below functions, the focusDomain is lost
function browserAlly() {
    recentInteraction(symbol);
    const allyURL = 'https://live.invest.ally.com/research/stocks/' + symbol + '/overview';
    chrome.tabs.create({ url: allyURL });
}

function browserCharles() {
    recentInteraction(symbol);
    let charlesURL = 'https://www.schwab.com/research/stocks/quotes/summary/' + symbol;
    chrome.tabs.create({ url: charlesURL });
};

function browserEtrade() {
    recentInteraction(symbol);
    let etradeURL = 'https://www.etrade.wallst.com/v1/stocks/snapshot/snapshot.asp?ChallengeUrl=https://idp.etrade.com/idp/SSO.saml2&reinitiate-handshake=0&prospectnavyear=2011&AuthnContext=prospect&env=PRD&symbol=' + symbol;
    chrome.tabs.create({ url: etradeURL });
};

function browserFidelity() {
    recentInteraction(symbol);
    let fidelityURL = 'https://snapshot.fidelity.com/fidresearch/snapshot/landing.jhtml#/research?symbol=' + symbol;
    chrome.tabs.create({ url: fidelityURL });
};

function browserFirstTrade() {
    recentInteraction(symbol);
    let firstradeURL = 'https://www.firstrade.com/content/en-us/researchtools/research?ticker=' + symbol;
    chrome.tabs.create({ url: firstradeURL });
};

function browserMerrill() {
    recentInteraction(symbol);
    let merrillURL = 'https://www.merrilledge.com/M/cse/TM/Pages/SearchResults.aspx?k=' + symbol + '&tab=global&filter=all';
    chrome.tabs.create({ url: merrillURL });
};

function browserMooMoo() {
    recentInteraction(symbol);
    const moomooURL = 'https://www.moomoo.com/stock/' + symbol + '-US';
    chrome.tabs.create({ url: moomooURL });
}

function browserPassfolio() {
    recentInteraction(symbol);
    const passfolioURL = 'https://web.passfolio.com/app/discover/stock/' + symbol;
    chrome.tabs.create({ url: passfolioURL });
}

function browserPublic() {
    recentInteraction(symbol);
    const publicURL = 'https://public.com/stocks/' + symbol;
    chrome.tabs.create({ url: publicURL });
}

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

function browserTDA() {
    recentInteraction(symbol);
    let tdaURL = 'https://invest.ameritrade.com/grid/p/site#r=jPage/https://research.ameritrade.com/grid/wwws/research/stocks/summary?c_name=invest_VENDOR&symbol=' + symbol;
    chrome.tabs.create({ url: tdaURL });
};

function browserTradeStation() {
    recentInteraction(symbol);
    const tradestationURL = 'https://www.tradestation.com/research/stocks/' + symbol;
    chrome.tabs.create({ url: tradestationURL });
};

function browserVanguard() {
    recentInteraction(symbol);
    const vanguardURL = 'https://personal.vanguard.com/us/secfunds/stocks/snapshot?Ticker=' + symbol;
    chrome.tabs.create({ url: vanguardURL });
}

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







