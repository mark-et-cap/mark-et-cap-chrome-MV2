const app = firebase.initializeApp({
    apiKey: "AIzaSyCSTr2zVJXzCPypFlqBY8MU34zbSaTBoUU",
    authDomain: "mark-et-cap.firebaseapp.com",
    databaseURL: "https://mark-et-cap-default-rtdb.firebaseio.com",
    projectId: "mark-et-cap",
    storageBucket: "mark-et-cap.appspot.com",
    messagingSenderId: "559535551754",
    appId: "1:559535551754:web:43cbcb121e8d1bb15cb6f3",
    measurementId: "G-K1WCZVSTWH"
});

const firebaseDB = app.database().ref();
const auth = firebase.auth();

//Anonymous authentication
auth.signInAnonymously().then(() => {
  console.log("user authentication: Anonymous");
}).catch((error) => {
  let errorCode = error.code;
  let errorMessage = error.message;
  console.log(`Error encountered with anonymous authentication: Error Code: ${errorCode} - ${errorMessage}`);
});

//listens for messages from content script (get_symbol.js) and popup (mec-user-options.js)
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message == "find_crypto_ticker") {
      let cryptoName = request.content;
      firebaseDB.child('crypto').orderByChild('ticker_url_translation').equalTo(cryptoName).on('value', function(snapshot){
        if(snapshot.exists()) {
          snapshot.forEach(function(data) {
            let cryptoTicker = data.key;
            if(cryptoTicker !== "" || null || undefined) {
              sendResponse({dbResponse: cryptoTicker});
            } else {
              sendResponse({dbResponse: request.content});
            }
          })
        }
    })
    return true;
    } else if(request.message == "find_stock_exchange") {
        let thisStockTicker = request.content;  
        firebaseDB.child("stock").child(thisStockTicker.toUpperCase()).once('value').then(function(snapshot) {
          if(snapshot.exists()) {
              let stockObj = snapshot.val();
              let stockExchange = stockObj.exchange;
              let webullURL = 'https://www.webull.com/quote/' + stockExchange + '-' + thisStockTicker.toLowerCase();
              sendResponse({dbResponse: webullURL});
          } else {
              let webullURL = 'https://www.webull.com/quote/nysearca-' + thisStockTicker.toLowerCase();
              sendResponse({dbResponse: webullURL})
          }
      })
      return true;
    } else if(request.message == "find_crypto_translation") {
      let thisCryptoTicker = request.content;
      firebaseDB.child("crypto").child(thisCryptoTicker.toUpperCase()).once('value').then(function(snapshot) {
        if(snapshot.exists()) {
          let cryptoTickerObj = snapshot.val();
          let dbCryptoTranslation = cryptoTickerObj.ticker_url_translation;
          if (dbCryptoTranslation !== "") {
            sendResponse({dbResponse: dbCryptoTranslation});
          } else {
            sendResponse({dbResponse: thisCryptoTicker});
          }
        }
      })
      return true;
    } else if (request.message == "find_research_exchange") {
      let thisSResearchTicker = request.content;
      firebaseDB.child("stock").child(thisSResearchTicker.toUpperCase()).once('value').then(function(snapshot) {
        if(snapshot.exists()) {
            let stockObj = snapshot.val();
            let stockExchange = stockObj.exchange;
            let dbrMotley = 'https://www.fool.com/quote/' + stockExchange + '/*/' + thisSResearchTicker;
            sendResponse({dbResponse: dbrMotley});
        } else {
            let dbrMotley = 'https://www.fool.com/quote/nysemkt/*/' + thisSResearchTicker;
            sendResponse({dbResponse: dbrMotley});
        }
      })
      return true;
    } else {
      if(request.message == "find_research_translation") {
        let thisCResearchTicker = request.content; 
        firebaseDB.child("crypto").child(thisCResearchTicker.toUpperCase()).once('value').then(function(snapshot) {
          if(snapshot.exists()) {
            let cryptoRObj = snapshot.val();
            let cryptoRTranslation = cryptoRObj.ticker_url_translation;
            if(cryptoRTranslation !== "") {
              sendResponse({dbResponse: cryptoRTranslation});
            } else {
              sendResponse({dbResponse: thisCResearchTicker});
            }
          } else {
            sendResponse({dbResponse: thisCResearchTicker});
          }
        })
        return true;
      }
    }
  }   
);


