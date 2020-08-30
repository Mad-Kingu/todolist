<?php
$servername = "localhost";
$username = "root";
$password = "qwe123";
$dbname = "todolist";

if (isset($_POST['id']))
{
    $id = $_POST['id'];
}

try
{
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "DELETE FROM `list` WHERE id = " . $id;
    // use exec() because no results are returned
    $conn->exec($sql);
}
catch(PDOException $e)
{
    echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
?>
