var optionsSymbol = '';

chrome.runtime.onMessage.addListener(
    function(request, sender, callback) {
        if(request.message == "get_symbol" || request.message == "get_selection") {
            optionsSymbol = request.content;
        } 
    }
);

/**
 Future state will add storage call here to obtain user-selected options webpages as they are supported
 */


function determineOptions() {
    recentInteraction(optionsSymbol);
    let unusualWhalesURL = 'https://www.unusualwhales.com/flow?limit=250&ticker_symbol=' + optionsSymbol ;
    chrome.tabs.create({ url: unusualWhalesURL });
};


function determineOptionsCalcCall() {
    recentInteraction(optionsSymbol);
    let OptionsCalcCallURL = 'https://optionstrat.com/build/long-call/' + optionsSymbol ;
    chrome.tabs.create({ url: OptionsCalcCallURL });
}


function determineOptionsCalcPut() {
    recentInteraction(optionsSymbol);
    let OptionsCalcPutURL = 'https://optionstrat.com/build/long-put/' + optionsSymbol ;
    chrome.tabs.create({ url: OptionsCalcPutURL });
};
