var backgroundPage = browser.extension.getBackgroundPage();
document.getElementById("res" + backgroundPage.resolution).setAttribute("checked", "");
document.addEventListener("click", (e) => {
  if(e.target.name == "res") {
    backgroundPage.setResolution(e.target.getAttribute("value"));
  }
});
