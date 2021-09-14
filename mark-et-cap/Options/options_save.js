function save_options() {
  let brokerage = document.getElementById('brokerage').value;
  let brokerageText = document.getElementById('brokerage').options[document.getElementById('brokerage').selectedIndex].text;
  let exchange = document.getElementById('exchange').value;
  let exchangeText = document.getElementById('exchange').options[document.getElementById('exchange').selectedIndex].text;
  let sResearch = document.getElementById('stockResearch').value;
  let sResearchText = document.getElementById('stockResearch').options[document.getElementById('stockResearch').selectedIndex].text;
  let cResearch = document.getElementById('cryptoResearch').value;
  let cResearchText = document.getElementById('cryptoResearch').options[document.getElementById('cryptoResearch').selectedIndex].text;
  let copy = document.getElementById('copy').checked;
  let options = document.getElementById('options').checked;
  chrome.storage.sync.set({
    selectedBrokerage: brokerage,
    selectedBrokerageText: brokerageText,
    selectedExchange: exchange,
    selectedExchangeText: exchangeText,
    selectedSResearch: sResearch,
    selectedSResearchText: sResearchText,
    selectedCResearch: cResearch,
    selectedCResearchText: cResearchText,
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
      selectedExchange: 'binance',
      selectedSResearch: 'sresearchN/A',
      selectedCResearch: 'cresearchN/A',
      enableCopy: true,
      enableOptions: true
  }, function(items) {
    document.getElementById('brokerage').value = items.selectedBrokerage;
    document.getElementById('exchange').value = items.selectedExchange;
    document.getElementById('stockResearch').value = items.selectedSResearch;
    document.getElementById('cryptoResearch').value = items.selectedCResearch
    document.getElementById('copy').checked = items.enableCopy;
    document.getElementById('options').checked = items.enableOptions; 
  });
};

document.addEventListener('DOMContentLoaded', restore_options);

window.onload = function () {
      document.getElementById('save').addEventListener('click', save_options);
};
