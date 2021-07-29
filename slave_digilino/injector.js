console.log("Injecting...");

var enabled = true;
if( /* window.name === "xapi" && */ document.getElementsByClassName('pl-interactionContainer').length > 0 && enabled){
  
  var scripts = [];
  chrome.storage.sync.get({
    slider_alles: true,
    slider_knop: true,
    slider_auto: false
  }, function(items) {
    
    if(items.slider_alles) scripts.push('slave_digilino/script.js');
    else return;
    
    if(items.slider_knop) scripts.push('slave_digilino/button.js');
    if(items.slider_auto) scripts.push('slave_digilino/auto.js');
    
    for(var i = 0; i < scripts.length; i++){
      var head = document.getElementsByTagName('head')[0];
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = chrome.extension.getURL(scripts[i]);
      head.appendChild(script);
    }
    
  });
}else{
    console.log('Nevermind.');
}