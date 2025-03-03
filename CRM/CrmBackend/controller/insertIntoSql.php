<?php
include "db_connection.php";

$array = array("1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg");

// Check if all required POST variables are set
if (isset($_POST["part"], $_POST["year"], $_POST["make"], $_POST["model"], $_POST["variant"], $_POST["miles"], $_POST["pricing"], $_POST["stock"])) {

    // Escape special characters in POST data to prevent SQL injection
    $part = $conn->real_escape_string($_POST["part"]);
    $year = $conn->real_escape_string($_POST["year"]);
    $make = $conn->real_escape_string($_POST["make"]);
    $model = $conn->real_escape_string($_POST["model"]);
    $variant = $conn->real_escape_string($_POST["variant"]);
    $miles = $conn->real_escape_string($_POST["miles"]);
    $pricing = $conn->real_escape_string($_POST["pricing"]);
    $stock = $conn->real_escape_string($_POST["stock"]);
    $description = isset($_POST["desc"]) ? $_POST["desc"] : "-";
    $table = "transmission";
    $img;
    $warranty = "Upto 5 year warranty";
    $test = "100% Tested & Checked";
    $ship = "Free Shipping";
    $name = ucfirst($make) . " Used " . $part;
    if ($part == "Engine") {
        $table = "engine_1";
    }

    $img = array_rand($array);
    $img = "assets/img/real/" . $array[$img];


    // SQL query to insert data
    $sql = "INSERT INTO $table (part, year, make, model, variant, miles, pricing, Stock,tested_checked,warranty, shipping, image, name)
            VALUES ('$part', '$year', '$make', '$model', '$variant', '$miles', '$pricing', '$stock','$test','$warranty','$ship','$img','$name')";

    // Execute the query
    if ($conn->query($sql) === TRUE) {
        echo true;
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close connection
    $conn->close();
} else {
    echo "Required POST variables are missing.";
}
?>