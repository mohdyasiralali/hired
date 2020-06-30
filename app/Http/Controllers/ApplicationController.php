<?php

namespace App\Http\Controllers;

use App\Application;
use App\Company;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    public function apply($id, Request $request){
        $application = new Application();
        $application->user_id = auth()->user()->id;
        $application->company_id = $request->company_id;
        $application->subject = $request->subject;
        $application->letter = $request->letter;
        $application->save();

        return $application;
    }

    public function get($id){
        $company = Company::find($id);
        $applications = $company->applications;
        $array=[];
        foreach ($applications as $application){
            array_push($array, [
                'application' => $application,
                'applicant' => $application->user
            ]);
        }

        return $array;
    }

    public function delete($id){
        $application = Application::where('id', $id);
        $application->delete();
        return response()->json(['message' => 'Deleted']);
    }
}
