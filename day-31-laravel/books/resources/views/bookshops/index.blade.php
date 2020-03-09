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

	.bookshops__wrapper {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		margin-top: 2rem;
	
	}

	.bookshop {
		width: 20rem;
		height: 5rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		flex-shrink: 0;
		text-align: center;
		color: #333;
		box-shadow: 0 0 6px 0 lightgray;
		border-radius: 6px;
		margin: 1rem 1rem;
		padding: 1rem;
	}


	.success {
		font-size: 0.9rem;
		background-color: green;
		color: white;
		font-weight: bold;
		padding: 0.5rem;
		margin-bottom: 0.5rem;
	}

</style>

</head>
<body>

<main>
	<h1>Books list</h1>

	@if (Session::has('status'))
		<p class="success">{{Session::get('status')}}</p>
	@endif

	<a 
		href="{{ action('BookshopController@create') }}"> 
		New Bookshop
	</a>
	
	<div class="bookshops__wrapper">
		@foreach ($bookshops as $bookshop)
		<div class="bookshop">
				<p> {{$bookshop->name}} | {{$bookshop->city}}</p>
			</div>
	@endforeach
	</div>
</main>
    
</body>
</html>




