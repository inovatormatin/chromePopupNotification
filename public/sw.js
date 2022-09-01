console.log("code is working fine");
this.addEventListener("fetch", (event) => {
  console.warn("url", event.request.url)
  
  if (event.request.url === "http://localhost:3000/manifest.json") {
    event.waitUntil(
      this.registration.showNotification("Cloud Cashback", {
        icon: "./yes.jpg",
        body: "This Diwali 5% flat discount on amazon",
      })
    );
  }
});

// {
//     "subject": "mailto: <manojgeetparmar@gmail.com>",
//     "publicKey": "BPfAfi0xJ9M6ymCNhPpbIRjlDfa4hBi66xDHkvJbpNb5SlLw7LLjntWR3Xw_YuLTivw4pib7r18p-NlhTdhFwMQ",
//     "privateKey": "h8ejOEMLrtBVLCWBQ_ja3KzHM58NoWBFvcKyImMygtw"
// }
