let chartSymbol = '';

chrome.runtime.onMessage.addListener(
    function(request, sender, callback) {
        if(request.message == "get_symbol" || request.message == "get_selection") {
            chartSymbol = request.content;
        } 
    }
);

function requestChartWidget() { 
    newWindowRequest = "get_tradingView_Widget_Popout"
    recentInteraction(chartSymbol);
    getNewWidget(chartSymbol, newWindowRequest);
};

function openChartWidget(tradingViewScript) {
    chrome.storage.sync.get([
        "widgetSettingWidth",
        "widgetSettingHeight"
    ], function(setting) {
        let userPopupWidthContainer = setting.widgetSettingWidth;
        let userPopupHeightContainer = setting.widgetSettingHeight;
        window.open(`${tradingViewScript}`, "TradingView Chart", `top=50px,left=50px,width=${userPopupWidthContainer}px,height=${userPopupHeightContainer}px,status=no,scrollbars=no,resizable=no,titlebar=no`);
    });
}

