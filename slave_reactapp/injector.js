console.log("Injecting...");

chrome.storage.sync.get({
    slider_alles: true,
    slider_knop: true,
    slider_auto: false
}, function (items) {

    if (!items.slider_alles) {
        console.log("Nevermind, slider_alles is disabled");
    }

    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = chrome.extension.getURL("slave_reactapp/script.js");
    script.setAttribute("slider-button", items.slider_knop);
    script.setAttribute("slider-auto", items.slider_auto);
    document.head.appendChild(script);

});
