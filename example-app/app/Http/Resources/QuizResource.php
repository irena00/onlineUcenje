<?php

namespace App\Http\Resources;

use App\Models\Question;
use Illuminate\Http\Resources\Json\JsonResource;

class QuizResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
       
        $allQuestions = Question::all();

        $questions = $allQuestions->filter(function ($question) {
            return $question->quiz_id == $this->id;
        })->map(function ($question) {
            return [
                'id' => $question->id,
                'quiz_id' => $question->quiz_id,
                'question' => $question->question,
                'answers' => AnswerResource::collection($question->answers),
            ];
        });

        return [
            'id' => $this->id,
            'course_id' => $this->course_id,
            'title' => $this->title,
            'questions' => $questions,
        ];
    }
}
