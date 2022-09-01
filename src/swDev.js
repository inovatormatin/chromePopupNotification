const swDev = () => {
  function determineAppServerKey() {
    var vapidPublicKey = "BB7XiYhet3_werH9oZs2LrSB92BG0BrlP6UdsV-k3rptIqQSU0qVSReGFfMUt7h7yc6PWNyyy-1Neb7eertyuiokl;'kjhgfdsallhi23VYlQ";
    return urlBase64ToUint8Array(vapidPublicKey);
  }

  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker
    .register(swUrl)
    .then((response) => {
      console.warn("response", response);
      return response.pushManager.getSubscription().then(function(subscription){
        return response.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: determineAppServerKey()
        })
      })
    })
    .catch((err) => {
      console.error(err);
    });
};
export default swDev;
