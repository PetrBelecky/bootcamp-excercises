<?php

namespace App;

use App\Review;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $table = 'books';

    public function publisher()
    {
        return $this->belongsTo(Publisher::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function bookshops()
    {
        return $this->belongsToMany(Bookshop::class);
    }
}
