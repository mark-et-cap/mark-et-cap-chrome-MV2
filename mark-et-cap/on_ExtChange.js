let recentSymbols = [];
let recentSource = [];
let recentTimeStamp = [];
let userFavorites = [];
let userFavoritesTimeStamp = [];

//sets default option, user will not see errors when using for first time. 
function setDefaultOptions(){
    chrome.storage.sync.set({
            'selectedBrokerage': 'robinhood',
            'selectedBrokerageText': 'Robinhood',
            'selectedBrokerage2': 'stockN/A',
            'selectedBrokerageText2': 'N/A',
            'selectedBrokerage3': 'stockN/A',
            'selectedBrokerageText3': 'N/A',
            'selectedExchange': 'binance',
            'selectedExchangeText': 'Binance',
            'selectedExchange2': 'cryptoN/A',
            'selectedExchangeText2': 'N/A',
            'selectedExchange3': 'cryptoN/A',
            'selectedExchangeText3': 'N/A',
            'selectedSResearch': 'sresearchN/A',
            'selectedSResearchText': 'N/A',
            'selectedSResearch2': 'sresearchN/A',
            'selectedSResearchText2': 'N/A',
            'selectedSResearch3': 'sresearchN/A',
            'selectedSResearchText3': 'N/A',
            'selectedCResearch': 'cresearchN/A',
            'selectedCResearchText': 'N/A',
            'selectedCResearch2': 'cresearchN/A',
            'selectedCResearchText2': 'N/A',
            'selectedCResearch3': 'cresearchN/A',
            'selectedCResearchText3': 'N/A',
            'enableCopy': true,
            'enableOptions': true,
            'enableHoverChart': false, 
            'recentSymbols': recentSymbols,
            'recentSource': recentSource,
            'recentTimeStamp': recentTimeStamp,
            'selectedFavorites': userFavorites,
            'favoritesTimeStamp': userFavoritesTimeStamp
        });
    console.log(`Extension Installed: Default User Options Set`);

};

function refreshTabs() {
    chrome.tabs.query({windowType:'normal'}, function(tabs) {
        let contentjsfile = chrome.runtime.getManifest().content_scripts[0].js[0];
        for(let i = 0; i < tabs.length; i++) {
            let thisTab = tabs[i].url;
            let thisID  = tabs[i].id;
            chrome.tabs.update(thisID, {url: thisTab});
            if (! thisTab.match("chrome://*")) {
                chrome.tabs.executeScript(thisID, {
                    file: contentjsfile
                }, function() {});
            }
        };
    });
};

//Listen for install/update of extension
chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install") {
        setDefaultOptions();
        refreshTabs();
    } else if (details.reason == "update") {
        var thisVersion = chrome.runtime.getManifest().version;
        console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
        refreshTabs();
    } 
});
