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
            chrome.contextMenus.update("brokerageMenu2", {
                "contexts": ["link"]
            });
            chrome.contextMenus.update("brokerageMenu3", {
                "contexts": ["link"]
            });
            chrome.contextMenus.update("exchangeMenu", {
                "contexts": ["link"]
            });
            chrome.contextMenus.update("exchangeMenu2", {
                "contexts": ["link"]
            });
            chrome.contextMenus.update("exchangeMenu3", {
                "contexts": ["link"]
            });
            chrome.contextMenus.update("sResearchMenu", {
                "contexts": ["link"]
            });
            chrome.contextMenus.update("sResearchMenu2", {
                "contexts": ["link"]
            });
            chrome.contextMenus.update("sResearchMenu3", {
                "contexts": ["link"]
            });
            chrome.contextMenus.update("cResearchMenu", {
                "contexts": ["link"]
            });
            chrome.contextMenus.update("cResearchMenu2", {
                "contexts": ["link"]
            });
            chrome.contextMenus.update("cResearchMenu3", {
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
            chrome.contextMenus.update("chartMenu", {
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
                chrome.contextMenus.update("brokerageMenu2", {
                    "contexts": ["selection"]
                });
                chrome.contextMenus.update("brokerageMenu3", {
                    "contexts": ["selection"]
                });
                chrome.contextMenus.update("exchangeMenu", {
                    "contexts": ["selection"]
                });
                chrome.contextMenus.update("exchangeMenu2", {
                    "contexts": ["selection"]
                });
                chrome.contextMenus.update("exchangeMenu3", {
                    "contexts": ["selection"]
                });
                chrome.contextMenus.update("sResearchMenu", {
                    "contexts": ["selection"]
                });
                chrome.contextMenus.update("sResearchMenu2", {
                    "contexts": ["selection"]
                });
                chrome.contextMenus.update("sResearchMenu3", {
                    "contexts": ["selection"]
                });
                chrome.contextMenus.update("cResearchMenu", {
                    "contexts": ["selection"]
                });
                chrome.contextMenus.update("cResearchMenu2", {
                    "contexts": ["selection"]
                });
                chrome.contextMenus.update("cResearchMenu3", {
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
                chrome.contextMenus.update("chartMenu", {
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
            chrome.storage.sync.get([
                "selectedBrokerageText", 
                "selectedBrokerageText2", 
                "selectedBrokerageText3", 
                "selectedSResearchText", 
                "selectedSResearchText2", 
                "selectedSResearchText3"
            ], function(stocks) {
                userBrokerageText = stocks.selectedBrokerageText;
                userBrokerageText2 = stocks.selectedBrokerageText2;
                userBrokerageText3 = stocks.selectedBrokerageText3;
                userResearchText = stocks.selectedSResearchText;
                userResearchText2 = stocks.selectedSResearchText2;
                userResearchText3 = stocks.selectedSResearchText3;
                if (userBrokerageText === "N/A" && userResearchText === "N/A") {
                    chrome.contextMenus.update("stockParent", {
                        "visible": false
                    });
                } else {
                    updateUserBrokerage(menuSymbol, userBrokerageText);
                    updateUserBrokerage2(menuSymbol, userBrokerageText2);
                    updateUserBrokerage3(menuSymbol, userBrokerageText3);
                    updateSResearch(menuSymbol, userResearchText);
                    updateSResearch2(menuSymbol, userResearchText2);
                    updateSResearch3(menuSymbol, userResearchText3);
                    
                }
            });
            chrome.storage.sync.get([
                "selectedExchangeText",
                "selectedExchangeText2", 
                "selectedExchangeText3",  
                "selectedCResearchText",
                "selectedCResearchText2",
                "selectedCResearchText3"
            ], function(crypto) {
                userExchangeText = crypto.selectedExchangeText;
                userExchangeText2 = crypto.selectedExchangeText2;
                userExchangeText3 = crypto.selectedExchangeText3;
                userCResearchText = crypto.selectedCResearchText;
                userCResearchText2 = crypto.selectedCResearchText2;
                userCResearchText3 = crypto.selectedCResearchText3;
                if (userExchangeText === "N/A" && userCResearchText === "N/A") {
                    chrome.contextMenus.update("cryptoParent", {
                        "visible": false
                    });
                } else {
                    updateUserExchange(menuSymbol, userExchangeText);
                    updateUserExchange2(menuSymbol, userExchangeText2);
                    updateUserExchange3(menuSymbol, userExchangeText3);
                    updateCResearch(menuSymbol, userCResearchText);
                    updateCResearch2(menuSymbol, userCResearchText2);
                    updateCResearch3(menuSymbol, userCResearchText3);
                }      
            });
            chrome.storage.sync.get([
                "selectedOptionsText"
            ], function(options) {
                userOptionsText = options.selectedOptionsText;
                if (userOptionsText === "N/A") {
                    chrome.contextMenus.update("stockOptions", {
                        "visible": false
                    });
                } else {
                    updateOptions(menuSymbol, userOptionsText); 
                }
            });
            chrome.contextMenus.update("searchAll", {
                "visible": true
            });
            chrome.storage.sync.get([
                "enableHoverChart"
            ], function(hover) {
                userTVHoverEnabled = hover.enableHoverChart;
                if (userTVHoverEnabled == false) {
                    chrome.contextMenus.update("chartMenu", {
                        "visible": false
                    });
                } else {
                    chrome.contextMenus.update("chartMenu", {
                        "title": `Open ${menuSymbol.toUpperCase()} Chart`,
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
            chrome.storage.sync.get([
                "selectedBrokerageText",
                "selectedBrokerageText2", 
                "selectedBrokerageText3",  
                "selectedSResearchText",
                "selectedSResearchText2", 
                "selectedSResearchText3"  
            ], function(stocks) {
                userBrokerageText = stocks.selectedBrokerageText;
                userBrokerageText2 = stocks.selectedBrokerageText2;
                userBrokerageText3 = stocks.selectedBrokerageText3;
                userResearchText = stocks.selectedSResearchText;
                userResearchText2 = stocks.selectedSResearchText2;
                userResearchText3 = stocks.selectedSResearchText3;
                if (userBrokerageText === "N/A" && userResearchText === "N/A") {
                    chrome.contextMenus.update("stockParent", {
                        "visible": false
                    });
                } else {
                    updateUserBrokerage(menuSymbol, userBrokerageText, "selection");
                    updateUserBrokerage2(menuSymbol, userBrokerageText2, "selection");
                    updateUserBrokerage3(menuSymbol, userBrokerageText3, "selection");
                    updateSResearch(menuSymbol, userResearchText, "selection");
                    updateSResearch2(menuSymbol, userResearchText2, "selection");
                    updateSResearch3(menuSymbol, userResearchText3, "selection");
                }
            });
            chrome.storage.sync.get([
                "selectedExchangeText",
                "selectedExchangeText2",
                "selectedExchangeText3", 
                "selectedCResearchText",
                "selectedCResearchText2",
                "selectedCResearchText3"
            ], function(crypto) {
                userExchangeText = crypto.selectedExchangeText;
                userExchangeText2 = crypto.selectedExchangeText2;
                userExchangeText3 = crypto.selectedExchangeText3;
                userCResearchText = crypto.selectedCResearchText;
                userCResearchText2 = crypto.selectedCResearchText2;
                userCResearchText3 = crypto.selectedCResearchText3;
                if (userExchangeText === "N/A" && userCResearchText === "N/A") {
                    chrome.contextMenus.update("cryptoParent", {
                        "visible": false
                    });
                } else {
                    updateUserExchange(menuSymbol, userExchangeText, "selection");
                    updateUserExchange2(menuSymbol, userExchangeText2, "selection");
                    updateUserExchange3(menuSymbol, userExchangeText3, "selection");
                    updateCResearch(menuSymbol, userCResearchText, "selection");
                    updateCResearch2(menuSymbol, userCResearchText2, "selection");
                    updateCResearch3(menuSymbol, userCResearchText3, "selection");
                }      
            });
            chrome.storage.sync.get([
                "selectedOptionsText"
            ], function(options) {
                userOptionsText = options.selectedOptionsText;
                if (userOptionsText === "N/A") {
                    chrome.contextMenus.update("stockOptions", {
                        "visible": false
                    });
                } else {
                    updateOptions(menuSymbol, userOptionsText, "selection"); 
                }
            });
            chrome.contextMenus.update("searchAll", { 
                "visible": true
            });
            chrome.storage.sync.get([
                "enableHoverChart"
            ], function(hover) {
                userTVHoverEnabled = hover.enableHoverChart;
                if (userTVHoverEnabled == false) {
                    chrome.contextMenus.update("chartMenu", {
                        "visible": false
                    });
                } else {
                    chrome.contextMenus.update("chartMenu", {
                        "title": `Open ${menuSymbol.toUpperCase()} Chart`,
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
                chrome.contextMenus.update("brokerageMenu2", {
                    "visible": false
                });
                chrome.contextMenus.update("brokerageMenu3", {
                    "visible": false
                });
                chrome.contextMenus.update("exchangeMenu", {
                    "visible": false
                });
                chrome.contextMenus.update("exchangeMenu2", {
                    "visible": false
                });
                chrome.contextMenus.update("exchangeMenu3", {
                    "visible": false
                });
                chrome.contextMenus.update("sResearchMenu", {
                    "visible": false
                });
                chrome.contextMenus.update("sResearchMenu2", {
                    "visible": false
                });
                chrome.contextMenus.update("sResearchMenu3", {
                    "visible": false
                });
                chrome.contextMenus.update("cResearchMenu", {
                    "visible": false
                });
                chrome.contextMenus.update("cResearchMenu2", {
                    "visible": false
                });
                chrome.contextMenus.update("cResearchMenu3", {
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
                chrome.contextMenus.update("chartMenu", {
                    "visible": false
                });
            }
        }
    }
);


//update brokerage menus
function updateUserBrokerage(menuSymbol, userBrokerageText, selection) {
    if (userBrokerageText === "N/A") {
        chrome.contextMenus.update("brokerageMenu", {
            "visible": false
        });
    } else {
        if(selection === "selection") {
            chrome.contextMenus.update("brokerageMenu", {
                "title": `View/Trade ${menuSymbol.toUpperCase()} - ${userBrokerageText}`,
                "contexts": ["selection"],
                "visible": true 
            });
        } else {
            chrome.contextMenus.update("brokerageMenu", {
                "title": `View/Trade ${menuSymbol.toUpperCase()} - ${userBrokerageText}`,
                "visible": true 
            });
        }
    }
};

function updateUserBrokerage2(menuSymbol, userBrokerageText, selection) {
    if (userBrokerageText === "N/A") {
        chrome.contextMenus.update("brokerageMenu2", {
            "visible": false
        });
    } else {
        if(selection === "selection") {
            chrome.contextMenus.update("brokerageMenu2", {
                "title": `View/Trade ${menuSymbol.toUpperCase()} - ${userBrokerageText}`,
                "contexts": ["selection"],
                "visible": true 
            });
        } else {
            chrome.contextMenus.update("brokerageMenu2", {
                "title": `View/Trade ${menuSymbol.toUpperCase()} - ${userBrokerageText}`,
                "visible": true 
            });
        }
    }
};

function updateUserBrokerage3(menuSymbol, userBrokerageText, selection) {
    if (userBrokerageText === "N/A") {
        chrome.contextMenus.update("brokerageMenu3", {
            "visible": false
        });
    } else {
        if(selection === "selection") {
            chrome.contextMenus.update("brokerageMenu3", {
                "title": `View/Trade ${menuSymbol.toUpperCase()} - ${userBrokerageText3}`,
                "contexts": ["selection"],
                "visible": true 
            });
        } else {
            chrome.contextMenus.update("brokerageMenu3", {
                "title": `View/Trade ${menuSymbol.toUpperCase()} - ${userBrokerageText3}`,
                "visible": true 
            });
        }
    }
};

//update exchange menus
function updateUserExchange(menuSymbol, userExchangeText, selection) {
    if (userExchangeText === "N/A") {
        chrome.contextMenus.update("exchangeMenu", {
            "visible": false
        });
     } else {
        if(selection === "selection") {
            chrome.contextMenus.update("exchangeMenu", {
                "title": `View/Trade ${menuSymbol.toUpperCase()} - ${userExchangeText}`,
                "contexts": ["selection"],
                "visible": true  
            });
        } else {
            chrome.contextMenus.update("exchangeMenu", {
                "title": `View/Trade ${menuSymbol.toUpperCase()} - ${userExchangeText}`,
                "visible": true  
            });
        }
    }        
};

function updateUserExchange2(menuSymbol, userExchangeText, selection) {
    if (userExchangeText === "N/A") {
        chrome.contextMenus.update("exchangeMenu2", {
            "visible": false
        });
     } else {
        if(selection === "selection") {
            chrome.contextMenus.update("exchangeMenu2", {
                "title": `View/Trade ${menuSymbol.toUpperCase()} - ${userExchangeText}`,
                "contexts": ["selection"],
                "visible": true  
            });
        } else {
            chrome.contextMenus.update("exchangeMenu2", {
                "title": `View/Trade ${menuSymbol.toUpperCase()} - ${userExchangeText}`,
                "visible": true  
            });
        }
    }        
};

function updateUserExchange3(menuSymbol, userExchangeText, selection) {
    if (userExchangeText === "N/A") {
        chrome.contextMenus.update("exchangeMenu3", {
            "visible": false
        });
     } else {
        if(selection === "selection") {
            chrome.contextMenus.update("exchangeMenu3", {
                "title": `View/Trade ${menuSymbol.toUpperCase()} - ${userExchangeText}`,
                "contexts": ["selection"],
                "visible": true  
            });
        } else {
            chrome.contextMenus.update("exchangeMenu3", {
                "title": `View/Trade ${menuSymbol.toUpperCase()} - ${userExchangeText}`,
                "visible": true  
            });
        }
    }        
};

//update stock research menus
function updateSResearch(menuSymbol, userResearchText, selection) {
    if (userResearchText === "N/A") {
        chrome.contextMenus.update("sResearchMenu", {
            "visible": false
        });
    } else {
        if(selection === "selection") {
            chrome.contextMenus.update("sResearchMenu", {
                "title": `Research ${menuSymbol.toUpperCase()} - ${userResearchText}`,
                "contexts": ["selection"],
                "visible": true  
            });
        } else {
            chrome.contextMenus.update("sResearchMenu", {
                "title": `Research ${menuSymbol.toUpperCase()} - ${userResearchText}`,
                "visible": true  
            });
        }
    }
};  

function updateSResearch2(menuSymbol, userResearchText, selection) {
    if (userResearchText === "N/A") {
        chrome.contextMenus.update("sResearchMenu2", {
            "visible": false
        });
    } else {
        if(selection === "selection") {
            chrome.contextMenus.update("sResearchMenu2", {
                "title": `Research ${menuSymbol.toUpperCase()} - ${userResearchText}`,
                "contexts": ["selection"],
                "visible": true  
            });
        } else {
            chrome.contextMenus.update("sResearchMenu2", {
                "title": `Research ${menuSymbol.toUpperCase()}  ${userResearchText}`,
                "visible": true  
            });
        }
    }
};

function updateSResearch3(menuSymbol, userResearchText, selection) {
    if (userResearchText === "N/A") {
        chrome.contextMenus.update("sResearchMenu3", {
            "visible": false
        });
    } else {
        if(selection === "selection") {
            chrome.contextMenus.update("sResearchMenu3", {
                "title": `Research ${menuSymbol.toUpperCase()} - ${userResearchText}`,
                "contexts": ["selection"],
                "visible": true  
            });
        } else {
            chrome.contextMenus.update("sResearchMenu3", {
                "title": `Research ${menuSymbol.toUpperCase()} - ${userResearchText}`,
                "visible": true  
            });
        }
    }
};
          
//update crypto research menus
function updateCResearch(menuSymbol, userCResearchText, selection) {
    if (userCResearchText === "N/A") {
        chrome.contextMenus.update("cResearchMenu", {
            "visible": false
        });
    } else {
        if(selection === "selection") {
            chrome.contextMenus.update("cResearchMenu", {
                "title": `Research ${menuSymbol.toUpperCase()} - ${userCResearchText}`,
                "contexts": ["selection"],
                "visible": true  
            });
        } else {
            chrome.contextMenus.update("cResearchMenu", {
                "title": `Research ${menuSymbol.toUpperCase()} - ${userCResearchText}`,
                "visible": true  
            });
        }
    }        
};

function updateCResearch2(menuSymbol, userCResearchText, selection) {
    if (userCResearchText === "N/A") {
        chrome.contextMenus.update("cResearchMenu2", {
            "visible": false
        });
    } else {
        if(selection === "selection") {
            chrome.contextMenus.update("cResearchMenu2", {
                "title": `Research ${menuSymbol.toUpperCase()} - ${userCResearchText}`,
                "contexts": ["selection"],
                "visible": true  
            });
        } else {
            chrome.contextMenus.update("cResearchMenu2", {
                "title": `Research ${menuSymbol.toUpperCase()} - ${userCResearchText}`,
                "visible": true  
            });
        }
    }        
};

function updateCResearch3(menuSymbol, userCResearchText, selection) {
    if (userCResearchText === "N/A") {
        chrome.contextMenus.update("cResearchMenu3", {
            "visible": false
        });
    } else {
        if(selection === "selection") {
            chrome.contextMenus.update("cResearchMenu3", {
                "title": `Research ${menuSymbol.toUpperCase()} - ${userCResearchText}`,
                "contexts": ["selection"],
                "visible": true  
            });
        } else {
            chrome.contextMenus.update("cResearchMenu3", {
                "title": `Research ${menuSymbol.toUpperCase()} - ${userCResearchText}`,
                "visible": true  
            });
        }
    }        
};

//update options menus
function updateOptions(menuSymbol, userOptions, selection) {
    if(userOptions === "N/A") {
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
                "contexts": ["selection"],
                "visible": true
            });
            chrome.contextMenus.update("sOptionsSite", {
                "title": `View ${menuSymbol.toUpperCase()} Options - ${userOptions}`,
                "contexts": ["selection"],
                "visible": true
            });
            chrome.contextMenus.update("sOptionsCalcCall", {
                "title": `Build ${menuSymbol.toUpperCase()} Call - OptionStrat`,
                "contexts": ["selection"],
                "visible": true
            });
            chrome.contextMenus.update("sOptionsCalcPut", {
                "title": `Build ${menuSymbol.toUpperCase()} Put - OptionStrat `,
                "contexts": ["selection"],
                "visible": true
            });
        } else {
            chrome.contextMenus.update("stockOptions", {
                "visible": true
            });
            chrome.contextMenus.update("sOptionsSite", {
                "title": `View ${menuSymbol.toUpperCase()} Options - ${userOptions}`,
                "visible": true
            });
            chrome.contextMenus.update("sOptionsCalcCall", {
                "title": `Build ${menuSymbol.toUpperCase()} Call - OptionStrat`,
                "visible": true
            });
            chrome.contextMenus.update("sOptionsCalcPut", {
                "title": `Build ${menuSymbol.toUpperCase()} Put - OptionStrat`,
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





