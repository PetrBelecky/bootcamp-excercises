<?php

class Celebrity {
  public $name = null;
  public $photo = null;
  public $earnings = null;
  public $age = null;
  public $citizenship = null;
  public $events = [];
  

  public function loadFromArray($array) {
    $this->name = $array["name"];
    $this->photo = $array["photo"];
    $this->earnings = $array["earnings"];
    $this->age = $array["age"];
    $this->citizenship = $array["citizenship"];
    $this->age = $array["age"];
    foreach ($array["events"] as $key => $event) {
      $this->events[] = $event;
    }
  }
}