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
    "*://*.youtube.com/*"
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

    //create the stock/brokerage context menu
    chrome.contextMenus.create({
        "id": "brokerageMenu",
        "title": "Open brokerage",
        "contexts": ["link"],
        "onclick": determineBrokerage,
        "targetUrlPatterns": stockUrls
    });

    //create the crypto exchange context menu
    chrome.contextMenus.create({
        "id": "exchangeMenu",
        "title": "Open exchange",
        "contexts": ["link"],
        "onclick": determineExchange,
        "targetUrlPatterns": cryptoUrls
    });

    chrome.contextMenus.create({
        "id": "sResearchMenu",
        "title": "Open stock research",
        "contexts": ["link"],
        "onclick": determineSResearch,
        "targetUrlPatterns": stockUrls
    });

    chrome.contextMenus.create({
        "id": "cResearchMenu",
        "title": "Open crypto research",
        "contexts": ["link"],
        "onclick": determineCResearch,
        "targetUrlPatterns": cryptoUrls
    });
};

//Gets user preferences preferences and sends parameters to the createAllMenus function
window.onload = createAllMenus();




