<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Quiz;

class QuizController extends Controller
{
    public function get()
    {
        $quizzes = Quiz::get();
        return $quizzes;
    }

    public function search($key)
    {
        $quizzes = Quiz::where('title', 'like', '%' . $key . '%')->get();
        return $quizzes;
    }

    public function getQuiz($id)
    {
        // $quiz = Quiz::find($id);

        $quiz = Quiz::find($id);
        $questions = $quiz->questions;

        $questions_array = [];

        foreach ($questions as $question) {
            $answers = $question->answers;
            $answer =  explode(",", $answers);

            $correct = intval($answer[4]);

            $choices = [];
            array_push($choices, $answer[0], $answer[1], $answer[2], $answer[3]);

            array_push($questions_array, [
                'question' => $question->question,
                'answers' => $choices,
                'correct' => $correct
            ]);
        }

        // return $quiz;
        return response()->json(['quiz' => $quiz, 'questions' => $questions_array]);
    }
}
