<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function get_user_skills(){
        $user = Auth::user();
        $skills = $user->profile->skills;
        return $skills;
    }
}
