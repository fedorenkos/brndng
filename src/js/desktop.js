//import "core-js/es6/promise";
//import ImagePreloader from "image-preloader";

// const preloader = new ImagePreloader(function(info) {
//   console.log("image with source %s is loaded with status %s", info.value.src, info.status);
// });

let isStarted = false;

function replaceClasses(doc) {
  // Find height class and replace it width inline style...
  // Makes hight of block equal to height of head
  let e = doc.querySelectorAll(".h-head-eq");
  for (let i = 0; i < e.length; i++) {
    e[i].style.height = e[i].style.minHeight = desktop_height + "px";
  }
}

function handleResize() {
  document.getElementById("left").style.width = "calc((100% - " + desktop_width + "px) / 2)";
  document.getElementById("right").style.width = "calc((100% - " + desktop_width + "px) / 2)";
  document.body.style.paddingTop = desktop_header + "px";

  document.getElementById("top").style.maxWidth = desktop_width + "px";
  document.getElementById("top").style.height = desktop_height + "px";

  replaceClasses(document);

  // EQCSS.apply();
}

window.init = function() {
  if (isStarted) {
    handleResize();
    return;
  }

  isStarted = true;

  // Do some preparation, data loading, etc ...

  // Initial style settings ..
  handleResize();

  // Start ...
  showBranding();
};

function showBranding() {
  // Set click action
  document.body.onclick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    //window.open(URL + encodeURIComponent(window.feedData[window.currentItemId].url + UTM));
    window.open(URL);
  };

  document.getElementsByTagName("html")[0].classList.add("ready");
}
