<?php

use App\Mail\ContactMail;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;


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

Auth::routes();

Route::post('/contact-us', 'ContactMailController@sendMail');

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/first_attempt', 'HomeController@first_attempt');
Route::get('/authenticated_user', 'HomeController@auth_user');

// Google
Route::get('/redirect', 'Auth\LoginController@redirectToProvider')->name('google');
Route::get('/callback', 'Auth\LoginController@handleProviderCallback');


// Route::get('/profile/create', 'ProfileController@create');
Route::get('/profile/{profile_id}', 'ProfileController@show');// No authentication
Route::put('/profile/{profile_id}/edit', 'ProfileController@edit');