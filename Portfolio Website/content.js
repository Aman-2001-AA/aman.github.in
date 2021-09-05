var curUrl = window.location.href;
var reloadInterval;

function setReloadPage() {
  chrome.storage.local.get(["refreshUrls", "switchedOn"], storage => {
    if (!storage) return;
    const switchedOn = storage.switchedOn;
    const refreshUrls = storage.refreshUrls;
    if (!switchedOn || !refreshUrls[curUrl] || !refreshUrls[curUrl].status || refreshUrls[curUrl].seconds <= 0) {
      clearInterval(reloadInterval);
      return;
    }
    reloadInterval = setInterval(() => {
      chrome.storage.local.get(["refreshUrls", "switchedOn"], storage => {
        let result = true;

        if (!storage || !storage.switchedOn || !storage.refreshUrls || !storage.refreshUrls[curUrl]) result = false;
        if (!storage.refreshUrls[curUrl].status || !storage.refreshUrls[curUrl].seconds) result = false;
        
        if (result) location.reload();
        else  clearInterval(reloadInterval);
      });
    }, refreshUrls[curUrl].seconds*1000);
  });
}
chrome.extension.onMessage.addListener(() => {
  setReloadPage();
});
setReloadPage();