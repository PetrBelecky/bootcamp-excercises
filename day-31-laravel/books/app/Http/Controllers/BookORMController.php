<?php

namespace App\Http\Controllers;

use App\Book;
use App\Publisher;
use App\Genre;
use Illuminate\Http\Request;

class BookORMController extends Controller
{
    public function index()
    {
        $books = Book::all();
        return view('books/index', compact('books'));
    }

    public function show($id)
    {
        $book = Book::find($id);
        return view('books/show', compact('book'));
    }

    public function create()
    {
        $publishers = Publisher::all();
        return view('books/create', compact('publishers'));
    }

    public function store(Request $request)
    {
        $id = $request->input('publisher_id');
        $p = Publisher::where('title', $id)->value('id');
        
        $new_book = new Book;
        $new_book->title = $request->input('title');
        $new_book->authors = $request->input('authors');
        $new_book->image = $request->input('img');
        $new_book->publisher_id = $p;

        $new_book->save();
    }

    public function edit($id)
    {
        $book = Book::find($id);
        $publishers = Publisher::all();

        return view('books/edit', compact('book', 'publishers'));
    }

    public function update(Request $request, $id)
    {
        $book_to_update = Book::find($id);

        $id = $request->input('publisher_id');
        $p = Publisher::where('title', $id)->value('id');
        
        $book_to_update->title = $request->input('title');
        $book_to_update->authors = $request->input('authors');
        $book_to_update->image = $request->input('img');
        $book_to_update->publisher_id = $p;

        $book_to_update->save();
    }

    public function delete($id)
    {
        $book_to_delete = Book::find($id);
        $book_to_delete->delete();
    }
}
