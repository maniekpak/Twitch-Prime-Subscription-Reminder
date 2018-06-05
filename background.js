const browser = window.browser || window.chrome;

browser.browserAction.onClicked.addListener(function(tab) {
    browser.tabs.create({
        url: window.browser ? "https://addons.mozilla.org/addon/twitch-prime-reminder/" : "https://chrome.google.com/webstore/detail/lkojkjhbgnhoepnajfllnjffcheahpco"
    });
});


browser.tabs.onUpdated.addListener(function(tabId, info, tab) {
    if (info.url) {
        chrome.tabs.sendMessage(tabId, {
            message: 'urlChanged'
        })
    }
});