  // Define a function to redirect to another page
  function redirectToAnotherPage() {
    // Set the window location to the specified URL
    window.location.href = "userlogin.html";
  }
// Execute the following code when the document is fully loaded
$(document).ready(function() {
  // Initialize datepicker for the element with id "datepicker"
  $("#datepicker").datepicker();

  // Validate the form with id "form"
  $("#form").validate({
    // Define validation rules for form fields
    rules: {
      lastName: {
        required: true, // Last name is required
        minlength: 3 // Last name must be at least 3 characters long
      },
      userName: {
        required: true // Username is required
      },
      password: {
        required: true, // Password is required
        minlength: 8 // Password must be at least 8 characters long
      },
      confirmPassword: {
        required: true, // Confirmation password is required
        equalTo: "#password" // Confirmation password must match the password field
      },
      email: {
        required: true, // Email is required
        email: true // Must be a valid email address
      },
      gender: {
        required: true // Gender is required
      }
    },
    // Define custom error messages for specific validation rules
    messages: {
      confirmPassword: {
        required: "Please confirm your password", // Custom message for required confirmation password
        equalTo: "Your passwords do not match" // Custom message for non-matching passwords
      }
    },
    // Define what happens on successful form submission
    submitHandler: function(form) {
      // Display a success message
      const messageElement = document.getElementById('errormessage');
      messageElement.textContent = 'Registration successful!';
      // Show the message, delay for a short period, then fade out and submit the form
      $('#errormessage').show().delay(500).fadeOut(500, function() {
        form.submit(); 
      });
    }
  });

  // JavaScript validation for occupation and gender fields
  const form = document.getElementById('form');
  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting initially

      // Perform manual validation
      const occupation = document.getElementById('occupation').value;

      // Validation logic
      let errorMessage = '';

      if (!occupation) {
        errorMessage += 'Occupation is required.\n';
      }

      // Display error message if any
      if (errorMessage) {
        alert(errorMessage);
        return false; // Prevent form submission
      } else {
        // If no errors, submit the form
        form.submit();
      }
    });
  }
});
