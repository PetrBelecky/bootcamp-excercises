<?php

class Region {
  public $name = null;
  public $slug = null;
  public $id = null;

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

    $this->id = last_insert_id();
  }

  public function update () {
    if (!$this->id) {
      return false;

    }  else {
      
      $query = "
      UPDATE `Region`
      SET `name` = ?,
          `slug` = ?
      WHERE `id` = ?
      LIMIT 1";

      update($query, [$this->name, $this->slug, $this->id ]);
    }
  }

  public function save() {
    if ($this->id) {
      $this->update();
    } else {
      $this->insert();
    }
  }

  public function delete() {
    if(!$this->id) {
      return false;
    }

    $query = "
    DELETE 
    FROM `region`
    WHERE `id` = ?;
    ";

    delete($query, [$this->id]);

  }
}