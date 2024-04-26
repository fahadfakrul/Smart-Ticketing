<?php
if(isset($_POST['submit'])) {
    $passengername = filter_input(INPUT_POST, 'passengername');
    $number = filter_input(INPUT_POST, 'number');
    $email = filter_input(INPUT_POST, 'email');

    if (!empty($passengername) && !empty($number) && !empty($email)) {
        $host = "localhost";
        $dbusername = "root";
        $dbpassword = "";
        $dbname = "smart-ticketing";

        $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "INSERT INTO ticket_info (passengername, number, email,seat_number, seat_type, fare) VALUES (?, ?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sss", $passengername, $number, $email,  $seat_number, $seat_type, $fare);

        $seatData = $_POST['seatData']; // Assuming seatData is sent from JavaScript

// Loop through each seat data and execute the SQL statement
foreach ($seatData as $seat) {
    $seat_number = $seat['seatNumber'];
    $seat_type = $seat['seatType'];
    $fare = $seat['fare'];
    $stmt->execute();
}

        if ($stmt->execute()) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }

        $stmt->close();
        $conn->close();
    } else {
        echo "All fields are required";
    }
}
?>

