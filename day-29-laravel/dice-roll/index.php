<?php

class Dice
{
    protected $lowest_num = 1;
    protected $highest_num = 6;

    public function roll()
    {
        $random = rand($this->lowest_num, $this->highest_num);
        echo '<div class="dice">' . $random . '</div>';
    }

    public function __toString()
    {
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
      <input type="number" name="dices" id="count-of-dices">
      <input type="submit" value="Generate">
    </form>

    <div class="dices-wrapper">
      <?php
        for ($i = 0; $i < $_GET['dices']; $i++) {
            $dice = new Dice;
            $dice->roll();
        }
      ?>
    </div>
  </main>

</body>

</html>