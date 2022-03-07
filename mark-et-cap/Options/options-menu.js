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
})

