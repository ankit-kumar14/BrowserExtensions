chrome.tabs.onCreated.addListener(function(tab) {
    chrome.tabs.sendMessage(tab.id, {greeting: "Hello, Life is all about suffering!"});
  });
  