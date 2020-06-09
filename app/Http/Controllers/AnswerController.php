<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Company;
use App\Answer;
use App\User;
use App\cquestions;

class AnswerController extends Controller
{
    public function submissions($id)
    {
        $company = Company::find($id);
        $challenges = $company->challenges;

        $submissions = [];

        foreach ($challenges as $challenge) {
            $submission = Answer::where('challenge_id', $challenge->id)->get();
            foreach ($submission as $sub) {
                $user = User::find($sub->user_id);
                $question = cquestions::find($sub->question_id);
                array_push($submissions, [
                    'challenge' => $challenge,
                    'submission' => $sub,
                    'question' => $question->title,
                    'user' => [
                        'user_id' => $user->id,
                        'user_name' => $user->name,
                        'user_email' =>  $user->email,
                        'user_avatar' => $user->avatar
                    ]
                ]);
            }
            // array_push($submissions, ['challenge' => $challenge, 'submission' => $submission]);
        }


        return $submissions;
    }
}
