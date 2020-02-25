<?php

namespace App\Http\Controllers;

use App\Book;
use App\Publisher;
use Illuminate\Http\Request;

class PublisherController extends Controller
{
    public function index()
    {
        $publishers = Publisher::all();
        return view('publishers/index', compact('publishers'));
    }

    public function show($id)
    {
        $publisher = Publisher::find($id);
        $books = Book::where('publisher_id', $id)->get();
        return view('publishers/show', compact('publisher', 'books'));
    }

    public function create()
    {
        return view('publishers/create');
    }

    public function store(Request $request)
    {
        /*       $new_publisher = new Publisher;
              $new_publisher->title = $request->input('title');
              $new_publisher->save(); */

        return $request->server();
    }
}
