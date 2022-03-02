function save_options() {
  let brokerage = document.getElementById('brokerage').value;
  let brokerageText = document.getElementById('brokerage').options[document.getElementById('brokerage').selectedIndex].text;
  let brokerage2 = document.getElementById('brokerage2').value;
  let brokerageText2 = document.getElementById('brokerage2').options[document.getElementById('brokerage2').selectedIndex].text;
  let brokerage3 = document.getElementById('brokerage3').value;
  let brokerageText3 = document.getElementById('brokerage3').options[document.getElementById('brokerage3').selectedIndex].text;
  let exchange = document.getElementById('exchange').value;
  let exchangeText = document.getElementById('exchange').options[document.getElementById('exchange').selectedIndex].text;
  let exchange2 = document.getElementById('exchange2').value;
  let exchangeText2 = document.getElementById('exchange2').options[document.getElementById('exchange2').selectedIndex].text;
  let exchange3 = document.getElementById('exchange3').value;
  let exchangeText3 = document.getElementById('exchange3').options[document.getElementById('exchange3').selectedIndex].text;
  let sResearch = document.getElementById('stockResearch').value;
  let sResearchText = document.getElementById('stockResearch').options[document.getElementById('stockResearch').selectedIndex].text;
  let sResearch2 = document.getElementById('stockResearch2').value;
  let sResearchText2 = document.getElementById('stockResearch2').options[document.getElementById('stockResearch2').selectedIndex].text;
  let sResearch3 = document.getElementById('stockResearch3').value;
  let sResearchText3 = document.getElementById('stockResearch3').options[document.getElementById('stockResearch3').selectedIndex].text;
  let cResearch = document.getElementById('cryptoResearch').value;
  let cResearchText = document.getElementById('cryptoResearch').options[document.getElementById('cryptoResearch').selectedIndex].text;
  let cResearch2 = document.getElementById('cryptoResearch2').value;
  let cResearchText2 = document.getElementById('cryptoResearch2').options[document.getElementById('cryptoResearch2').selectedIndex].text;
  let cResearch3 = document.getElementById('cryptoResearch3').value;
  let cResearchText3 = document.getElementById('cryptoResearch3').options[document.getElementById('cryptoResearch3').selectedIndex].text;
  let copy = document.getElementById('copy').checked;
  let options = document.getElementById('options').checked;
  let hoverChart = document.getElementById('hover-chart').checked;
  let widgetWidth = document.getElementById('widget-width').value;
  let widgetHeight = document.getElementById('widget-height').value;
  let widgetInterval = document.getElementById('widget-interval').value;
  let widgetTimezone = document.getElementById('widget-timezone').value;
  let widgetTheme = document.getElementById('widget-theme').value;
  let widgetBar = document.getElementById('widget-bar').value;
  let widgetDate = document.getElementById('widget-daterange').checked;
  let widgetDrawing = document.getElementById('widget-drawingtools').checked;
  let widgetDetails = document.getElementById('widget-details').checked;
  let widgetCalendar = document.getElementById('widget-calendar').checked;
  let widgetPopup = document.getElementById('widget-popup').checked;
  let popupWidth = document.getElementById('popup-width').value;
  let popupHeight = document.getElementById('popup-height').value;
  chrome.storage.sync.set({
    selectedBrokerage: brokerage,
    selectedBrokerageText: brokerageText,
    selectedBrokerage2: brokerage2,
    selectedBrokerageText2: brokerageText2,
    selectedBrokerage3: brokerage3,
    selectedBrokerageText3: brokerageText3,
    selectedExchange: exchange,
    selectedExchangeText: exchangeText,
    selectedExchange2: exchange2,
    selectedExchangeText2: exchangeText2,
    selectedExchange3: exchange3,
    selectedExchangeText3: exchangeText3,
    selectedSResearch: sResearch,
    selectedSResearchText: sResearchText,
    selectedSResearch2: sResearch2,
    selectedSResearchText2: sResearchText2,
    selectedSResearch3: sResearch3,
    selectedSResearchText3: sResearchText3,
    selectedCResearch: cResearch,
    selectedCResearchText: cResearchText,
    selectedCResearch2: cResearch2,
    selectedCResearchText2: cResearchText2,
    selectedCResearch3: cResearch3,
    selectedCResearchText3: cResearchText3,
    enableCopy: copy,
    enableOptions: options, 
    enableHoverChart: hoverChart,
    widgetSettingWidth: widgetWidth,
    widgetSettingHeight: widgetHeight,
    widgetSettingInterval: widgetInterval,
    widgetSettingTimezone: widgetTimezone,
    widgetSettingTheme: widgetTheme,
    widgetSettingBar: widgetBar,
    widgetSettingDate: widgetDate,
    widgetSettingDrawing: widgetDrawing,
    widgetSettingDetails: widgetDetails,
    widgetSettingCalendar: widgetCalendar,
    widgetSettingPopup: widgetPopup,
    widgetPopupWidth: popupWidth,
    widgetPopupHeight: popupHeight
  }, function() {
    let status = document.getElementById('status');
    status.textContent = 'Selections saved successfully';
    setTimeout(function() {
      status.textContent = '';
    }, 1500);
    window.close()
  });
};

