let tradingViewWidgetsymbol = '';

chrome.runtime.onMessage.addListener(
    function(request, sender, callback) {
        if(request.message == "get_tradingView_Widget") {
            tradingViewWidgetsymbol = request.content;
            getNewWidget(tradingViewWidgetsymbol);
        } 
    }
);

function getNewWidget(tradingViewWidgetsymbol) {
    let widgetOutput = new TradingView.widget(
        {
        "width": 438,
        "height": 300,
        "symbol": tradingViewWidgetsymbol,
        "interval": "180",
        "timezone": "America/New_York",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "save_image": false,
        "container_id": "tradingview_5d618"
        }
    );

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            request: "tradingview_widget",
            content: widgetOutput.iframe.outerHTML
        }, function(){}
       );
   });
};
