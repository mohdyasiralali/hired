<?php

namespace App\Http\Controllers;

use App\Skill;
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
        return response()->json([
            'first_attempt' => $user->profile->first_attempt,
            'user_id' => $user->id
        ]);
    }

    public function auth_user()
    {
        $user = Auth::user();
        $companies = $user->companies;
        $companies_array = [];
        foreach($companies as $company){
            // $companies_array = [$companies_array]+[$company, $company->skills];
            array_push($companies_array, ['company'=>$company, 'skills'=>$company->skills]);
        }

        $return_user = [
            'user_id' => $user->id,
            'companies' => $companies_array

            // 'companies' => $user->companies
        ];
        return $return_user;
    }

    public function get_skills()
    {
        $skills = Skill::get();
        return $skills;
    }

    public function add_skills(Request $request)
    {
        $user = Auth::user();
        $profile = $user->profile;
        $skills = Skill::findMany($request);
        $profile->skills()->attach($skills);

        return $user->profile->skills;
    }

    public function deleteSkill($id)
    {
        $user = Auth::user();
        $profile = $user->profile;
        $skill = Skill::find($id);
        $profile->skills()->detach($skill);

        return $user->profile->skills;
    }
}
