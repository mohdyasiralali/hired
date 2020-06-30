<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Profile;
use App\Skill;

class ProfileController extends Controller
{

    public function show($id)
    {
        $user = User::find($id);
        $profile = $user->profile;

        $skills = $profile->skills;
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
                'profession' => $profile->profession,
                'id' => $profile->id

            ],
            'skills' => $plucked_skills
        ]);
    }

    public function edit($id, Request $request)
    {
        if ($id != Auth::user()->id) {
            abort(403, 'Unauthorized action.');
        }

        $user = User::find($id);
        $profile = $user->profile;

        $user->name = $request->name;
        $user->save();

        $profile->birth_day = $request->bd;
        $profile->profession = $request->profession;
        $profile->facebook_profile = $request->fb;
        $profile->linked_profile = $request->linkedin;
        $profile->bio = $request->bio;
        $profile->first_attempt = 0;
        $profile->save();

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
                'profession' => $profile->profession,
                'id' => $profile->id
            ]
        ]);
    }
}
