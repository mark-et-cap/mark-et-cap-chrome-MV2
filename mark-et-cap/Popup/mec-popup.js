let focusDomain = window.location.hostname;

let manifestVersion = chrome.runtime.getManifest();
document.getElementById("app-version").innerText += manifestVersion.version;

//Nav icons/body display variables
let recentButton = document.querySelector('nav[class^="recentHeader"]');
let starButton = document.querySelector('nav[class^="favorites"]');
let searchButton = document.querySelector('nav[class^="searchHeader"]');
let menuSpan = document.getElementById("menu-spanner");
let recentDisplay = document.getElementsByClassName('body')[0];
let favoritesDisplay = document.getElementsByClassName('body-favorites')[0];
let searchDisplay = document.getElementsByClassName('body-search')[0];

//sync data from chrome storage for popup display
let recentInfo = chrome.storage.sync.get([
  "recentSymbols",
  "recentSource",
  "recentTimeStamp", 
  "selectedFavorites",
  "favoritesTimeStamp"
  ], function(obj) {
    let userRecentSymbols = obj.recentSymbols;
    let userRecentSource = obj.recentSource;
    let userRecentTimeStamp = obj.recentTimeStamp;
    let userSelectedFavorites = obj.selectedFavorites;
    let favTimeStamp = obj.favoritesTimeStamp;
      
    let popupRecentSymbols = document.querySelectorAll('a[id$="-ticker"]');
    let popupRecentSource = document.querySelectorAll('a[id$="-source"]');
    let popupRecentTimeStamp = document.querySelectorAll('p[id$="-time"]');
    let popupFavoriteSymbol = document.querySelectorAll('a[id$="-favorite"]'); 
    let popupFavTimeStamp = document.querySelectorAll('p[id$="-timeinteraction"]');
    let popupFirstInteraction = document.querySelector('div[class$="first-login"]');

    //Ticker
    for (let i = 0; i < popupRecentSymbols.length; i++) {
      if(userRecentSymbols[i] == undefined) {
        popupRecentSymbols[i].closest(".row").style.display = 'none';
      } else {
        popupRecentSymbols[i].innerHTML = userRecentSymbols[i];
        popupFirstInteraction.style.display = 'none';
      };
    };
    //Source
    for (let i = 0; i < popupRecentSource.length; i++) {
      popupRecentSource[i].innerHTML = userRecentSource[i];
    };
    //TimeStamp
    for (let i = 0; i < popupRecentTimeStamp.length; i++) {
      popupRecentTimeStamp[i].innerHTML = userRecentTimeStamp[i];
    };
    //Favorites
    for (let i = 0; i < popupFavoriteSymbol.length; i++) {
      if(userSelectedFavorites[i] == undefined) {
        popupFavoriteSymbol[i].closest(".row").style.display = 'none';
      } else {
        popupFavoriteSymbol[i].innerHTML = userSelectedFavorites[i];
      };
    };
    //Favorites Timestamp
    for (let i = 0; i < popupFavTimeStamp.length; i++) {
      if(favTimeStamp[i] !== undefined) {
        popupFavTimeStamp[i].innerHTML = favTimeStamp[i];
      } 
    };
  }
);

//Action Button Menu
function actionButtonListener() {
  let actionButton = document.querySelectorAll('button[class$="button-action"]');
  let closeActionButton = document.querySelectorAll("a[href='#Close']");
  for(let i = 0; i < actionButton.length; i++) {
    let actionStyler = document.getElementsByClassName('action-popup')[i];
    actionButton[i].addEventListener("click", function() {
      actionStyler.style.display = 'block';
      closeActionButton[i].addEventListener("click", function() {
        actionStyler.style.display = 'none';
      });
    });
  };
};

