<?php
require_once "DB.php";
require_once "DB_functions.php";

$success = connect('localhost', 'games', 'root', 'rootroot');

if (!$_GET || $_GET["orderby"] === 'name') {
  if ($_GET['way'] === 'asc') {
    $result = (select('
    SELECT *
    FROM `games`
    WHERE 1
    ORDER BY `name` ASC
  '));
  } else if ($_GET['way'] === 'desc') {
    $result = (select('
    SELECT *
    FROM `games`
    WHERE 1
    ORDER BY `name` DESC
  '));
  } else {
    $result = (select('
    SELECT *
    FROM `games`
    WHERE 1
    ORDER BY `name` ASC
  '));
  }
} elseif ($_GET['orderby'] === 'rating') {
  if ($_GET['way'] === 'asc') {
    $result = (select('
    SELECT *
    FROM `games`
    WHERE 1
    ORDER BY `rating` ASC
  '));
  } elseif ($_GET['way'] === 'desc') {
    $result = (select('
    SELECT *
    FROM `games`
    WHERE 1
    ORDER BY `rating` DESC
  '));
  } else {
    $result = (select('
    SELECT *
    FROM `games`
    WHERE 1
    ORDER BY `rating` ASC
  '));
  }
}

header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');
echo json_encode($result);
