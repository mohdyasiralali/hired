<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Challenge;
use App\Quiz;

class ChallengeController extends Controller
{
    public function get($id)
    {
        $quiz = Quiz::find($id);
        $challenges = $quiz->challenges;
        return $challenges;
    }

    public function search($id, $key)
    {
        $challenges = Challenge::where('quiz_id', '=', $id)->where('title', 'like', '%' . $key . '%')
            ->orWhere('techs', 'like', '%' . $key . '%')->get();
        return $challenges;
    }
}