//Set as a favorite
function setAsFavorite(thisFavorite) {
  chrome.storage.sync.get([
    "selectedFavorites", 
    "favoritesTimeStamp"
  ], function(obj) {
    let userFavoritesArray = obj.selectedFavorites;
    let userFavoritesTimeArray = obj.favoritesTimeStamp;
    if(userFavoritesArray.includes(thisFavorite)) {
      return 
    } else {
      let favTimeStamp = new Date();
      userFavoritesArray.unshift(thisFavorite);
      userFavoritesTimeArray.unshift(favTimeStamp.toLocaleString([], {year: '2-digit', month: '2-digit', day: 'numeric', hour: '2-digit', minute: '2-digit'}));
      if(userFavoritesArray.length > 16) {
        userFavoritesArray = 16
        userFavoritesTimeArray = 16
      };
      chrome.storage.sync.set({
        'selectedFavorites': userFavoritesArray,
        "favoritesTimeStamp": userFavoritesTimeArray
      });
    };
  });
};

//Remove as a favorite
function removeAsFavorite(removeFavorite) {
  chrome.storage.sync.get([
    "selectedFavorites",
    "favoritesTimeStamp"
  ], function(obj) {
    let userFavoritesRemoveArray = obj.selectedFavorites;
    let userFavoritesTimeStampRemove = obj.favoritesTimeStamp;
    for(let i = 0; i < userFavoritesRemoveArray.length; i++) {
      if(userFavoritesRemoveArray[i] === removeFavorite) {
        userFavoritesRemoveArray.splice(i,1);
        userFavoritesTimeStampRemove.splice(i,1);
        chrome.storage.sync.set({
          'selectedFavorites': userFavoritesRemoveArray,
          'favoritesTimeStamp': userFavoritesTimeStampRemove
        });
      };
    };
    let popupRecentSections = document.querySelectorAll('a[id$="-ticker"]');
    for (let i = 0; i < popupRecentSections.length; i++) {
      let popupRecentSymbols = popupRecentSections[i].innerHTML;
      let favoriteSelectedIcon = document.querySelectorAll('div[class$="favorite-selected"]');
      if(popupRecentSymbols.includes(removeFavorite)) {
          favoriteSelectedIcon[i].getElementsByTagName("img")[0].setAttribute("src", "MEC-StarOutline.png");
      };
    };
  });
};

//Nav Icon Event Listeners
function navClickHandler() {
  recentButton.addEventListener("click", showRecents);
  starButton.addEventListener("click", showFavorites);
  searchButton.addEventListener("click", showSearch);
}

function showRecents() {
  starButton.removeEventListener("click", showFavorites);
  searchButton.removeEventListener("click", showSearch);
  searchDisplay.style.display  = 'none';
  favoritesDisplay.style.display = 'none';
  recentDisplay.style.display = 'grid';
  menuSpan.setAttribute("class", "recent-on");
  navClickHandler();
}

function showFavorites() {
  recentButton.removeEventListener("click", showRecents);
  searchButton.removeEventListener("click", showSearch);
  recentDisplay.style.display  = 'none';
  searchDisplay.style.display  = 'none';
  favoritesDisplay.style.display = 'grid';
  menuSpan.setAttribute("class", "favorite-on");
  navClickHandler();
}

function showSearch() {
  recentButton.removeEventListener("click", showRecents);
  starButton.removeEventListener("click", showFavorites);
  favoritesDisplay.style.display = 'none';
  recentDisplay.style.display = 'none';
  searchDisplay.style.display  = 'block';
  menuSpan.setAttribute("class", "search-on");
  navClickHandler();
}

//Toggles hamburg Menu on and off
function hamburgToggle() {
  let theHamburgToggle = document.getElementById('hamburg-toggle');
  theHamburgToggle.addEventListener("click", function(){
    theHamburgToggle.setAttribute("class", "on");
    if(theHamburgToggle.className == "on"){
      theHamburgToggle.addEventListener("click", function() {
        theHamburgToggle.removeAttribute("class", "on");
        hamburgToggle();
      });
    };
  });
};

