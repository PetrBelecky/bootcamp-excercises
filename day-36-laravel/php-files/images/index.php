<?php

//var_dump(pathinfo(__FILE__));
//var_dump(basename(__FILE__));
//var_dump(dirname(__FILE__));

$a = scandir(__DIR__);
//var_dump($a);

$handle = opendir(__DIR__);

while ($file = readdir($handle)) {
    var_dump($file);
}
closedir($handle);

mkdir('2020');
rmdir('2020');

var_dump(is_dir('images'));

var_dump(file_exists('photos.txt'));

$handle_file = fopen('photos.txt', 'r');

$line = fgets($handle_file);
var_dump($line);

fclose($handle_file);
