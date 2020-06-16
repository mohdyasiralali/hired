<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Company;
use App\Profile;
use App\Skill;
use Illuminate\Support\Facades\Auth;

class CompanyController extends Controller
{
    public function create(Request $request)
    {
        $company = new Company;
        $company->user_id = auth()->user()->id;
        $company->name = $request->name;
        $company->industry = $request->industry;
        $company->headquarter = $request->headquarter;
        $company->website = $request->website;
        $company->overview = $request->overview;
        $company->save();

        $skills = Skill::findMany($request->skills);
        $company->skills()->attach($skills);

        return response()->json(['message' => 'added']);
    }


    public function update($id, Request $request)
    {
        $company = Company::find($id);
        $company->name = $request->name;
        $company->industry = $request->industry;
        $company->headquarter = $request->headquarter;
        $company->website = $request->website;
        $company->overview = $request->overview;
        $company->save();

        return response()->json(['message' => 'updated']);
    }

    public function comp_auth($id)
    {
        $company = Company::find($id);
        $owner = $company->user_id;

        if ($owner == auth()->user()->id) {
            return true;
        } else return 0;
    }

    public function get_matching($id)
    {
        $company = Company::find($id);
        $skills = $company->skills;

        $profiles = [];

        foreach ($skills as $skill) {
            $profile_skill = $skill->profiles;
            foreach ($profile_skill as $ps) {
                array_push($profiles, $ps->id);
            }
        }

        $profiles = array_unique($profiles);

        $users = [];
        foreach ($profiles as $profileId) {
            $p = Profile::find($profileId);
            $profession = $p->profession;
            $curr_user = $p->user;
            array_push($users, [
                "name" => $curr_user->name,
                "id" => $curr_user->id,
                "email" => $curr_user->email,
                "profession" => $profession,
                "avatar" => $curr_user->avatar
            ]);
        }
        return $users;
    }

    // public function get_company_skills($id)
    // {
    //     $co = Company::find($id);
    //     $skills = $co->skills;
    //     return $skills;
    // }
}
