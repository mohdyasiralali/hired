<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
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

        $skills = Skill::find([1, 2, 3]);
        $profile->skills()->attach($skills);

        return 'Success';
    }

    public function show($id)
    {
        $profile = Profile::find($id);
        $user = User::find($profile->user_id);
        $skills = $profile->skills;
        // $skills = $profile->skills->pluck('title');
        $plucked_skills = [];

        foreach ($skills as $skill) {
            array_push($plucked_skills, $skill->title);
        }

        return response()->json([
            'profile' =>
            [
                'name' => $user->name,
                'email' => $user->email,
                'avatar' => $user->avatar,
                'bio' => $profile->bio,
                'birth_day' => $profile->birth_day,
                'linked_profile' => $profile->linked_profile,
                'facebook_profile' => $profile->facebook_profile,
                'profession' => $profile->profession
            ],
            'skills' => $plucked_skills
        ]);
    }

    public function edit($id){
        if($id != auth()->user->id){
            // report(404);
        }
        $profile = Profile::find($id);

    }
}