//Sets favorite icon if Ticker is already a favorite
function favoriteButtonSetter() {
  chrome.storage.sync.get([
    "selectedFavorites",
    "recentSymbols"
  ], function(obj) {
    let recentSymbolsFav = obj.recentSymbols;
    let userFavorites = obj.selectedFavorites;
    let tickerID = document.querySelectorAll('a[id$="-ticker"]');
    for (let i = 0; i < recentSymbolsFav.length; i++) {
      if (userFavorites === []) {
        return false
      } else {
        if (userFavorites.includes(recentSymbolsFav[i])) {
          tickerID[i].closest(".row").getElementsByClassName('favorite-selected')[0].children[0].src = "MEC-StarFill.png";
        };
      };
    };
  });
};

//Click listener for star icon within row (recents page)
function favoriteButtonRowListener() { 
  let favStar = document.querySelectorAll('div[class$="favorite-selected"]');
  favStar.forEach(function(starIcon, index) {
    starIcon.addEventListener("click", function() {
      let iconSrc = starIcon.children[0].src;
      let favTicker = document.querySelectorAll('a[id$="-ticker"]')[index].innerHTML;
      if (iconSrc.substring(iconSrc.lastIndexOf('/') + 1) == "MEC-StarOutline.png") {
        starIcon.getElementsByTagName("img")[0].setAttribute("src", "MEC-StarFill.png");
        setAsFavorite(favTicker);
      } else {
        if(iconSrc.substring(iconSrc.lastIndexOf('/') + 1) == "MEC-StarFill.png") {
          starIcon.getElementsByTagName("img")[0].setAttribute("src", "MEC-StarOutline.png");
          removeAsFavorite(favTicker);
        }
      }
      starIcon.removeEventListener("click", favoriteButtonRowListener);
    });
  });
};

//Click listener for star icon within row (favorites page)
function favoriteButtonFavListener() { 
  let favStar = document.querySelectorAll('div[class$="favorited-icon"]');
  favStar.forEach(function(starFavIcon, index) {
    starFavIcon.addEventListener("click", function() {
      let iconSrc = starFavIcon.children[0].src;
      let favTicker = document.querySelectorAll('a[id$="-favorite"]')[index].innerHTML;
        if(iconSrc.substring(iconSrc.lastIndexOf('/') + 1) == "MEC-StarFill.png") {
          removeAsFavorite(favTicker);
        }
      starFavIcon.removeEventListener("click", favoriteButtonFavListener);
    });
  });
};

function resetFavTimeStamp() {
  chrome.storage.sync.get([
    "favoritesTimeStamp"
    ], function(obj) {
      let resetFavTimeStamp = obj.favoritesTimeStamp;
      let popupFavTimeStamp = document.querySelectorAll('p[id$="-timeinteraction"]');
      for (let i = 0; i <popupFavTimeStamp.length; i++) {
        popupFavTimeStamp[i].innerHTML = resetFavTimeStamp[i];
      }
    }
  );
};

document.addEventListener('DOMContentLoaded', function(){
  actionButtonListener();
  hamburgToggle();
  favoriteButtonSetter();
  favoriteButtonRowListener();
  navClickHandler();
  favoriteButtonFavListener();
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
  for(key in changes) {
    if(key === "selectedFavorites") {
      let popupFavoriteSymbol = document.querySelectorAll('a[id$="-favorite"]');
      for (let i = 0; i < popupFavoriteSymbol.length; i++) {
        if(changes[key].newValue[i] == undefined) {
          popupFavoriteSymbol[i].closest(".row").style.display = 'none';
          resetFavTimeStamp();
        } else {
          popupFavoriteSymbol[i].closest(".row").style.display = 'grid';
          popupFavoriteSymbol[i].innerHTML = changes[key].newValue[i];
          resetFavTimeStamp();
        };
      };
      resetUserOptions();
    }
  }
});

document.addEventListener("mouseup", function(e) {
  let theHamburgToggleCheck = document.getElementById('hamburg-toggle');
  let theHamburgMenuCheck = document.getElementById('hamburg-menu');
  if (theHamburgToggleCheck.className == "on") {
    if(e.target != theHamburgMenuCheck) {
      theHamburgToggleCheck.removeAttribute("class", "on");
    }
  }
});
