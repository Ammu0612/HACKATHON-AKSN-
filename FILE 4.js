const phishingKeywords = ["enter your password", "verify your account", "update your details", "urgent action required"];

function detectPhishingText() {
  const text = document.body.innerText.toLowerCase();
  const found = phishingKeywords.some((word) => text.includes(word));

  if (found) {
    alert("⚠ Warning: This website may be a phishing site!");
  }
}

// Run after page loads
window.onload = detectPhishingText;

