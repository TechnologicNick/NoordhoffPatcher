console.log("Injecting...");

var enabled = true;
if(window.name === "pageFrame" && enabled){
  setCommand('null');
  
  var scripts = [];
  chrome.storage.sync.get({
    slider_alles: true,
    slider_knop: true,
    slider_auto: false
  }, function(items) {
    
    if(items.slider_alles) scripts.push('slave/script.js');
    else return;
    
    if(items.slider_knop) scripts.push('slave/button.js');
    if(items.slider_auto) scripts.push('slave/auto.js');
    
    for(var i = 0; i < scripts.length; i++){
      var head = document.getElementsByTagName('head')[0];
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = chrome.extension.getURL(scripts[i]);
      head.appendChild(script);
    }
    
  });
}

function setCommand(command){
    chrome.storage.sync.set({command: command}, function() {
        // Notify that we saved.
        //message('Settings saved');
    });
}