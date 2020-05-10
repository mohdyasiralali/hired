<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function first_attempt()
    {
        $user = Auth::user();
        // return $user->profile->first_attempt;
        return response()->json([
            'first_attempt' => $user->profile->first_attempt,
            'user_id' => $user->id
            // 'profile' => $user->profile
        ]);
    }

    public function auth_user()
    {
        $user = Auth::user();
        $return_user = [
            'user_id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'avatar' => $user->avatar
        ];
        return $return_user;
    }
}
