let tradingViewWidgetOn = document.getElementById("hover-chart");
let tradingViewConfig = document.getElementById("tradingview-widget-settings");

function startEventListener() {
    tradingViewWidgetOn.addEventListener("click", function(){
        if(tradingViewWidgetOn.checked == true) {
            tradingViewConfig.style.display = "inherit";
        } else {
            tradingViewConfig.style.display = "none";
        }
    });
};
 
function onloadWidgetSettings(){
    chrome.storage.sync.get(["enableHoverChart"], function(obj) {
        enabledHoverChart = obj.enableHoverChart;
        if(enabledHoverChart == false) {
            tradingViewConfig.style.display = "none"
        } else {
            tradingViewConfig.style.display = "inherit"
        } 
    });
};

window.addEventListener('DOMContentLoaded',  function(){
    onloadWidgetSettings();
    startEventListener();
    tempGetSavedOptions();
})

function tempGetSavedOptions() {
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
        let userWidgetChart = setting.enableHoverChart; 
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


        console.log(`userWidgetChart - ${userWidgetChart}`);
        console.log(`userWidgetWidth - ${userWidgetWidth}`);
        console.log(`userWidgetHeight - ${userWidgetHeight}`);
        console.log(`userWidgetInterval - ${userWidgetInterval}`);
        console.log(`userWidgetTimezone - ${userWidgetTimezone}`);
        console.log(`userWidgetTheme - ${userWidgetTheme}`);
        console.log(`userWidgetBar - ${userWidgetBar}`);
        console.log(`userWidgetDate - ${userWidgetDate}`);
        console.log(`userWidgetDrawing - ${userWidgetDrawing}`);
        console.log(`userWidgetDetails - ${userWidgetDetails}`);
        console.log(`userWidgetCalendar - ${userWidgetCalendar}`);
        console.log(`userWidgetPopup - ${userWidgetPopup}`);
        console.log(`userPopupWidth - ${userPopupWidth}`);
        console.log(`userPopupHeight - ${userPopupHeight}`);
    });
};
