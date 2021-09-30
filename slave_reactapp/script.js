console.log('Script added! ' + window.location.hostname);

function reactapp_npEnableFetchHook(enabled) {
    if (enabled) {
        window.fetch_original = window.fetch_original ?? window.fetch;

        window.fetch = (...args) => {
            let result = window.fetch_original(...args);

            return result.then(r => {
                console.log(r);
                return r;
            });
        }
    } else {
        window.fetch = window.fetch_original ?? window.fetch;
    }
}

function reactapp_npShowAnswers(currentPage) {
    console.log("Showing answers");
    console.log("Page:", currentPage);

    
}

function reactapp_npOnHashChange(hashChangeEvent) {
    console.log(hashChangeEvent);

    let regexUuid = `[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}`
    let regexUrl = new RegExp(`^#\/plp\/book\/(?<book>${regexUuid})\/chapter\/(?<chapter>${regexUuid})\/paragraph\/(?<paragraph>${regexUuid})\/lesson\/(?<lesson>${regexUuid})`);

    let matched = window.location.hash.match(regexUrl);

    reactapp_npEnableFetchHook(matched);

    if (matched) {
        reactapp_npShowAnswers(matched);
    }

    console.log();
}

window.addEventListener("hashchange", reactapp_npOnHashChange, false);

window.location.hash = window.location.hash + "/"; // Force a hashchange event
