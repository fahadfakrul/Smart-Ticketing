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

        $sql = "INSERT INTO ticket_info (passengername, number, email) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sss", $passengername, $number, $email);

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

