chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete") {
      checkPhishing(tab.url, tabId);
    }
  });
  
  function checkPhishing(url, tabId) {
    const suspiciousWords = ["login", "verify", "update", "secure", "bank", "confirm"];
    
    // Convert URL to lowercase and check for suspicious words
    const lowerUrl = url.toLowerCase();
    const isSuspicious = suspiciousWords.some((word) => lowerUrl.includes(word));
  
    // Check if the site uses HTTPS
    const isHttps = url.startsWith("https:");
  
    // Send result to the popup
    chrome.action.setBadgeText({
      tabId,
      text: isSuspicious ? "⚠" : "✔"
    });
  
    chrome.action.setBadgeBackgroundColor({
      tabId,
      color: isSuspicious ? "red" : "green"
    });
  }
  
