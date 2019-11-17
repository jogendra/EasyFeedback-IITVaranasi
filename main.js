// Called when the user clicks on the browser action.
browser.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  browser.tabs.executeScript(null, {file: "feedback.js"});
});
