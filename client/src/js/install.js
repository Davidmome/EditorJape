const butInstall = document.getElementById("buttonInstall");

// Lógica para instalar la PWA
// TODO: Agregar un controlador de eventos al evento `beforeinstallprompt`
window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;
  butInstall.style.visibility = "visible";
});

// TODO: Implementar un controlador de eventos de clic en el elemento `butInstall`
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.style.visibility = "hidden";
});

// TODO: Agregar un controlador para el evento `appinstalled`
window.addEventListener("appinstalled", (event) => {
  window.deferredPrompt = null;
});
