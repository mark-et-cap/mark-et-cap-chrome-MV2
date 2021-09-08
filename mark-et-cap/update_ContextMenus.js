let menuSymbol = '';

//listens for messages to change between contexts link || selection
chrome.runtime.onMessage.addListener(
    function(request, sender, callback) {
        if (request.message == "switch_link") {
             chrome.contextMenus.update("stockParent", {
                "contexts": ["link"]
            });
            chrome.contextMenus.update("cryptoParent", {
                "contexts": ["link"]
            });
            chrome.contextMenus.update("copyMenu", {
                "contexts": ["link"]
            });
            chrome.contextMenus.update("brokerageMenu", {
                "contexts": ["link"]
            });
            chrome.contextMenus.update("exchangeMenu", {
                "contexts": ["link"]
            });
            chrome.contextMenus.update("sResearchMenu", {
                "contexts": ["link"]
            });
            chrome.contextMenus.update("cResearchMenu", {
                "contexts": ["link"]
            });
            chrome.contextMenus.update("stockOptions", {
                "contexts": ["link"]
            });
            chrome.contextMenus.update("sOptionsSite", {
                "contexts": ["link"]
            });
            chrome.contextMenus.update("sOptionsCalcCall", {
                "contexts": ["link"]
            });
            chrome.contextMenus.update("sOptionsCalcPut", {
                "contexts": ["link"]
            });
            chrome.contextMenus.update("searchAll", {
                "contexts": ["link"]
            });
        } else {
            if (request.message =="switch_selection") {
                chrome.contextMenus.update("stockParent", {
                    "contexts": ["selection"]
                });
                chrome.contextMenus.update("cryptoParent", {
                    "contexts": ["selection"]
                });
                chrome.contextMenus.update("copyMenu", {
                    "contexts": ["selection"]
                });
                chrome.contextMenus.update("brokerageMenu", {
                    "contexts": ["selection"]
                });
                chrome.contextMenus.update("exchangeMenu", {
                    "contexts": ["selection"]
                });
                chrome.contextMenus.update("sResearchMenu", {
                    "contexts": ["selection"]
                });
                chrome.contextMenus.update("cResearchMenu", {
                    "contexts": ["selection"]
                });
                chrome.contextMenus.update("stockOptions", {
                    "contexts": ["selection"]
                });
                chrome.contextMenus.update("sOptionsSite", {
                    "contexts": ["selection"]
                });
                chrome.contextMenus.update("sOptionsCalcCall", {
                    "contexts": ["selection"]
                });
                chrome.contextMenus.update("sOptionsCalcPut", {
                    "contexts": ["selection"]
                });
                chrome.contextMenus.update("searchAll", {
                    "contexts": ["selection"]
                });
            }
        }
    }
);


