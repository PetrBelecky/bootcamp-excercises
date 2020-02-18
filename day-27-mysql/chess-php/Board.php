<?php
require_once "Square.php";
require_once "Piece.php";

class Board {
  protected $array = [

  1 => [8 => 'r', 7 => 'p', 2 => 'P', 1 => 'R'],
  2 => [8 => 'n', 7 => 'p', 2 => 'P', 1 => 'N'],
  3 => [8 => 'b', 7 => 'p', 2 => 'P', 1 => 'B'],
  4 => [8 => 'q', 7 => 'p', 2 => 'P', 1 => 'Q'],
  5 => [8 => 'k', 7 => 'p', 4 => 'P', 1 => 'K'],
  6 => [8 => 'b', 7 => 'p', 2 => 'P', 1 => 'B'],
  7 => [8 => 'n', 7 => 'p', 2 => 'P', 1 => 'N'],
  8 => [8 => 'r', 7 => 'p', 2 => 'P', 1 => 'R'],
  ];


 public function string() {
  // render board

  // 8 rows
  for ($i=1; $i < 9; $i+=1) { 

    for ($j= 1; $j < 9 ; $j+= 1) { 

      if ($this->array[$i][$j]) {
        $square = new Square($i, $j, new Piece($this->array[$i]["$j"]));
        echo $square;
      } else {
        $square = new Square($i, $j);
        echo $square;
      }
    
    }
  }
}

}
