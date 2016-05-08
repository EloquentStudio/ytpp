chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({}, function(tabs){
    for (var i=0; i < tabs.length; i++) {
      if (/https?:\/\/www\.youtube\.com/.test(tabs[i].url)) {
        chrome.tabs.sendMessage(tabs[i].id, {action: "toggle_playback"}, function(response) {});
        }
    }
  })
});