//listens for messages from "get_symbol.js" to update context menus
chrome.runtime.onMessage.addListener(
    function(request, sender, callback) {
        let menuSymbol = request.content;
        if (request.message == "get_symbol") {
            chrome.storage.sync.get(["enableCopy"], function(copy) {
                userCopy = copy.enableCopy;
                if(userCopy === false) {
                    chrome.contextMenus.update("copyMenu", {
                        "visible": false
                });
                } else {
                    chrome.contextMenus.update("copyMenu", {
                        "title": `Copy ${menuSymbol.toUpperCase()}`,
                        "visible": true
                    });
                }
            });
            chrome.storage.sync.get(["selectedBrokerageText", "selectedSResearchText", "enableOptions"], function(stocks) {
                userBrokerageText = stocks.selectedBrokerageText;
                userResearchText = stocks.selectedSResearchText;
                userOptions = stocks.enableOptions;
                if (userBrokerageText === "N/A" && userResearchText === "N/A" && userOptions === false) {
                    chrome.contextMenus.update("stockParent", {
                        "visible": false
                    });
                } else {
                    updateUserBrokerage(menuSymbol, userBrokerageText);
                    updateSResearch(menuSymbol, userResearchText);
                    updateOptions(menuSymbol, userOptions); 
                }
            });
            chrome.storage.sync.get(["selectedExchangeText", "selectedCResearchText"], function(crypto) {
                userExchangeText = crypto.selectedExchangeText;
                userCResearchText = crypto.selectedCResearchText;
                if (userExchangeText === "N/A" && userCResearchText === "N/A") {
                    chrome.contextMenus.update("cryptoParent", {
                        "visible": false
                    });
                } else {
                    updateUserExchange(menuSymbol, userExchangeText);
                    updateCResearch(menuSymbol, userCResearchText);
                }      
            });
            chrome.contextMenus.update("searchAll", {
                "visible": true
            });
        } else if (request.message == "get_selection") {
            chrome.storage.sync.get(["enableCopy"], function(copy) {
                userCopy = copy.enableCopy;
                if(userCopy === false) {
                    chrome.contextMenus.update("copyMenu", {
                        "visible": false
                });
                } else {
                    chrome.contextMenus.update("copyMenu", {
                        "title": `Copy ${menuSymbol.toUpperCase()}`,
                        "visible": true
                    });
                }
            });
            chrome.storage.sync.get(["selectedBrokerageText", "selectedSResearchText", "enableOptions"], function(stocks) {
                userBrokerageText = stocks.selectedBrokerageText;
                userResearchText = stocks.selectedSResearchText;
                userOptions = stocks.enableOptions;
                if (userBrokerageText === "N/A" && userResearchText === "N/A" && userOptions === false) {
                    chrome.contextMenus.update("stockParent", {
                        "visible": false
                    });
                } else {
                    updateUserBrokerage(menuSymbol, userBrokerageText, "selection");
                    updateSResearch(menuSymbol, userResearchText, "selection");
                    updateOptions(menuSymbol, userOptions, "selection"); 
                }
            });
            chrome.storage.sync.get(["selectedExchangeText", "selectedCResearchText"], function(crypto) {
                userExchangeText = crypto.selectedExchangeText;
                userCResearchText = crypto.selectedCResearchText;
                if (userExchangeText === "N/A" && userCResearchText === "N/A") {
                    chrome.contextMenus.update("cryptoParent", {
                        "visible": false
                    });
                } else {
                    updateUserExchange(menuSymbol, userExchangeText, "selection");
                    updateCResearch(menuSymbol, userCResearchText, "selection");
                }      
            });
            chrome.contextMenus.update("searchAll", { 
                "visible": true
            });    
        } else {
            if (request.message == "other_selection") {
                chrome.contextMenus.update("copyMenu", {
                    "visible": false
                });
                chrome.contextMenus.update("brokerageMenu", {
                    "visible": false
                });
                chrome.contextMenus.update("exchangeMenu", {
                    "visible": false
                });
                chrome.contextMenus.update("sResearchMenu", {
                    "visible": false
                });
                chrome.contextMenus.update("cResearchMenu", {
                    "visible": false
                });
                chrome.contextMenus.update("stockOptions", {
                    "visible": false
                });
                chrome.contextMenus.update("sOptionsSite", {
                    "visible": false
                });
                chrome.contextMenus.update("sOptionsCalcCall", {
                    "visible": false
                });
                chrome.contextMenus.update("sOptionsCalcPut", {
                    "visible": false
                });
                 chrome.contextMenus.update("searchAll", {
                    "visible": false
                });
            }
        }
    }
);

function updateUserBrokerage(menuSymbol, userBrokerageText, selection) {
    if (userBrokerageText === "N/A") {
        chrome.contextMenus.update("brokerageMenu", {
            "visible": false
        });
    } else {
        if(selection === "selection") {
            chrome.contextMenus.update("brokerageMenu", {
                "title": `Open ${menuSymbol.toUpperCase()} w/ ${userBrokerageText}`,
                "contexts": ["selection"],
                "visible": true 
            });
        } else {
            chrome.contextMenus.update("brokerageMenu", {
                "title": `Open ${menuSymbol.toUpperCase()} w/ ${userBrokerageText}`,
                "visible": true 
            });
        }
    }
};

