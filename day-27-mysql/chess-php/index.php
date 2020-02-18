<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chessgame</title>
  <link rel="stylesheet" href="style.css">

</head>
<body>
<main>


<?php


require_once "Square.php";
require_once "Board.php";

$board = new Board();
echo $board->string();


/* $black_pawn = new Piece('p');
$white_queen = new Piece('Q'); */

//$a2 = new Square(1, 2);
/* $b2 = new Square(2, 2, $white_queen);
$c2 = new Square(3, 2, $black_pawn);
$d2 = new Square(4, 2); */

/* echo $a2; */
/* echo $b2;
echo $c2;
echo $d2; */

?>
</main>
  
</body>
</html>