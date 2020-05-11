<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function get_user_skills(){
        $user = Auth::user();
        $skills = $user->profile->skills;

        // $plucked_skills = [];

        // foreach ($skills as $skill) {
        //     array_push($plucked_skills, $skill->title);
        // }

        return $skills;
    }
}
