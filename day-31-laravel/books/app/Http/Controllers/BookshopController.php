<?php

namespace App\Http\Controllers;

use App\Book;
use App\Bookshop;
use Illuminate\Http\Request;

class BookshopController extends Controller
{
    public function index()
    {

        $bookshops = Bookshop::all();
        return view('bookshops.index', compact('bookshops'));
    }

    public function create()
    {
        return view('bookshops.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
            'city' => 'required|max:255'
        ]);

        $new_bookshop = new Bookshop;
        $new_bookshop->name = $request->name;
        $new_bookshop->city = $request->city;
        $new_bookshop->save();

        session()->flash('status', 'Bookshop was succesfully created.');
        return redirect()->action('BookshopController@index');
    }

    public function show($id)
    {
        $bookshop = Bookshop::findOrFail($id);
        $books = Book::all();

        return view('bookshops/show', compact('bookshop', 'books'));
    }

    public function addBook(Request $request, $id)
    {
        $bookshop = Bookshop::findOrFail($id);
        $book = $request->input('book');
        $bookshop->books()->attach($book);

        return redirect("/");
    }
}
