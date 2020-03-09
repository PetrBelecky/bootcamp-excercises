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

	form {
		display: flex;
		flex-direction: column;
		margin: 2rem 0;
	}

	input, textarea {
		margin: 0.5rem;
	}

	input {
		height: 2rem;
	}

	.error {
		font-size: 0.9rem;
		background-color: red;
		color: white;
		font-weight: bold;
		padding: 0.5rem;
	}

	.success {
		font-size: 0.9rem;
		background-color: green;
		color: white;
		font-weight: bold;
		padding: 0.5rem;
	}

	.error-input{
		border: 1px solid red;
	}

	ul {
		list-style: none;
	}

	.review {
		padding: 0.5rem;
		border: 1px solid lightgray;
		background: lightyellow;
		margin: 1rem;
		border-radius: 6px;
	}

	.review > p {
		font-size: 1rem;
	}

	.review > p:last-of-type {
		font-size: 0.7rem;
		color: grey;
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
				<p>Publisher: {{$book->publisher->title}}</p>
				<img src="{{$book->image}}">

				<div class="form-wrapper">
				<form 
				action={{action('BookORMController@storeReview', $book->id)}}
				method="POST">

					@csrf

					@if (Session::has('status'))
					<p class="success">{{Session::get('status')}}</p>
					@endif

					@error ('text') 
					<p class="error">Text of review is missing or exceeding 255 characters.</p>
					@enderror

					<label for="user">Your nickname</label>
					<input 
						@error ('user') class="error-input" @enderror
						type="text" 
						name="user" 
						id="form-user" 
						value="{{ old('user') }}">
					
					<label for="text">Your review</label>
					<textarea 
						@error ('text') class="error-input" @enderror
						name="text" 
						id="form-text" 
						cols="30" 
						rows="10" 
						value="{{ old('text') }}">
					</textarea>

					<input type="submit" value="Save review">
					</form>

					<ul>
						@foreach ($book->reviews as $review)
								<li>
									<div class="review">
									<p><strong>{{ $review->user }}</strong></p>
									<p>{{ $review->text }}</p>
									<p>{{ $review->created_at }}</p>
									</div>
								</li>
						@endforeach
					</ul>

				</div>
</main>
    
</body>
</html>




