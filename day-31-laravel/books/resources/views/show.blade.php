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
</style>

</head>
<body>

<main>
				<a class="back" href={{action('BookORMController@index')}}>
					Back to index, please
				</a>
				<h1>{{$book->title}}</h1>
				<p>Authors: {{$book->authors}}</p>
				<img src="{{$book->image}}">
</main>
    
</body>
</html>




