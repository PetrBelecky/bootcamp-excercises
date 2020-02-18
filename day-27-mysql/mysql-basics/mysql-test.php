<?php

require_once "DB.php";
require_once "DB_functions.php";
require_once "Country.php";

$success = connect('localhost', 'world', 'root', 'rootroot');

// select from DB and put results in defined Class
$result = select('
SELECT *
FROM `country`
WHERE `population` > 20000000
ORDER BY `population` DESC
LIMIT 2
', [], 'Country');

var_dump($result);

echo "<br>";
echo "-------------";
echo "<br>";

// select from DB and put results in defined Class
// use value substition to prevent SQL injection
$result = select('
SELECT *
FROM `country`
WHERE `population` > ?
ORDER BY `population` DESC
LIMIT 2
', [20000000], 'Country');

var_dump($result);

echo "<br>";
echo "-------------";
echo "<br>";

// SQL query that would select only first 100 rows of the city table
// with biggest population 
$result = select('
SELECT *
FROM `city`
ORDER BY `Population`
LIMIT 100
');

var_dump($result);

echo "<br>";
echo "-------------";
echo "<br>";
echo "Fuction: ";

// select records from the city table for one page of a list
// where each page has 20 items 
// and the parameter $page_nr is the number of the page
function query($page_number) {

  $offset = max(0, ($page_number - 1) * 20);

  return select("
    SELECT *
    FROM `city`
    ORDER BY `Population`
    LIMIT {$offset}, 20
  ");
}

var_dump(query(1));