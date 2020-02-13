<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>First PHP</title>
</head>

<body>

<style>
body {
  font-family: "Arial, Helvetica, sans-serif";
  font-size: 1.1rem;
}

</style>

  <?php
    define("SERVER_SOFTWARE", "Apache");
    define("MY_OS", "Mac OS Catalina");

    $first_name = "Petr";
    $surname = "Bělecký";
    $year_of_birth = 1990;
    $height = 180;

    echo "<p>" . "First name: " . $first_name . "</p>";
    echo "<p>" . "Surname: " . $surname . "</p>";
    echo "<p>" . "Year of birth " . $year_of_birth . "</p>";
    echo "<p>" . "Height: " . $height . "</p>";
    echo "<p>" . "This server is runing on " . SERVER_SOFTWARE . "." . "</p>";
    echo "<p>" . "My operating sytem is " . MY_OS . "." . "</p>";

    function greet($whom) {
      return "<p>" . "Hello, {$whom}!" . "</p>";
    }

    echo greet("Prague");

    $cars_i_want = [];
    array_push($cars_i_want, "Aston Martin", "Bugatti", "Ferrari", "Lamborghini", "Maserati", "Mercedes", "Porsche", "Skoda");
    print_r($cars_i_want); 

    echo "<p>" . "For myself I would buy " . $cars_i_want[1] . ".</p>";
    echo "<p>" . "For my spouse I would buy " . $cars_i_want[3] . ".</p>";

    $cars_i_want[4] = "Smart";

    echo "<p>" . "Each of my kid will get " . $cars_i_want[4] . ".</p>";

    echo "<ul>";
    foreach ($cars_i_want as $key => $car) {
      echo "<li> {$car} </li>";
    }
    echo "</ul>";

    $car_prices = [
      'Skoda Octavia' => 270000,
      'Volkswagen Golf' => 170000,
      'BMW X6' => 380000,
      'Porsche 911' => 1150000
  ];

  print_r($car_prices);

  foreach ($car_prices as $car => $price) {
    echo "<p>" . "You can have a ${car} for just a ${price} CZK.</p>";
  }
  ?>

</body>

</html>