<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Profile;
use App\Skill;

class ProfileController extends Controller
{
    public function create(Request $request)
    {
        $profile = new Profile;
        $profile->bio = 'bla bla bla bla bla bla bla bla bla';
        $profile->linked_profile = 'linkein.com/mohdyasiralali';
        $profile->user_id = 1;

        $profile->save();

        return $profile->skills();
        $skills = Skill::find([1, 2, 3]);
        $profile->skills()->attach($skills);



        return 'Success';
    }
}
