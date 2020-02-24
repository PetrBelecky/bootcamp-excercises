<?php

//require database
require_once "DB.php";
require_once "DB_functions.php";

// connect to database
$success = DB::connect('localhost', 'games', 'root', 'rootroot');

// select all games
$select_games_query = '
  SELECT `games`. *
  FROM `games`
  ORDER by `name` ASC
';

$games = DB::select($select_games_query);

// go through return and grab the games IDs
// make an array of IDs
$game_ids = [];
foreach ($games as $key => $game) {
    $game_ids[] = $game->id;
}

// generate a string with question marks for every item in array
$question_marks = join(', ', array_fill(0, count($game_ids), '?'));

// select game_id + corresponding genres
$select_genres_query = "
  SELECT `game_genre`.`game_id`, `genres`. *
  FROM `game_genre`
  LEFT JOIN `genres`
    ON `game_genre` . `genre_id` = `genres` . `id`
  WHERE `game_genre`.`game_id` IN ({$question_marks})  
";

// save query into $genres variable
$genres = DB::select($select_genres_query, $game_ids);
/* var_dump($genres); */

$genres_for_games = [];
foreach ($genres as $key => $genre) {
    $genres_for_games[$genre->game_id] = $genre;
}
/* var_dump($genres_for_games); */

foreach ($games as $game) {
    $game->genres = $genres_for_games[$game->id];
}
/* var_dump($games);

/* header('Content-type: application/json');
echo json_encode($games); */
