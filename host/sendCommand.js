function setCommand(command){
    chrome.storage.sync.set({command: command}, function() {
        // Notify that we saved.
        message('Command set!');
    });
}