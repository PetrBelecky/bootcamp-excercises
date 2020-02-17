
<?php

$my_name = "Petr Bělecký";
$height = 180;

function headline($text)
{
  return "<h1> ${text} </h1>";
}
echo headline("My website!");

// -----------------------

$inches = 12;
function inchesToCentimeters($num)
{
  return $num * 2.54;
}
echo inchesToCentimeters($inches);
echo "<br>";

$celsius = 100;

function celsiusToFahrenheit($degrees)
{
  return ((9 / 5) * $degrees) + 32;
}

function fehrenheitToCelsius($degrees)
{
  return ($degrees - 32) * 5 / 9;
}

echo celsiusToFahrenheit($celsius);
echo "<br>";

$temperature = 36.5;
$temperature_f = 99;

function isHealthy($temp, $metricSystem)
{
  if ($metricSystem === "f") {

    if (fehrenheitToCelsius($temp) < 37) {
      return "true";
    } else {
      return "false";
    }
  } elseif ($metricSystem === "c") {
    if ($temp < 37) {
      return "true";
    } else {
      return "false";
    }
  }
}

echo "Is healthy? : " . isHealthy($temperature, "c");
echo "<br>";
echo "Is healthy? : " . isHealthy($temperature_f, "f");
echo "<br>";

$number = 42;

function evenOrOdd($num)
{
  return $num % 2 == 0 ? "even" : "odd";
}

$weekday = "Friday";
function sayWeekday ($weekday_name) {
  echo "Today is {$weekday_name}";
  echo "<br>";
} 
sayWeekday ($weekday);

$year_of_birth = 1990;
function sayBirthday ($year) {
  $this_year = date("Y");
  echo "I was born in {$year} so this year I am celebrating my " . ($this_year - $year) . ". birthday";
  echo "<br>";
}

sayBirthday($year_of_birth);


function assessHeight ($height) {
  if($height >= 180 ) {
    return "tall";
  } elseif ($height < 180 && $height >= 160) {
    return "average";
  } elseif ($height < 160) {
    return "small";
  } else {
    return "Invalid value";
  }
}

echo assessHeight($height);
echo "<br>";

function getLanguageUsage ($lang) {

  $lang = strtolower($lang);

  switch ($lang) {
    case 'php':
    case 'python':
    case 'ruby':
      return "serverside";
    break;

    case 'javascript':
        return "clientside";
    break;
    
    default:
      return "I don't know";
      break;
  }
}

echo getLanguageUsage("php");

echo "<br>";

$time_served = 0;
$time_served_2 = 0;

while($time_served < 5) {
  $time_served++;
  echo "The prisoner has served {$time_served} years <br>";
}

echo "<br>";

do {
  echo "The prisoner has served {$time_served_2} years <br>";
  $time_served_2++;
} 
while($time_served_2 < 5);

echo "<br>";

for ($i=0; $i < 5; $i++) { 
  echo "The prisoner has served {$i} years <br>";
}

echo "<br>";

for ($i = 10; $i > 0 ; $i--) { 
  echo "The prisoner has {$i} more years to serve.";
  echo "<br>";

  if ($i > 5) continue;

  echo "Going to a parole hearing...";
  echo "<br>";
 
  if ($i === 2) {
    echo "Paroled!";
    echo "<br>";
    break;
  }

}

echo "<br>";
echo "<br>";
echo "<br>";


$array = array();

for($i = 1; $i <= 100; $i++) {
    array_push($array, $i);
}

$string = "I am a simple string";

// Create a variable $arrayDouble containing the double of each value of $array

$arrayDouble = [];

foreach ($array as $key => $value) {
  $arrayDouble[] = $value *= 2;
}

print_r($arrayDouble);

echo "<br>";
echo "<br>";

// Create two variables $arrayEven and $arrayOdd containing the Even numbers contained in $array and the Odd numbers contained in $array

$arrayEven = [];
$arrayOdd = [];

foreach ($array as $key => $value) {
  if ($value % 2 === 0) {
    $arrayEven[] = $value;
  } else {
    $arrayOdd[] = $value;
  }
}

print_r($arrayEven);

echo "<br>";
echo "<br>";

print_r($arrayOdd);

echo "<br>";
echo "<br>";

// Create a variable $arrayProduct containing the product of each numbers of $array

function arrayProduct($array) {
  $arrayProduct = 1;

  foreach ($array as $key => $value) {
    $arrayProduct = $arrayProduct * $value;
  }
  print_r($arrayProduct);
}
echo arrayProduct($array);

// Create a variable $stringUpper containing the $string value in uppercase

$stringUpper = 

print_r($stringUpper);

?>