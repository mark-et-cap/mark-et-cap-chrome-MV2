
let copySymbolvar = '';

chrome.runtime.onMessage.addListener(
    function(request, sender, callback) {
        if(request.message == "get_symbol" || request.message == "get_selection") {
            copySymbolvar = request.content;
        } 
    }
);

//Slice then copy to clipboard (Copy Symbol context menu)
 function copySymbol() {
    if(copySymbolvar !== '' || copySymbolvar !== "undefined") {
        let copyText = document.createElement('input');
        document.body.appendChild(copyText);
        copyText.value = copySymbolvar;
        copyText.select();
        document.execCommand('copy'); 
        document.body.removeChild(copyText);
        show(copySymbolvar);
        recentInteraction(copySymbolvar);
    } else {
        alert("Something went wrong, please try again.")
    }
 };

//Show notification when copied (Copy Symbol context menu)
 function show(title, icon) {
    try {
        icon = icon || 'icons/MEC-128.png';
        let isClosed = false;
        let notificationId = "posting_" + Math.random();
        
        chrome.notifications.create(notificationId, {
            type: "basic",
            title: '',
            message: `${title.toUpperCase()} Copied`,
            iconUrl: 'icons/MEC-128.png'
        }, function () {
        });
        setTimeout(function () {
            if (!isClosed)
                chrome.notifications.clear(notificationId, function () {
                });
        }, 2000);
    } catch (e) {
        alert(e.message);
    };
};


