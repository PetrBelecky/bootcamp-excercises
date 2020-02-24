<?php

//require database
require_once "DB.php";
require_once "DB_functions.php";

// connect to database
$success = DB::connect('127.0.0.1', 'wines', 'root', 'rootroot');

// truncate tables
DB::statement('TRUNCATE TABLE `authors`');
DB::statement('TRUNCATE TABLE `countries`');
DB::statement('TRUNCATE TABLE `types`');
// DB::statement('TRUNCATE TABLE `reviews`');
// DB::statement('TRUNCATE TABLE `wineries`');
// DB::statement('TRUNCATE TABLE `wines`');

// ----------------------------------------------------------
//                  COUNTRIES MIGRATION
// ----------------------------------------------------------

// build a query
$countries_query = "
  SELECT `country`
  FROM `wine_reviews_old`
";

// build an insert query
$countries_insert = "
  INSERT
  INTO `countries`
  (`name`)
  VALUES
  (?)
";

// select countries from old DB
$countries_from_review = DB::select($countries_query);

// create an array of country names (skip NULL values)
$countries = [];
foreach ($countries_from_review as $num => $country) {
    if (isset($country->country)) {
        $countries[] = $country->country;
    }
}

// delete duplicates
$countries = array_unique($countries);

// put every country into table in database
foreach ($countries as $key => $country_name) {
    DB::insert($countries_insert, $country_name);
}

// ----------------------------------------------------------
//                TYPES/VARIETIES MIGRATION
// ----------------------------------------------------------

// build a query
$types_query = "
  SELECT `variety`
  FROM `wine_reviews_old`
";

// build an insert query
$types_insert = "
  INSERT
  INTO `types`
  (`name`)
  VALUES
  (?)
";

// select types from old DB
$types_from_review = DB::select($types_query);

// create an array of type names (skip NULL values)
$types = [];
foreach ($types_from_review as $num => $type) {
    if (isset($type->variety)) {
        $types[] = $type->variety;
    }
}

// delete duplicates
$types = array_unique($types);

// put every type into table in database
foreach ($types as $key => $type_name) {
    DB::insert($types_insert, $type_name);
}

// ----------------------------------------------------------
//                AUTHORS/TASTERS MIGRATION
// ----------------------------------------------------------

//build a query
$authors_query = "
  SELECT `taster_name`, `taster_twitter_handle`
  FROM `wine_reviews_old`
  LIMIT 100
";

// build an insert query
$authors_insert = "
  INSERT
  INTO `authors`
  (`name`, `twitter`)
  VALUES
  (?, ?)
";

// select authors from old DB
$authors_from_review = DB::select($authors_query);

// create an array of country names (skip NULL values)
$authors = [];
foreach ($authors_from_review as $num => $item) {
    if (isset($item->taster_name)) {
        $authors[$num]['name'] = $item->taster_name;
    } else {
        $authors[$num]['name'] = 'no name';
    }

    if (isset($item->taster_twitter_handle)) {
        $authors[$num]['twitter'] = $item->taster_twitter_handle;
    } else {
        $authors[$num]['twitter'] = 'no twitter account';
    }
}

// remove duplicates
$authors = array_unique($authors, SORT_REGULAR);

// put every author into table in database
foreach ($authors as $key => $author) {
    if ($author['name'] != 'no name') {
        DB::insert($authors_insert, [$author['name'], $author['twitter']]);
    }
}

// ----------------------------------------------------------
//                REVIEWS MIGRATION
// ----------------------------------------------------------
