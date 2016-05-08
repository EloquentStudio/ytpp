chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
  if(message.action == "toggle_playback"){
    play_pause_button = document.getElementsByClassName('ytp-play-button ytp-button')[0]
    if(play_pause_button){
      play_pause_button.click();
    }
  }
});
