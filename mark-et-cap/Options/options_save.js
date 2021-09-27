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
    enableOptions: options
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
      enableOptions: true
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
  });
};

document.addEventListener('DOMContentLoaded', restore_options);

window.onload = function () {
      document.getElementById('save').addEventListener('click', save_options);
};
