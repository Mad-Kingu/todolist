<?php
$servername = "localhost";
$username = "root";
$password = "qwe123";
$dbname = "todolist";

if (isset($_POST['value']))
{
    $value = $_POST['value'];
}

if (isset($_POST['checked']))
{
    $checked = $_POST['checked'];
}

try
{
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO `list` (`value`, `checked`)
  VALUES ('" . $value . "', '" . $checked . "')";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "New record created successfully";
}
catch(PDOException $e)
{
    echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
?>
