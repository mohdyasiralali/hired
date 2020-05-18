<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Quiz;
use App\Question;

class QuestionController extends Controller
{
    // public function get($id)
    // {
    //     $quiz = Quiz::find($id);
    //     $questions = $quiz->questions;

    //     $questions_array = [];

    //     foreach ($questions as $question) {
    //         $answers = $question->answers;
    //         $answer =  explode(" ", $answers);

    //         $correct = intval($answer[4]);

    //         $choices = [];
    //         array_push($choices, $answer[0], $answer[1], $answer[2], $answer[3]);

    //         array_push($questions_array, [
    //             'question' => $question->question,
    //             'answers' => $choices,
    //             'correct' => $correct
    //         ]);
    //     }

    //     return $questions_array;
    // }
}

// {
//     question: "In which dir React Compnents are saved?",
//     answers: [
//         "js/components/",
//         "vendor/components/",
//         "external/components/",
//         "vendor/"
//     ],
//     correct: 0
// }
