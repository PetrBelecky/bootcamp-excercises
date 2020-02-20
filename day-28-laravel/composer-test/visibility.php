<?php

require_once "Warehouse.php";

$trainyard = new Warehouse;
$trainyard->name = 'Trainyard Warehouse';
$trainyard->createCrate('Black box');
$trainyard->createCrate('Black box');
$trainyard->createCrate('Black box');

$docks = new Warehouse;
$docks->name = 'Docks Warehouse';

var_dump($trainyard);
var_dump($docks);