let menuSymbol = '';

//listens for messages to change between contexts link || selection
chrome.runtime.onMessage.addListener(
    function(request, sender, callback) {
        if (request.message == "switch_link") {
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
        } else {
            if (request.message =="switch_selection") {
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
            chrome.storage.sync.get(["selectedBrokerageText"], function(brokerage) {
                userBrokerageText = brokerage.selectedBrokerageText;
                if (userBrokerageText === "N/A") {
                    chrome.contextMenus.update("brokerageMenu", {
                        "visible": false
                    });
                } else {
                    chrome.contextMenus.update("brokerageMenu", {
                        "title": `Open ${menuSymbol.toUpperCase()} w/ ${userBrokerageText}`,
                        "visible": true 
                    });
                }
            });
            chrome.storage.sync.get(["selectedExchangeText"], function(exchange) {
                userExchangeText = exchange.selectedExchangeText;
                if (userExchangeText === "N/A") {
                    chrome.contextMenus.update("exchangeMenu", {
                        "visible": false
                    });
                } else {
                    chrome.contextMenus.update("exchangeMenu", {
                        "title": `Open ${menuSymbol.toUpperCase()} w/ ${userExchangeText}`,
                        "visible": true  
                    });
                }        
            });
            chrome.storage.sync.get(["selectedSResearchText"], function(research) {
                userResearchText = research.selectedSResearchText;
                if (userResearchText === "N/A") {
                    chrome.contextMenus.update("sResearchMenu", {
                        "visible": false
                    });
                } else {
                    chrome.contextMenus.update("sResearchMenu", {
                        "title": `Open ${menuSymbol.toUpperCase()} w/ ${userResearchText}`,
                        "visible": true  
                    });
                }        
            });
            chrome.storage.sync.get(["selectedCResearchText"], function(cresearch) {
                userCResearchText = cresearch.selectedCResearchText;
                if (userCResearchText === "N/A") {
                    chrome.contextMenus.update("cResearchMenu", {
                        "visible": false
                    });
                } else {
                    chrome.contextMenus.update("cResearchMenu", {
                        "title": `Open ${menuSymbol.toUpperCase()} w/ ${userCResearchText}`,
                        "visible": true  
                    });
                }        
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
            chrome.storage.sync.get(["selectedBrokerageText"], function(brokerage) {
                userBrokerageText = brokerage.selectedBrokerageText;
                if (userBrokerageText === "N/A") {
                    chrome.contextMenus.update("brokerageMenu", {
                        "visible": false
                    });
                } else {
                    chrome.contextMenus.update("brokerageMenu", {
                        "title": `Open ${menuSymbol.toUpperCase()} w/ ${userBrokerageText}`,
                        "contexts": ["selection"],
                        "visible": true 
                    });
                }
            });
            chrome.storage.sync.get(["selectedExchangeText"], function(exchange) {
                userExchangeText = exchange.selectedExchangeText;
                if (userExchangeText === "N/A") {
                    chrome.contextMenus.update("exchangeMenu", {
                        "visible": false
                    });
                } else {
                    chrome.contextMenus.update("exchangeMenu", {
                        "title": `Open ${menuSymbol.toUpperCase()} w/ ${userExchangeText}`,
                        "contexts": ["selection"],
                        "visible": true  
                    });
                }        
            });
            chrome.storage.sync.get(["selectedSResearchText"], function(research) {
                userResearchText = research.selectedSResearchText;
                if (userResearchText === "N/A") {
                    chrome.contextMenus.update("sResearchMenu", {
                        "visible": false
                    });
                } else {
                    chrome.contextMenus.update("sResearchMenu", {
                        "title": `Open ${menuSymbol.toUpperCase()} w/ ${userResearchText}`,
                        "contexts": ["selection"],
                        "visible": true  
                    });
                }        
            });
            chrome.storage.sync.get(["selectedCResearchText"], function(cresearch) {
                userCResearchText = cresearch.selectedCResearchText;
                if (userCResearchText === "N/A") {
                    chrome.contextMenus.update("cResearchMenu", {
                        "visible": false
                    });
                } else {
                    chrome.contextMenus.update("cResearchMenu", {
                        "title": `Open ${menuSymbol.toUpperCase()} w/ ${userCResearchText}`,
                        "contexts": ["selection"],
                        "visible": true  
                    });
                }        
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
            }
        }
    }
);

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





