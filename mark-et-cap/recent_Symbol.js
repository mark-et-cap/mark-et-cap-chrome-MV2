//gets recently interacted with tickers and saves them to display in popup
function saveSource(source) {
    chrome.storage.sync.get([
        "recentSource"
    ], function(obj) {
        let userRecentSource = obj.recentSource;
        userRecentSource.unshift(source);
        if (userRecentSource.length > 16) {
            userRecentSource.length = 16;
        }
        chrome.storage.sync.set({
            'recentSource': userRecentSource,
        })
    })
};

function recentInteraction(symbol) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {request: "get_recent_domain"}, function(response){
            if(response.domain.includes("www.")) {
                let recentSource = response.domain.substr(4,)
                saveSource(recentSource);
            } else {
                let recentSource = response.domain;
                saveSource(recentSource);
            }
       });
   });
    chrome.storage.sync.get([
        "recentSymbols",
        "recentTimeStamp"
    ], function(obj) {
        let userRecentSymbols = obj.recentSymbols;
        let userRecentTimeStamp = obj.recentTimeStamp;
        if ((userRecentSymbols !== '' && userRecentTimeStamp !== '') || symbol !== undefined) {
            symbol = symbol ?? "ERR"
            if(symbol !== "ERR") {
                let formatSymbol = symbol.toUpperCase();
                let newTimeStamp = new Date();
                userRecentSymbols.unshift(formatSymbol);
                userRecentTimeStamp.unshift(newTimeStamp.toLocaleString([], {year: '2-digit', month: '2-digit', day: 'numeric', hour: '2-digit', minute: '2-digit'}));
                if (userRecentSymbols.length > 16) {
                    userRecentSymbols.length = 16;
                    userRecentTimeStamp.length = 16;
                };
                chrome.storage.sync.set({
                    'recentSymbols': userRecentSymbols,
                    'recentTimeStamp': userRecentTimeStamp
                })
            };
        }
    });
};
