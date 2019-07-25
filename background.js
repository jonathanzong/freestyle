chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({file: "content.js"});

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.cssString)
      chrome.tabs.insertCSS({
        code: request.cssString
      });
  });
});