function restore_options() {
  chrome.storage.sync.get({
      selectedBrokerage: 'robinhood',
      selectedBrokerage2: 'stockN/A',
      selectedBrokerage3: 'stockN/A',
      selectedExchange: 'binance',
      selectedExchange2: 'cryptoN/A',
      selectedExchange3: 'cryptoN/A',
      selectedSResearch: 'sresearchN/A',
      selectedSResearch2: 'sresearchN/A',
      selectedSResearch3: 'sresearchN/A',
      selectedCResearch: 'cresearchN/A',
      selectedCResearch2: 'cresearchN/A',
      selectedCResearch3: 'cresearchN/A',
      enableCopy: true,
      enableOptions: true,
      enableHoverChart: false, 
      widgetSettingWidth: 550,
      widgetSettingHeight: 375,
      widgetSettingInterval: 15 ,
      widgetSettingTimezone: 'America/New_York',
      widgetSettingTheme: 'light',
      widgetSettingBar : 1,
      widgetSettingDate: true,
      widgetSettingDrawing: true,
      widgetSettingDetails: true,
      widgetSettingCalendar: false,
      widgetSettingPopup: true,
      widgetPopupWidth: 1000,
      widgetPopupHeight: 650
  }, function(items) {
    document.getElementById('brokerage').value = items.selectedBrokerage;
    document.getElementById('brokerage2').value = items.selectedBrokerage2;
    document.getElementById('brokerage3').value = items.selectedBrokerage3;
    document.getElementById('exchange').value = items.selectedExchange;
    document.getElementById('exchange2').value = items.selectedExchange2;
    document.getElementById('exchange3').value = items.selectedExchange3;
    document.getElementById('stockResearch').value = items.selectedSResearch;
    document.getElementById('stockResearch2').value = items.selectedSResearch2;
    document.getElementById('stockResearch3').value = items.selectedSResearch3;
    document.getElementById('cryptoResearch').value = items.selectedCResearch;
    document.getElementById('cryptoResearch2').value = items.selectedCResearch2;
    document.getElementById('cryptoResearch3').value = items.selectedCResearch3;
    document.getElementById('copy').checked = items.enableCopy;
    document.getElementById('options').checked = items.enableOptions;
    document.getElementById('hover-chart').checked = items.enableHoverChart; 
    document.getElementById('widget-width').value = items.widgetSettingWidth;
    document.getElementById('widget-height').value = items.widgetSettingHeight;
    document.getElementById('widget-interval').value = items.widgetSettingInterval;
    document.getElementById('widget-timezone').value = items.widgetSettingTimezone;
    document.getElementById('widget-theme').value = items.widgetSettingTheme;
    document.getElementById('widget-bar').value= items.widgetSettingBar; 
    document.getElementById('widget-daterange').checked = items.widgetSettingDate;
    document.getElementById('widget-drawingtools').checked = items.widgetSettingDrawing;
    document.getElementById('widget-details').checked = items.widgetSettingDetails;
    document.getElementById('widget-calendar').checked = items.widgetSettingCalendar;
    document.getElementById('widget-popup').checked = items.widgetSettingPopup;
    document.getElementById('popup-width').value = items.widgetPopupWidth;
    document.getElementById('popup-height').value = items.widgetPopupHeight;
  });
};

document.addEventListener('DOMContentLoaded', restore_options);

window.onload = function () {
  document.getElementById('save').addEventListener('click', save_options);
};
