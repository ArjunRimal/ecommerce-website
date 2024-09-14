// Execute the following code when the document is fully loaded
$(document).ready(function() {
  // Initialize datepicker for the element with id "datepicker"
  $("#datepicker").datepicker();
});

// Shorter way to execute code when the document is fully loaded
$(function() {
  // Initialize tabs for the element with id "tabs"
  $("#tabs").tabs();
});


function updateDateTime() {
  // Create a new Date object which represents the current date and time
  var currentDateTime = new Date();

  // Extract the date part
  var day = currentDateTime.getDate();
  // January is 0, so we need to add 1 to get the correct month
  var month = currentDateTime.getMonth() + 1;
  var year = currentDateTime.getFullYear();

  // Extract the time part
  var hour = currentDateTime.getHours();
  var minute = currentDateTime.getMinutes();
  var second = currentDateTime.getSeconds();

  // Format date as YYYY-MM-DD
  var formattedDate = year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;

  // Format time as HH:MM:SS
  var formattedTime = (hour < 10 ? '0' : '') + hour + ':' + (minute < 10 ? '0' : '') + minute + ':' + (second < 10 ? '0' : '') + second;

  // Update the date and time display
  document.getElementById("datetime").innerText = "Real-time date and time: " + formattedDate + " " + formattedTime;
}

// Call updateDateTime function initially to display the date and time
updateDateTime();

// Update the date and time every second
setInterval(updateDateTime, 1000);
window.onload = function() {
  var randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
  var message = "Congratulations! You are our " + randomNumber + "th customer!";
  document.getElementById("customerMessage").textContent = message;
};

function animateParagraph() {
  var paragraph = document.getElementById('animated-paragraph');
  var position = -200; // Start position off-screen

  var animationInterval = setInterval(function() {
      position += 5; // Adjust speed here (higher value -> faster animation)
      paragraph.style.left = position + 'px';

      // Check if passed midway and fade out
      if (position >= window.innerWidth / 2) {
          paragraph.style.opacity = (window.innerWidth/2 - position) / (window.innerWidth/2);
      }

      // Reached the right side of the window
      if (position >= window.innerWidth) {
          clearInterval(animationInterval);
          paragraph.remove();
      }
  }, 20); // Adjust interval here (lower value -> faster animation)
}

animateParagraph();


