<?php

class Region {
  public $name = null;
  public $slug = null;

  public function insert() {

    $arr = explode(' ', strtolower($this->name));
    $this->slug = $arr[0] . '-' .$arr[1];

    insert("
      INSERT
      INTO `region`
      (`name`, `slug`)
      VALUES
      (?, ?)
    ", [$this->name, $this->slug]);
  }
}