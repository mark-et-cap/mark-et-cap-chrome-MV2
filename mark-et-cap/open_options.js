var optionsSymbol = '';

chrome.runtime.onMessage.addListener(
    function(request, sender, callback) {
        if(request.message == "get_symbol" || request.message == "get_selection") {
            optionsSymbol = request.content;
        } 
    }
);

function determineOptions() {
    chrome.storage.sync.get(["selectedOptions"], function(obj) {
        userOptions = obj.selectedOptions;
        switch (userOptions){
            case 'optbarchart': optionsBarchart();
                break;
            case 'optmarketchameleon': optionsChameleon();
                break;
            case 'optoptionvisualizer': optionsVisualizer();
                break;
            case 'optoptionistics': optionsOptionistics();
                break;
            case 'optTDA': optionsTDA();
                break;
            case 'optunusualwhales': optionsUW();
                break;
            case 'optyahoofinance': optionsYahoo();
                break;
        };
    });
};

function optionsBarchart() {
    recentInteraction(optionsSymbol);
    let optBarchartURL = 'https://www.barchart.com/stocks/quotes/' + optionsSymbol + '/options';
    chrome.tabs.create({ url: optBarchartURL });
};

function optionsChameleon() {
    recentInteraction(optionsSymbol);
    let optChameleonURL = 'https://marketchameleon.com/Overview/' + optionsSymbol + '/OptionChain/';
    chrome.tabs.create({ url: optChameleonURL });
};

function optionsVisualizer() {
    recentInteraction(optionsSymbol);
    let optVisualizerURL = 'https://www.optionvisualizer.com/ticker/' + optionsSymbol;
    chrome.tabs.create({ url: optVisualizerURL });
};

function optionsOptionistics() {
    recentInteraction(optionsSymbol);
    let optOptionisticsURL = 'https://www.optionistics.com/quotes/stock-quotes/' + optionsSymbol;
    chrome.tabs.create({ url: optOptionisticsURL });
};

function optionsTDA() {
    recentInteraction(optionsSymbol);
    let optTDAURL = 'https://invest.ameritrade.com/cgi-bin/apps/u/OptionChain?symbol=' + optionsSymbol + '&leg=symbol&type=CP&range=N&expire=A' ;
    chrome.tabs.create({ url: optTDAURL });
};

function optionsUW() {
    recentInteraction(optionsSymbol);
    let unusualWhalesURL = 'https://www.unusualwhales.com/flow?limit=250&ticker_symbol=' + optionsSymbol ;
    chrome.tabs.create({ url: unusualWhalesURL });
};

function optionsYahoo() {
    recentInteraction(optionsSymbol);
    let optyahooURL = 'https://finance.yahoo.com/quote/' + optionsSymbol + '/options?p=' + optionsSymbol;
    chrome.tabs.create({ url: optyahooURL });
};


function determineOptionsCalcCall() {
    recentInteraction(optionsSymbol);
    let OptionsCalcCallURL = 'https://optionstrat.com/build/long-call/' + optionsSymbol ;
    chrome.tabs.create({ url: OptionsCalcCallURL });
};


function determineOptionsCalcPut() {
    recentInteraction(optionsSymbol);
    let OptionsCalcPutURL = 'https://optionstrat.com/build/long-put/' + optionsSymbol ;
    chrome.tabs.create({ url: OptionsCalcPutURL });
};
