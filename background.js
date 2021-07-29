// intercept url
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (details.url.indexOf("://player.online.noordhoff.nl/patcher/") != -1) {
		
    }

	return {cancel: false};
  },
  {
    urls: ["*://player.online.noordhoff.nl/patcher/"],
    types: ["main_frame"]
  },
  ["blocking"]
);