<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/books', 'BookORMController@index');
Route::post('/books', 'BookORMController@store');
Route::get('/books/create', 'BookORMController@create');
Route::get('/books/{id}', 'BookORMController@show');

Route::get('/books/{id}/edit', 'BookORMController@edit');
Route::post('/books/{id}/edit', 'BookORMController@update');

Route::get('/books/{id}/delete', 'BookORMController@delete');

Route::get('/publishers/create', 'PublisherController@create');
Route::post('/publishers', 'PublisherController@store');
Route::get('/publishers', 'PublisherController@index');
Route::get('/publishers/{id}', 'PublisherController@show');


Route::get('/api/books', 'APIBookController@index');
