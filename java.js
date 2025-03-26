// script.js

function showAlert() {
  alert("Welcome to our Algae Bioreactor Project. Scroll down to learn more about our mission!");
}

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert("Thank you, " + name + "! Your message has been received.");
    document.getElementById('contactForm').reset();
  } else {
    alert("Please fill out all fields before submitting.");
  }
});