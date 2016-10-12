function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;
  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
}

function switchStream(streamId){
  $("#youtubeFrame").attr('src', "https://www.youtube.com/embed/" + streamId + "?autoplay=1");
}
function switchChat(channel){
  $("#twitchFrame").attr('src', "http://www.twitch.tv/" + channel + "/chat");
}

$(function(){
  var stream = getUrlParameter('stream'),
      chat = getUrlParameter('chat');
  switchStream(stream);
  switchChat(chat);
  $("#chat-container").draggable({ handle: '#chat-handle', containment: 'parent' });
});
