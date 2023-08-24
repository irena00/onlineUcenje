<?php

namespace Database\Seeders;

use App\Models\Answer;
use App\Models\Course;
use App\Models\Question;
use App\Models\Quizz;
use Illuminate\Database\Seeder;

class QuizzSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $courses = Course::all();

        foreach ($courses as $course) {
            $quiz = Quizz::create([
                'course_id' => $course->id,
                'title' => 'Kviz za kurs ' . $course->name,
            ]);

            $question1 = Question::create([
                'quiz_id' => $quiz->id,
                'question' => 'Pitanje 1 za kviz',
            ]);

            Answer::create([
                'question_id' => $question1->id,
                'answer' => 'Odgovor 1',
                'is_correct' => true,
            ]);

            Answer::create([
                'question_id' => $question1->id,
                'answer' => 'Odgovor 2',
                'is_correct' => false,
            ]);

            $question2 = Question::create([
                'quiz_id' => $quiz->id,
                'question' => 'Pitanje 2 za kviz',
            ]);

            Answer::create([
                'question_id' => $question2->id,
                'answer' => 'Odgovor 1',
                'is_correct' => false,
            ]);

            Answer::create([
                'question_id' => $question2->id,
                'answer' => 'Odgovor 2',
                'is_correct' => true,
            ]);
            
        }
    }
}
