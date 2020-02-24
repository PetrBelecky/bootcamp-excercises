<?php

namespace App\Http\Controllers;

use App\Book;
use Illuminate\Http\Request;

class BookORMController extends Controller
{
    public function index()
    {
        $books = Book::all();
        return view('index', compact('books'));
    }

    public function show($id)
    {
        $book = Book::find($id);
        return view('show', compact('book'));
    }
}
