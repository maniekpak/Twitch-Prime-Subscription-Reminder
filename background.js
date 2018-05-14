const browser = window.browser || window.chrome;

browser.browserAction.onClicked.addListener(function(tab) {
    browser.tabs.create({
        url: window.browser ? "https://addons.mozilla.org/addon/twitch-prime-reminder/" : "https://chrome.google.com/webstore/detail/lkojkjhbgnhoepnajfllnjffcheahpco"
    });
});
