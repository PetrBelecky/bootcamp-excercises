<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \DB as DB;

class APIBookController extends Controller
{
    public function index()
    {
        if (!$_GET || $_GET['page'] <= 1) {
            $query = "
                SELECT *
                FROM `books`
                WHERE 1
                LIMIT 0, 4
            ";
        } elseif ($_GET['page'] > 1) {
            $offset = ($_GET['page'] - 1) * 4;

            $query = "
                SELECT *
                FROM `books`
                WHERE 1
                LIMIT {$offset}, 4"
            ;
        }

        $books = DB::select($query);
        json_encode($books);
        return ($books);
    }
}
