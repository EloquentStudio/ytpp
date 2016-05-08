chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
  console.log("message recieved")
  if(message.action == "toggle_playback"){
    play_pause_button = document.getElementsByClassName('ytp-play-button ytp-button')[0]
    if(play_pause_button){
      console.log("toggling state")
      play_pause_button.click();
    }else{
      console.log("YT player not active")
    }
  }
});
