// Add event listener to the 'category' select element
document.getElementById("category").addEventListener("change", function() {
    // Get the value of the selected option
    var selectedOption = this.value;
    // Find the corresponding div based on the selected option
    var selectedDiv = document.getElementById(selectedOption);
    // If the div exists, smoothly scroll to it
    if (selectedDiv) {
        selectedDiv.scrollIntoView({ behavior: "smooth" });
    }
});

// Define event listeners for "Learn More" buttons
var learnMoreButtons = document.getElementsByClassName('learnMore');
for (var i = 0; i < learnMoreButtons.length; i++) {
    // Add event listener to each "Learn More" button
    learnMoreButtons[i].addEventListener('click', function() {
        // Get the productIndex from the data attribute
        var productIndex = this.getAttribute('data-product-index');
        // Redirect to productDetails.html with productIndex as a URL parameter
        window.location.href = '../html/productDetail.html?productIndex=' + productIndex;
    });
}

// products.js
// Execute this code when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the username from session storage
    var username = sessionStorage.getItem("username");
    // If username exists, display it in the element with id "name"
    if (username) {
        document.getElementById("name").textContent = username;
    }
});
