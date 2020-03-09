<?php

namespace App;

use App\Book;
use Illuminate\Database\Eloquent\Model;

class Bookshop extends Model
{
    protected $fillable = ['name, city'];

    public function books()
    {
        return $this->belongsToMany(Book::class);
    }
}
