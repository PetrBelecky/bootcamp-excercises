<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Books</title>

<style>
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	body {
		background-color: whitesmoke;
		font-family: sans-serif;
		max-width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	main {
		width: 80%;
	}

	h1 {
		margin: 2rem;
	}

	.books__wrapper {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	
	}

	.book {
		width: 20rem;
		height: 22rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		flex-shrink: 0;
		text-align: center;
		color: #333;
		box-shadow: 0 0 6px 0 lightgray;
		border-radius: 6px;
		margin: 1rem;
		padding: 1rem;
	}

	.book__more {
		text-decoration: none;
		padding: 0.6rem 1.5rem;
		border: 1px solid #1b7dfc;
		color: white;
		border-radius: 4px;
		background-color: #1b7dfc; 	
	}

	.book__more:hover {
		background-color: #016fff; 	
	}

</style>

</head>
<body>

<main>
	<h1>Creation Form for Books</h1>
	<form action="http://exercises:8080/day-31-laravel/books/public/books/{{$book->id}}/edit" method="post">
		@csrf
		<input type="text" name="title" value="{{$book->title}}">
		<input type="text" name="authors" value="{{$book->authors}}">
		<input type="text" name="img" value="{{$book->image}}">

		<select name="publisher_id" id="">
			@foreach ($publishers as $publisher)
				<option value="{{$publisher->title}}">
					{{$publisher->title}}
				</option>
			@endforeach
		</select>

		<input type="submit" value="Submit me">
	</form>
</main>
    
</body>
</html>




