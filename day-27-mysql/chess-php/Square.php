<?php

class Square {  
  protected $x_coord = NULL;
  protected $y_coord = NULL;
  protected $piece = NULL;

  protected function isDark() {
    if ($this->x_coord % 2 === 0 && $this->y_coord % 2 === 0) {
      return true;
    } else if ($this->x_coord % 2 !== 0 && $this->y_coord % 2 !== 0) {
      return true;
    } else {
      return false;
    }
  }

  public function __construct ($x, $y, $piece = NULL) {
    $this->x_coord = $x;
    $this->y_coord = $y;
    $this->piece = $piece;
  }

  public function __toString () { 

    if ($this->isDark() === true) {
      return'<div class="dark">' . $this->piece . '</div>';
    } else {
      return '<div class="light">' . $this->piece . '</div>';
    }
     
  }


}