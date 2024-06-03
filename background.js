chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (!tab.url.includes("youtube.com")) {
      chrome.tabs.query({ url: "*://*.youtube.com/*" }, (tabs) => {
        tabs.forEach((youtubeTab) => {
          chrome.tabs.sendMessage(youtubeTab.id, { action: "pause" });
        });
      });
    }
  });
});
