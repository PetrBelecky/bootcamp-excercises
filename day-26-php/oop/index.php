<?php

require_once "./classes/User.php";

$steve = new User("steve");  

$steve->id = 1;
$steve->name = "Stephen"; 

$bob = new User("bob");  

$bob->id = 2;

$bob->name = "Bob"; 

echo "The name of user {$steve->id} is {$steve->name}.<br>";
echo "The name of user {$bob->id} is {$bob->name}.<br>";

$steve->dumpMe();
$bob->dumpMe();

