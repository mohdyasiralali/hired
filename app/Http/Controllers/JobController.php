<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Job;
use App\Company;

class JobController extends Controller
{
    public function create(Request $request)
    {
        $job = new Job;
        $job->title = $request->title;
        $job->type = $request->type;
        $job->description = $request->description;
        $job->company_id = $request->co_id;
        $job->save();

        return $job;
    }

    public function get_jobs($id)
    {
        $co = Company::find($id);
        return $co->jobs;
    }

    public function update($id, Request $request)
    {
        $job = Job::find($id);
        $job->title = $request->title;
        $job->description = $request->description;
        $job->save();

        return $job;
    }

    public function delete($id)
    {
        Job::where('id', $id)->delete();
        return response()->json(['message' => 'Deleted']);
    }

    public function get()
    {
        $jobs_array = [];
        $jobs = Job::get();
        foreach($jobs as $job){
            $temp = [
                'job_id' => $job->id,
                'company' => $job->company,
                'title' =>$job->title,
                'type' => $job->type,
                'skills' => $job->company->skills,
                'description' => $job->description   
            ];
        array_push($jobs_array, $temp);
        }
        return $jobs_array;
    }
}
