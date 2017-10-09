<?php

$server = "localhost";
$username = "root";
$password = "root";
$dbname = "dev";

// Create connection
$conn = mysqli_connect($server, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect());
} 

//echo "Connection Successful";

?>