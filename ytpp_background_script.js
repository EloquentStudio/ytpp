chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("Sending Message")
  chrome.tabs.query({}, function(tabs){
    for (var i=0; i < tabs.length; i++) {
      if (/https?:\/\/www\.youtube\.com/.test(tabs[i].url)) {
        chrome.tabs.sendMessage(tabs[i].id, {action: "toggle_playback"}, function(response) {});
        }
    }
  })
  console.log("Message Sent.")
});
