chrome.browserAction.onClicked.addListener(function(tab) {
    // No tabs or host permissions needed!
    console.log('Turning ' + tab.url + ' red!');
    console.log('chrome', chrome);
    chrome.tabs.executeScript({
      file: "inject.js"
    });
  });