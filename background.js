var resolution = "360p";

function setResolution(res) {
  resolution = res;
  console.log(`resolution set to ${res}`);
}

browser.webRequest.onBeforeRequest.addListener((details) => {
  var openUrl = details.url.replace("360p.mp4", resolution + ".mp4");
  if(details.originUrl != undefined && details.originUrl != details.url) {
    browser.tabs.update({url: openUrl}).then((tab) => {
      console.log(`Opened ${openUrl} on tab ${tab.id}`);
    }, (error) => {
      console.log(`Error: ${error}`);
    });
  }
}, {urls: ["https://vhoichoi.viewlift.com/encodes/*"]});
