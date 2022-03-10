let tradingViewWidgetsymbol = '';

chrome.runtime.onMessage.addListener(
    function(request, sender, callback) {
        if(request.message == "get_tradingView_Widget") {
            tradingViewWidgetsymbol = request.content;
            requestType = request.message;
            getNewWidget(tradingViewWidgetsymbol, requestType);
        } 
    }
);

function getNewWidget(tradingViewWidgetsymbol, requestType) {
    chrome.storage.sync.get([
        "enableHoverChart",
        "widgetSettingWidth",
        "widgetSettingHeight",
        "widgetSettingInterval",
        "widgetSettingTimezone",
        "widgetSettingTheme",
        "widgetSettingBar",
        "widgetSettingDate",
        "widgetSettingDrawing",
        "widgetSettingDetails",
        "widgetSettingCalendar",
        "widgetSettingPopup",
        "widgetPopupWidth",
        "widgetPopupHeight"
    ], function(setting) {
        let userWidgetWidth = setting.widgetSettingWidth;
        let userWidgetHeight = setting.widgetSettingHeight;
        let userWidgetInterval = setting.widgetSettingInterval;
        let userWidgetTimezone = setting.widgetSettingTimezone;
        let userWidgetTheme = setting.widgetSettingTheme;
        let userWidgetBar = setting.widgetSettingBar; 
        let userWidgetDate = setting.widgetSettingDate;
        let userWidgetDrawing = setting.widgetSettingDrawing;
        let userWidgetDetails = setting.widgetSettingDetails;
        let userWidgetCalendar = setting.widgetSettingCalendar;
        let userWidgetPopup = setting.widgetSettingPopup;
        let userPopupWidth = setting.widgetPopupWidth;
        let userPopupHeight = setting.widgetPopupHeight;
    
    let widgetOutput = new TradingView.widget(
        {
        "width": userWidgetWidth,
        "height": userWidgetHeight,
        "symbol": tradingViewWidgetsymbol, 
        "interval": userWidgetInterval,
        "timezone": userWidgetTimezone,
        "theme": userWidgetTheme,
        "style": userWidgetBar,
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "withdateranges": userWidgetDate,
        "enable_publishing": true,
        "hide_legend": true,
        "hide_side_toolbar": !userWidgetDrawing,
        "details": userWidgetDetails,
        "allow_symbol_change": true,
        "calendar": userWidgetCalendar,
        "show_popup_button":userWidgetPopup,
        "popup_width": userPopupWidth,
        "popup_height": userPopupHeight,
        "container_id": "tradingview_5d618"
        }
    );
    
    if (requestType == "get_tradingView_Widget") { 
        recentInteraction(chartSymbol);
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                request: "tradingview_widget",
                content: widgetOutput.iframe.outerHTML
            }, function(){}
            );
        });
    } else {
        openChartWidget(widgetOutput.iframe.src)
    }
    });
};

