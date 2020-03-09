<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Your cart</title>
</head>
<body>
  <h1> Books in your cart </h1>

  @foreach ($items as $cart_item)
    <p> Count: {{$cart_item->count }}</p>
    <p> Id: {{$cart_item->id}}</p>
    <p> Title: {{$cart_item->book->title}}</p>
  @endforeach
  
</body>
</html>