
<?php

//1
$movie_name = "Arrival";

//2 + 7
$ratings = [
  "user1" => 69, 
  "user2" => 95, 
  "user3" => 82
];

//3 + 4
function format_rating ($rating) {
  return $rating . " %";
}

//5 + 6 + 10 + 11
foreach ($ratings as $user_id => $rating) {
    $name = get_username($user_id);
    $rating = format_rating($rating);

    echo "{$name} gave {$movie_name} a rating of {$rating}.<br><br>";
}

//8 
function get_username ($user_id) {

  //9
  $user_names = [
    'user1' => 'Bob',
    'user2' => 'Stuart',
    'user3' => 'Kevin'
  ];
  return $user_names[$user_id];
}



?>