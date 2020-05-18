<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Company;
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

    // public function get_company_skills($id)
    // {
    //     $co = Company::find($id);
    //     $skills = $co->skills;
    //     return $skills;
    // }
}
