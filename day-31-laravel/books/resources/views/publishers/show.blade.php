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
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	main {
		width: 80%;
	}

	h1 {
		margin: 2rem;
	}
	
	p {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	a {
		margin: 1rem 1rem;
	}

	.book {
		width: 20rem;
		height: 30rem;
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

	.books__wrapper {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	
	}
</style>

</head>
<body>

<main>

			@if ($publisher->id !== 1)		
			<a class="back" href={{action('PublisherController@show', [$publisher->id-1])}}>
				<< PREVIOUS
			</a>
			@endif

				<a class="back" href={{action('PublisherController@index')}}>
					Back to index, please
				</a>

				@if ($publisher->id !== 4)

				<a class="back" href={{action('PublisherController@show', [$publisher->id+1])}}>
					NEXT >>
				</a>
				@endif

				
				<h1>{{$publisher->title}}</h1>
				
				<h2>Released books</h2>

				
				<div class="books__wrapper">
					@foreach ($books as $book)
					<div class="book">
						<h3>{{$book->title}}</h3>
						<h4>Authors: {{$book->authors}}</h4>
						<img src="{{$book->image}}">
						<a class="book__more" href= {{action('BookORMController@show', [$book->id])}}>Read more</a>
					</div>	
					@endforeach
				</div>
</main>
    
</body>
</html>




