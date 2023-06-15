<?php
$host = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "newsletter";


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Nie udało się połączyć z bazą danych: " . $conn->connect_error);
}

$email = $_POST['email'];

$sql = "INSERT INTO klienci (email) VALUES ('$email')";

if ($conn->query($sql) === TRUE) {
    echo "Zapisano pomyślnie!";
} else {
    echo "Wystąpił błąd podczas zapisywania danych: " . $conn->error;
}

$conn->close();
?>