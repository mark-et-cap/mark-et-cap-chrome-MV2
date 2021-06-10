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
            'selectedExchange': 'binance',
            'selectedExchangeText': 'Binance',
            'selectedSResearch': 'sresearchN/A',
            'selectedSResearchText': 'N/A',
            'selectedCResearch': 'cresearchN/A',
            'selectedCResearchText': 'N/A',
            'enableCopy': true,
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
