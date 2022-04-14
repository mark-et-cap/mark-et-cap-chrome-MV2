let allSitesSymbol = '';

chrome.runtime.onMessage.addListener(
    function(request, sender, callback) {
        if(request.message == "get_symbol" || request.message == "get_selection") {
            allSitesSymbol = request.content;
        } 
    }
);

function allSitesSearch() { 
    let screenWidth = window.screen.availWidth - 175;
    let extensionVersion = chrome.runtime.id;
    recentInteraction(allSitesSymbol);
    window.open(`chrome-extension://${extensionVersion}/popup/mec-popup.html`, "extension_popup", `top=67px,left=${screenWidth}px,width=366px,height=489px,status=no,scrollbars=no,resizable=no,titlebar=no`);
    setTimeout(function(){
        chrome.runtime.sendMessage({
            content: allSitesSymbol.toUpperCase(), 
            message: "open_search_page"
        });
    }, 1000);
};
