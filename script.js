

// Get the hamburger button and the nav links
const hamburgerButton = document.getElementById("hamburger-menu-button");
const navLinks = document.getElementById("nav-links");

// Add a click event listener to the hamburger button
hamburgerButton.addEventListener("click", function() {
    console.log("asdasda");
  // Toggle the display of the nav links
  if (navLinks.style.display === "none") {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
  }
});


window.addEventListener("resize", function() {
    // Code to be executed when the window is resized
    navLinks.style.display = "none";
  });
  



// slideshow 

var slideshow = document.getElementById("slideshow");
var images = slideshow.getElementsByTagName("img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var current = 0;

function showImage() {
  for (var i = 0; i < images.length; i++) {
    images[i].classList.remove("active");
  }
  images[current].classList.add("active");
}

prev.addEventListener("click", function() {
  current--;
  if (current < 0) {
    current = images.length - 1;
  }
  showImage();
});

next.addEventListener("click", function() {
  current++;
  if (current >= images.length) {
    current = 0;
  }
  showImage();
});

showImage();
