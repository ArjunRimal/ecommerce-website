function redirectToAnotherPage() {
    window.location.href = "../html/register.html";
}

$(document).ready(function() {
    // Event listener for form submission
    $("#form").on("submit", function(event) {
        let email = $("#email").val();
        let password = $("#password").val();

        if (!validateEmail(email)) {
            alert("Invalid email format!");
            event.preventDefault(); // Prevent form submission
            return false;
        }

        if (!validatePassword(password)) {
            alert("Password must be at least 8 characters long");
            event.preventDefault(); // Prevent form submission
            return false;
        }
    });

    // Function to validate email format
    function validateEmail(email) {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to validate password format using regex
    function validatePassword(password) {
        let passwordRegex = /^.{8,}$/;
        return passwordRegex.test(password);
    }    

    // Event listener for storing username in session storage
    document.getElementById("button1").addEventListener("click", function() {
        var username = document.getElementById("userName").value;
        sessionStorage.setItem("username", username);
    });
});
