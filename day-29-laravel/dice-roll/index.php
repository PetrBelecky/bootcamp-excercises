<?php

class Dice
{
    private $lowest_num = 1;
    private $highest_num = 0;

    public function __construct($number_of_sides)
    {
        $this->highest_num = $number_of_sides;
    }

    public function __toString()
    {
        $random = rand($this->lowest_num, $this->highest_num);
        return '<div class="dice">' . $random . '</div>';
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Roll dice</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>

  <main>
    <form action="" method="get">
      <input type="number" name="dices" id="dices">
      <select name="sides" id="sides">
        <option value="4">4</option>
        <option value="6">6</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      <input type="submit" value="Generate">
    </form>

    <div class="dices-wrapper">
      <?php
        for ($i = 0; $i < $_GET['dices']; $i++) {
            echo new Dice($_GET['sides']);
        }
      ?>
    </div>
  </main>

</body>

</html>