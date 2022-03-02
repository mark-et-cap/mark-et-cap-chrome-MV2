let tradingViewWidgetsymbol = '';

chrome.runtime.onMessage.addListener(
    function(request, sender, callback) {
        if(request.message == "get_tradingView_Widget") {
            tradingViewWidgetsymbol = request.content;
            getNewWidget(tradingViewWidgetsymbol);
            console.log("hellooooooo");
        } 
    }
);

function getNewWidget(tradingViewWidgetsymbol) {
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

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            request: "tradingview_widget",
            content: widgetOutput.iframe.outerHTML
        }, function(){}
       );
   });
    });
};

/**
 <!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container">
  <div id="tradingview_278f6"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener" target="_blank"><span class="blue-text">AAPL Chart</span></a> by TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
  <script type="text/javascript">
  new TradingView.widget(
  {
  "width": 550, // Yes
  "height": 375, // Yes
  "symbol": "NASDAQ:AAPL", // No
  "interval": "15", // Yes
  "timezone": "America/New_York", // Yes
  "theme": "light", // Yes
  "style": "1", // Yes
  "locale": "en", // No
  "toolbar_bg": "#f1f3f6",
  "enable_publishing": true, //no
  "withdateranges": true, // Yes (on/off)
  "hide_side_toolbar": false, // Yes (on/off)
  "allow_symbol_change": true, // No
  "details": true, // Yes (on/off)
  "hotlist": true, // No
  "calendar": true, // Yes
  "show_popup_button": true, // Yes
  "popup_width": "1000", 
  "popup_height": "650",
  "container_id": "tradingview_278f6"
}
  );
  </script>
</div>
<!-- TradingView Widget END -->

 */