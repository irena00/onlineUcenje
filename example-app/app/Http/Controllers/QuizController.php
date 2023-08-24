<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuizResource;
use App\Models\Quizz;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    public function index($course_id)
    {
        $quiz = Quizz::where('course_id', $course_id)->first();

        return new QuizResource($quiz);
    }
}
