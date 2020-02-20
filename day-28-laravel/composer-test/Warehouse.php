<?php 

class Warehouse {
  public $name = null;
  protected $number_of_crates = 0;
  protected $crates = [];

  public function createCrate ($contents) {
    $this->number_of_creates++;
    $this->crates[] = $contents;
  }
}