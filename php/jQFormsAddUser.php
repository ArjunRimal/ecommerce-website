<?php

// Define database connection variables
$servername = "localhost";
$username = "web";
$password = "web";
$dbname = "Project_db";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
  // Get form data and sanitize it
  $firstName = mysqli_real_escape_string($conn, $_POST["firstName"]);
  $lastName = mysqli_real_escape_string($conn, $_POST["lastName"]);
  $email = mysqli_real_escape_string($conn, $_POST["email"]);
  $password = mysqli_real_escape_string($conn, $_POST["password"]);
  $dob = mysqli_real_escape_string($conn, $_POST["dob"]);
  $userName = mysqli_real_escape_string($conn, $_POST["userName"]);
  $occupation = mysqli_real_escape_string($conn, $_POST["occupation"]);
  $gender = mysqli_real_escape_string($conn, $_POST["gender"]);
  
  // Hash the password using bcrypt
  $hashed_password = password_hash($password, PASSWORD_BCRYPT);
  
  // Prepare the SQL query to insert the data into the database
  $sql = "INSERT INTO users (firstName, lastName, userName, email, password, dob, occupation, gender)
          VALUES ('$firstName', '$lastName', '$userName', '$email', '$hashed_password', '$dob', '$occupation', '$gender')";
  
  // Execute the query and check for errors
  if (mysqli_query($conn, $sql)) {
    // Redirect to success page
    header("Location: ../html/userlogin.html");

    exit(); // Make sure that code execution stops after redirection
} else {
    // Display error message in an HTML element
    echo "<div>Error: " . $sql . "<br>" . mysqli_error($conn) . "</div>";
}
}

// Close the database connection
mysqli_close($conn);

?>