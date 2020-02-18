<?php

require_once "data.php";
require_once "Celebrity.php";

$celebrities = [];

foreach ($data as $key => $value) {
  $celebrity = new Celebrity();
  $celebrity->loadFromArray($value);
  $celebrities[] = $celebrity;
}

header('Content-type: application/json');
echo json_encode($celebrities);