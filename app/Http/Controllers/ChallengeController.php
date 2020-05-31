<?php

namespace App\Http\Controllers;

use App\Answer;
use Illuminate\Http\Request;
use App\Challenge;
use App\cquestions;
use App\Question;
use App\Quiz;
use Illuminate\Broadcasting\Channel;
use Illuminate\Support\Facades\Auth;


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

    public function get_questions($id)
    {
        $challenges = Challenge::find($id);
        return $challenges->questions;
    }

    public function create(Request $request)
    {
        $challenge = new Challenge;
        $challenge->company_id = $request->co_id;
        $challenge->title = $request->position;
        $challenge->techs = $request->techs;
        $challenge->quiz_id = $request->quiz_id;
        $challenge->save();

        $array_questions = [];
        foreach ($request->questions as $question) {
            $challenge_question = new cquestions;
            $challenge_question->title = $question['title'];
            $challenge_question->question = $question['question'];
            $challenge_question->challenge_id = $challenge->id;
            $challenge_question->save();
            array_push($array_questions, $challenge_question);
        }

        return
            ['challenge_info' => $challenge, 'questions' => $array_questions];
    }

    public function get_company_challenges($id)
    {
        $challenges = Challenge::where('company_id', $id)->get();
        $return_data = [];

        foreach ($challenges as $challenge) {
            $questions = cquestions::where('challenge_id', $challenge->id)->get();
            array_push($return_data, [
                'challenge_info' => $challenge,
                'questions' => $questions
            ]);
        }

        return $return_data;
    }

    public function delete($id)
    {
        Challenge::where('id', $id)->delete();
        return response()->json(['message' => 'Deleted']);
    }

    public function submit(Request $request)
    {
        $array =  $request->answers;
        foreach ($array as $element) {
            $answer = new Answer;
            $answer->question_id = $element['question_id'];
            $answer->user_id = $element['user_id'];
            $answer->code = $element['code'];
            $answer->challenge_id = $element['challenge_id'];
            $answer->save();
        }

        return response()->json(['message' => 'Successfully added']);
    }

    public function user_challenges($id)
    {
        $challenges = Answer::select('challenge_id')->where('user_id', $id)->get();
        $arr = [];
        foreach ($challenges as $challenge) {
            array_push($arr, $challenge->challenge_id);
        }
        $unique = array_unique($arr);
        return $unique;
    }
}
