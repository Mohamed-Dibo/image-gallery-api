var prodLinks = document.querySelectorAll('a[class^="prod"]');
var imgContainers = document.querySelectorAll('[class^="img-prod"]');
// console.log(imgContainers);
for (var i = 0; i < prodLinks.length; i++) {
  imgContainers[i].parentElement.style.display = "none"; // Hide the images initially

  prodLinks[i].addEventListener(
    "mouseover",
    createMouseOverHandler(imgContainers[i].parentElement)
  );
  prodLinks[i].addEventListener(
    "mouseout",
    createMouseOutHandler(imgContainers[i].parentElement)
  );
}

function createMouseOverHandler(container) {
  return function () {
    container.style.display = "block";
  };
}

function createMouseOutHandler(container) {
  return function () {
    container.style.display = "none";
  };
}
