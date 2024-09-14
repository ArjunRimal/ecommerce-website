<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['email'])) {
    echo "User is not logged in.";
    exit;
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Define database connection variables
    $servername = "localhost";
    $username = "web";
    $password = "web";
    $dbname = "Project_db";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Get the email of the signed-in user from the session
    $email = $_SESSION['email'];

    // Get the values from the form
    $gender = $_POST['gender'];
    $occupation = $_POST['occupation'];
    $dob = $_POST['dob'];

    // Update user information in the database
    $sql = "UPDATE users SET ";

    // Array to hold the fields and values to update
    $updateFields = array();

    // Check and add gender to updateFields if not empty
    if (!empty($gender)) {
        $updateFields[] = "gender='$gender'";
    }

    // Check and add occupation to updateFields if not empty
    if (!empty($occupation)) {
        $updateFields[] = "occupation='$occupation'";
    }

    // Check and add dob to updateFields if not empty
    if (!empty($dob)) {
        $updateFields[] = "dob='$dob'";
    }

    // If there are fields to update, construct the SQL query
    if (!empty($updateFields)) {
        $sql .= implode(", ", $updateFields) . " WHERE email='$email'";
        
        // Execute the SQL query
        if ($conn->query($sql) === TRUE) {
            echo "Record updated successfully";
        } else {
            echo "Error updating record: " . $conn->error;
        }
    } else {
        // No fields to update
        echo "No fields to update.";
    }

    $conn->close();
    exit; // Stop further execution
}
?>

// The rest of your code to display the form and pre-fill it with user information goes here
