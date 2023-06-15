<?php

$cartData = $_POST['cart'];

$cart = json_decode($cartData);

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'your_database';

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}

foreach ($cart as $item) {
    $id = $item->id;
    $name = $item->name;
    $price = $item->price;

    $sql = "INSERT INTO cart (id, name, price) VALUES ('$id', '$name', '$price')";

    if (!mysqli_query($conn, $sql)) {
        die('Error inserting cart data: ' . mysqli_error($conn));
    }
}

mysqli_close($conn);

?>
