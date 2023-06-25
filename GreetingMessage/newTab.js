chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    document.getElementById("greeting").textContent = request.greeting;
  });
  