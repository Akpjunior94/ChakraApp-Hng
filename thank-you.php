<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You</title>
</head>
<body>
  <?php
  
function dbRunQuery ($sql)
{
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbName = "chakra";
  
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbName);
  
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  echo "Connected successfully";

  if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

$conn->close();
}
  function sendMail()
  {
    if (empty($_POST['email']) || !filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)){
      return false;
    }
    
    $to = $_POST['email'];
    $subject = "Chakra Newsletter";
    $txt = "Thank You For Subscribing To Chakra Newsletter";
    $headers = "from: webmaster@chakra.app";
  
    if (mail($to, $subject, $txt, $headers)) {
      $sql = "INSERT INTO subscribers (email) VALUES ('" . $_POST['email'] . "')";
      dbRunQuery($sql);
      return true;
    }
  }  
  ?>

  <?php if (sendMail()) { ?>
    <h1>Thank Your for Subscribing to Chakra Newsletter. You will receive an Email when the App is Up and Running.. Thanks and Be Ready</h1>
  <?php } else { ?>
    <p>Oops!!! Sorry you lost way</p>
    <a href="index.php">Go back to homepage</a>
  <?php } ?>

  
</body>
</html>