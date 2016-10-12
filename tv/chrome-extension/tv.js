console.log("BoB Extension Pluggin was loaded")
$(function(){
  console.log(window.location.ancestorOrigins[0]);
  if(window.location.ancestorOrigins[0].match("//andresperezl.github.com/bob/tv|http://localhost:8080")){
    setTimeout(function(){
      var tvStyle = document.createElement("link");
      tvStyle.rel = "stylesheet";
      tvStyle.type ="text/css";
      tvStyle.href =chrome.extension.getURL("tv.css");
      $("body").append(tvStyle);
      $(".chat-header, .chat-menu, .chat-interface, .chat-helpers, .chat-commands-dropdown, .notification-container").remove();
    }, 3000);

  };
});
