<?php

namespace App\Http\Controllers;

use App\Company;
use App\Skill;
use App\User;
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

    public function user()
    {
        $user = User::find(Auth::user()->id);
        $profile = $user->profile;

        $skills = $profile->skills;
        $plucked_skills = [];

        foreach ($skills as $skill) {
            array_push($plucked_skills, $skill->title);
        }

        return response()->json([
            'user_id' => $user->id,
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

    public function auth_user()
    {
        $user = Auth::user();
        $companies = $user->companies;
        $companies_array = [];
        foreach ($companies as $company) {
            array_push($companies_array, ['company' => $company, 'skills' => $company->skills]);
        }

        $return_user = [
            'user_id' => $user->id,
            'companies' => $companies_array
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

    public function get_companies()
    {
        $companies = Company::get();
        $companies_array = [];
        foreach ($companies as $company) {
            array_push($companies_array, ['company' => $company, 'skills' => $company->skills]);
        }

        return $companies_array;
    }

    public function get_companies_bylocation($location)
    {
        $companies = Company::where('headquarter', 'like', '%'.$location.'%')->get();
        $companies_array = [];
        foreach ($companies as $company) {
            array_push($companies_array, ['company' => $company, 'skills' => $company->skills]);
        }

        return $companies_array;
    }

    public function upload(Request $request)
    {
        // $validation = Validator::make($request->all(),
        //   [
        //       'image'=>'required|mimes:jpeg,jpg,png,gif|max:10000'
        //   ]);

        //   if ($validation->fails()){
        //       $response=array('status'=>'error','errors'=>$validation->errors()->toArray());  
        //       return response()->json($response);
        //   }
        return $request;

        // if ($request->hasFile('image')) {

        //     $uniqueid = uniqid();
        //     $original_name = $request->file('image')->getClientOriginalName();
        //     $size = $request->file('image')->getSize();
        //     $extension = $request->file('image')->getClientOriginalExtension();

        //     $name = $uniqueid . '.' . $extension;
        //     $path = $request->file('image')->storeAs('storage/app/public/images/', $name);

        //     if ($path) {
        //         return response()->json(array('status' => 'success', 'message' => 'Image successfully uploaded', 'image' => '/storage/uploads/' . $name));
        //     } else {
        //         return response()->json(array('status' => 'error', 'message' => 'failed to upload image'));
        //     }
        // }

        // return response()->json('Something went wrong');
    }
}