function updateUserExchange(menuSymbol, userExchangeText, selection) {
    if (userExchangeText === "N/A") {
        chrome.contextMenus.update("exchangeMenu", {
            "visible": false
        });
     } else {
        if(selection === "selection") {
            chrome.contextMenus.update("exchangeMenu", {
                "title": `Open ${menuSymbol.toUpperCase()} w/ ${userExchangeText}`,
                "contexts": ["selection"],
                "visible": true  
            });
        } else {
            chrome.contextMenus.update("exchangeMenu", {
                "title": `Open ${menuSymbol.toUpperCase()} w/ ${userExchangeText}`,
                "visible": true  
            });
        }
    }        
};

function updateSResearch(menuSymbol, userResearchText, selection) {
    if (userResearchText === "N/A") {
        chrome.contextMenus.update("sResearchMenu", {
            "visible": false
        });
    } else {
        if(selection === "selection") {
            chrome.contextMenus.update("sResearchMenu", {
                "title": `Open ${menuSymbol.toUpperCase()} w/ ${userResearchText}`,
                "contexts": ["selection"],
                "visible": true  
            });
        } else {
            chrome.contextMenus.update("sResearchMenu", {
                "title": `Open ${menuSymbol.toUpperCase()} w/ ${userResearchText}`,
                "visible": true  
            });
        }
    }
};    
                 
function updateCResearch(menuSymbol, userCResearchText, selection) {
    if (userCResearchText === "N/A") {
        chrome.contextMenus.update("cResearchMenu", {
            "visible": false
        });
    } else {
        if(selection === "selection") {
            chrome.contextMenus.update("cResearchMenu", {
                "title": `Open ${menuSymbol.toUpperCase()} w/ ${userCResearchText}`,
                "contexts": ["selection"],
                "visible": true  
            });
        } else {
            chrome.contextMenus.update("cResearchMenu", {
                "title": `Open ${menuSymbol.toUpperCase()} w/ ${userCResearchText}`,
                "visible": true  
            });
        }
    }        
};

function updateOptions(menuSymbol, userOptions, selection) {
    if(userOptions === false) {
        chrome.contextMenus.update("stockOptions", {
            "visible": false
        });
        chrome.contextMenus.update("sOptionsSite", {
            "visible": false
        });
        chrome.contextMenus.update("sOptionsCalcCall", {
            "visible": false
        });
        chrome.contextMenus.update("sOptionsCalcPut", {
            "visible": false
        });
    } else {
        if(selection === "selection") {
            chrome.contextMenus.update("stockOptions", {
                "title": `Search Options for ${menuSymbol.toUpperCase()} `,
                "contexts": ["selection"],
                "visible": true
            });
            chrome.contextMenus.update("sOptionsSite", {
                "title": `UW Flow - ${menuSymbol.toUpperCase()} `,
                "contexts": ["selection"],
                "visible": true
            });
            chrome.contextMenus.update("sOptionsCalcCall", {
                "title": `Build Call Option - ${menuSymbol.toUpperCase()} `,
                "contexts": ["selection"],
                "visible": true
            });
            chrome.contextMenus.update("sOptionsCalcPut", {
                "title": `Build Put Option - ${menuSymbol.toUpperCase()} `,
                "contexts": ["selection"],
                "visible": true
            });
        } else {
            chrome.contextMenus.update("stockOptions", {
                "title": `Search Options for ${menuSymbol.toUpperCase()} `,
                "visible": true
            });
            chrome.contextMenus.update("sOptionsSite", {
                "title": `UW Flow - ${menuSymbol.toUpperCase()} `,
                "visible": true
            });
            chrome.contextMenus.update("sOptionsCalcCall", {
                "title": `Build Call Option - ${menuSymbol.toUpperCase()} `,
                "visible": true
            });
            chrome.contextMenus.update("sOptionsCalcPut", {
                "title": `Build Put Option - ${menuSymbol.toUpperCase()} `,
                "visible": true
            });
        }
    }
};

//enables/disables copy option depending on user preference
let updateCopyMenu = () => {
    chrome.storage.sync.get(["enableCopy"], function(copy) {
        userCopy = copy.enableCopy;
        if (userCopy == false) {
            chrome.contextMenus.update("copyMenu", {
                "visible": false
            });
        } else {
            chrome.contextMenus.update("copyMenu", {
                "visible": true
            });
        };
    });
};

chrome.storage.onChanged.addListener(function(changes, storageArea) { 
    updateCopyMenu();
});





