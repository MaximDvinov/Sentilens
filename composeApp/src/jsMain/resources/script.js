function addChangeStorageListener(callback) {
    browser.storage.onChanged.addListener(callback);
}

