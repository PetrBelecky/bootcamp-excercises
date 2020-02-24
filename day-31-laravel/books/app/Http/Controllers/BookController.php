<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BookController extends Controller
{
    public function index()
    {
        $books = DB::select("SELECT * FROM `books` WHERE 1");
        $name = "Petr";
        $surname = "Bělecký";
        $age = 29;

        // chaining methods
        /* return view('books')
            ->with('name', $name)
            ->with('surname', $surname); */

        // provide array as argument
        /* return view('books', [
            'name' => $name,
            'surname' => $surname
        ]); */

        // use compact function
        return view('books', compact('name', 'surname', 'age', 'books'));
    }
}
