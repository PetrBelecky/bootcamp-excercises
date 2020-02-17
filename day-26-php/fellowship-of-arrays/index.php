<?php 
require_once "fellowship.php"; 
require_once "functions.php"; 

include "journey.php"; 
?>

<!DOCTYPE html>
<html lang="en"> 
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

<h1>Fellowship of Arays</h1>

<ul class="steps">
<?php 

  $url =  $_SERVER['REQUEST_URI'] .  "?index=";
  
  foreach ($steps as $key => $value) {
    echo "<li> <a href='" . $url . $value . "'>{$value}</a></li>";
  }

?>
</ul>

<?php

present_party($party); 

?>
  
</body>
</html>



