<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <h1>{{$bookshop->name}}</h1>
  <h3>{{$bookshop->city}}</h3>

<form 
  action="{{ action('BookshopController@addBook', $bookshop->id) }}" method="POST">

  @csrf
    <select name="" id="">
      @foreach ($books as $book)
      <option value="{{ $book->id }}">{{ $book->title }}</option>
      @endforeach
    </select>
    <input type="submit" value="Add to Bookshop">
  </form>
</body>
</html>