chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = new URL(tabs[0].url);
    const isHttps = url.protocol === "https:";
  
    let message = isHttps ? "The Site Is Secure" : "Not Secure Site";
    document.getElementById("status").innerText = message;
  });
  