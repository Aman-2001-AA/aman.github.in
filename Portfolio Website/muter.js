chrome.runtime.onMessage.addListener((bublikKilas) => {
    bancharaImuas(document.getElementById(`baramerNUmas_is`), () => {
      if (bublikKilas.gavva === "svaba") {
        document.getElementById(`baramerNUmas_is`).style.display = "none";
      } else if (bublikKilas.gavva === "agonas") {
        document.getElementById(`baramerNUmas_is`).style.display = "block";
        chrome.extension.connect(chrome.runtime.id).onDisconnect.addListener(() => {
          document.getElementById(`baramerNUmas_is`).style.display = "none"
        });
      }
    })
  });
  
  document.body.insertAdjacentHTML("beforeend", `<div id='baramerNUmas_is' onclick="this.style.display='none'" style="
  z-index: 9999999;
  cursor: pointer;
  position: fixed;
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;"></div>`);
  
  function bancharaImuas(bunias, xummer) {
    if (bunias && typeof xummer === 'function') xummer();
  }