<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Company;
use App\Skill;

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

    // public function get_company_skills($id)
    // {
    //     $co = Company::find($id);
    //     $skills = $co->skills;
    //     return $skills;
    // }
}
