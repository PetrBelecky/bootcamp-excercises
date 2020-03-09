<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Bookshop</title>

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

	.error {
		font-size: 0.9rem;
		background-color: red;
		color: white;
		font-weight: bold;
		padding: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.success {
		font-size: 0.9rem;
		background-color: green;
		color: white;
		font-weight: bold;
		padding: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.error-input{
		border: 1px solid red;
	}


</style>

</head>
<body>

<main>
	<h1>Creation Form for Bookshop</h1>
	<form 
		action="{{ action('BookshopController@store',) }}" 
		method="POST">
		
		@csrf

		@if (Session::has('status'))
			<p class="success">{{Session::get('status')}}</p>
		@endif

		@error ('city') <p class="error">{{ $message }}</p> @enderror
		@error ('name') <p class="error">{{ $message }}</p> @enderror

		<input 
			type="text" 
			name="name" 
			placeholder="Enter name of bookshop" 
			value="{{ old('name') }}">

		<input 
			type="text" 
			name="city" 
			placeholder="Enter name of city"
			value="{{ old('city') }}">

		<input type="submit" value="Submit me"> 
	</form>
</main>
    
</body>
</html>




