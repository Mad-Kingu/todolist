<?php
$servername = "localhost";
$username = "root";
$password = "qwe123";
$dbname = "todolist";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn)
{
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT id, value, checked FROM list";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0)
{
    // output data of each row
    while ($row = mysqli_fetch_assoc($result))
    {
        if ($row["checked"])
        {
            echo "<li class=\"ui-sortable-handle checked\" id=" . $row["id"] . "> " . $row["value"] . " <span class=\"close\">×</span> </li>";
        }
        else
        {
            echo "<li class=\"ui-sortable-handle\" id=" . $row["id"] . "> " . $row["value"] . " <span class=\"close\">×</span> </li>";
        }
    }
}
else
{
    echo "0 results";
}

mysqli_close($conn);
?>
