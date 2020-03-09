<?php

namespace App\Http\Controllers;

use App\CartItem;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index()
    {
        $items = CartItem::all();
        //return $items;

        return view('cart/index', compact('items'));
    }
}
