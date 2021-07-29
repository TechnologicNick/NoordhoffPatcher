function save_options() {
  chrome.storage.sync.set({
    slider_alles: document.getElementById('slider_alles').checked,
    slider_knop: document.getElementById('slider_knop').checked,
    slider_auto: document.getElementById('slider_auto').checked
  });
}

function restore_options() {
  chrome.storage.sync.get({
    slider_alles: true,
    slider_knop: true,
    slider_auto: false
  }, function(items) {
    document.getElementById('slider_alles').checked = items.slider_alles;
    document.getElementById('slider_knop').checked = items.slider_knop;
    document.getElementById('slider_auto').checked = items.slider_auto;
  });
}

document.addEventListener('DOMContentLoaded', function () {
    var sliders = document.getElementsByClassName("switch");
    for(i = 0; i < sliders.length; i++){
        $(sliders[i].children[1]).addClass('noAnim');
    }
    
    restore_options();
    
    for(i = 0; i < sliders.length; i++){
        var slider = sliders[i].children[0];
        slider.addEventListener('change', save_options);
    }
    
    setTimeout(function() {
        for(i = 0; i < sliders.length; i++){
            $(sliders[i].children[1]).removeClass('noAnim');
        }
    }, 100);
    
    /*
    document.getElementById('slider_alles').addEventListener('change', function() {
        var slider = document.getElementById('slider_alles');
    });
    document.getElementById('slider_knop').addEventListener('change', function() {
        var slider = document.getElementById('slider_knop');
    });
    document.getElementById('slider_auto').addEventListener('change', function() {
        var slider = document.getElementById('slider_auto');
    });*/
});