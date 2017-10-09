<?php
include('connection.php');

$device = $_POST['desc'] ;
$country = $_POST['country'];

$query = "SELECT CONCAT(t.testerId, d.deviceId) ID, t.firstName firstName, COUNT(b.bugId) count, d.description device, t.country country FROM testers t 
    JOIN tester_device td ON t.testerId = td.testerId 
    JOIN devices d ON td.deviceId = d.deviceId 
    JOIN bugs b ON d.deviceId = b.deviceId 
    WHERE d.description = '$device' AND t.country ='$country' GROUP BY t.firstName, t.firstName, d.description, t.country";

$result = mysqli_query( $conn, $query );
            if( mysqli_num_rows($result) > 0 ) {

                $test_array = [];

                while( $row = mysqli_fetch_assoc($result) ) 
                {
                         $test_array[] = [
                                        "ID" => $row["ID"],
                                 "firstName" => $row["firstName"],
                                     "count" => $row["count"],
                                   "device"  => $row["device"],
                                  "country"  => $row["country"]   
                         ];
                }

              echo json_encode($test_array); 

            } else {
                $test_array = ["error" => "Whoops! No results found!"];
                echo json_encode($test_array); 
            }

?>