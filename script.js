

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
  
