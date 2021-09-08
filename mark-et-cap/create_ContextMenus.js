let stockUrls = [
    "*://*.twitter.com/*cashtag_click", 
    "*://*.marketwatch.com/investing/*",
    "*://*.barchart.com/stock*",
    "*://*.barchart.com/etfs*",
    "*://*.fool.com/*",
    "*://finance.yahoo.com/*",
    "*://*.zacks.com/stock/*",
    "*://*.zacks.com/funds/*",
    "*://*.finviz.com/*",
    "*://*.swaggystocks.com/*",
    "*://*.stocktwits.com/symbol/*",
    "*://*.benzinga.com/stock/*",
    "*://*.benzinga.com/quote/*",
    "*://*.reddit.com/*",
    "*://*.discord.com/*",
    "*://*.youtube.com/*",
     "*://*.unusualwhales.com/*"
];

let cryptoUrls = [
    "*://*.twitter.com/*cashtag_click", 
    "*://*.marketwatch.com/investing/*",
    "*://finance.yahoo.com/*",
    "*://*.coindesk.com/*",
    "*://*.cryptonews.com/*",
    "*://*.coingecko.com/*",
    "*://*.blockfolio.com/*",
    "*://*.defipulse.com/*",
    "*://*.gemini.com/*",
    "*://*.reddit.com/*",
    "*://*.discord.com/*",
    "*://*.youtube.com/*"
];

//creates copy, stock brokerage and crypto exchange context menu items
let createAllMenus = () => {
    //create the copy context menu 
    chrome.contextMenus.create({
        "id": 'copyMenu',
        "title": "Copy Symbol",
        "contexts": ["link"],
        "onclick": copySymbol,
        "targetUrlPatterns": [].concat(stockUrls, cryptoUrls)
    });

   //create stock parent menu
    chrome.contextMenus.create({
        "id": "stockParent",
        "title": "Stocks",
        "contexts": ["link"], 
        "targetUrlPatterns": stockUrls
    });

    //create crypto parent menu
    chrome.contextMenus.create({
        "id": "cryptoParent",
        "title": "Cryptocurrencies",
        "contexts": ["link"],
        "targetUrlPatterns": cryptoUrls
    });

    //create the stock/brokerage context menu child
    chrome.contextMenus.create({
        "id": "brokerageMenu",
        "title": "Open brokerage",
        "contexts": ["link"],
        "onclick": determineBrokerage,
        "targetUrlPatterns": stockUrls, 
        "parentId": "stockParent"
    });

    //create the crypto exchange context menu
    chrome.contextMenus.create({
        "id": "exchangeMenu",
        "title": "Open exchange",
        "contexts": ["link"],
        "onclick": determineExchange,
        "targetUrlPatterns": cryptoUrls, 
        "parentId": "cryptoParent"
    });

    chrome.contextMenus.create({
        "id": "sResearchMenu",
        "title": "Open stock research",
        "contexts": ["link"],
        "onclick": determineSResearch,
        "targetUrlPatterns": stockUrls, 
        "parentId": "stockParent"
    });

    chrome.contextMenus.create({
        "id": "cResearchMenu",
        "title": "Open crypto research",
        "contexts": ["link"],
        "onclick": determineCResearch,
        "targetUrlPatterns": cryptoUrls, 
        "parentId": "cryptoParent"
    });

    chrome.contextMenus.create({
        "id": "stockOptions",
        "title": "Options",
        "contexts": ["link"],
        "targetUrlPatterns": stockUrls, 
        "parentId": "stockParent"
    });

    chrome.contextMenus.create({
        "id": "sOptionsSite",
        "title": "Open Options Search",
        "contexts": ["link"],
        "onclick": determineOptions,
        "targetUrlPatterns": stockUrls, 
        "parentId": "stockOptions"
    });

    chrome.contextMenus.create({
        "id": "sOptionsCalcCall",
        "title": "Call Option",
        "contexts": ["link"],
        "onclick": determineOptionsCalcCall,
        "targetUrlPatterns": stockUrls, 
        "parentId": "stockOptions"
    });

    chrome.contextMenus.create({
        "id": "sOptionsCalcPut",
        "title": "Put Option",
        "contexts": ["link"],
        "onclick": determineOptionsCalcPut,
        "targetUrlPatterns": stockUrls, 
        "parentId": "stockOptions"
    });
    
    chrome.contextMenus.create({
        "id": "searchAll",
        "title": "Search all sites...",
        "contexts": ["link"],
        "onclick": allSitesSearch, 
        "targetUrlPatterns": [].concat(stockUrls, cryptoUrls)
    });
};

//Gets user preferences preferences and sends parameters to the createAllMenus function
window.onload = createAllMenus();




