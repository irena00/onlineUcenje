<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Lesson;
use Illuminate\Database\Seeder;

class LessonSeeder extends Seeder
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
            if ($course->name == 'Uvod u Python') {
                $lesson1 = Lesson::create([
                    'course_id' => $course->id,
                    'title' => 'Python sintaksa i varijable',
                    'content' => 'Uvod u osnovnu sintaksu Python-a i rad sa varijablama.',
                    'order' => 1,
                    'video'=>'https://www.youtube.com/watch?v=8dWL3wF_OMw'
                ]);

                $lesson2 = Lesson::create([
                    'course_id' => $course->id,
                    'title' => 'Rad sa listama i rečnicima u Pythonu',
                    'content' => 'Kako koristiti liste i rečnike u Pythonu.',
                    'order' => 2,
                    'video'=>'https://www.youtube.com/watch?v=c2M-rlkkT5o'
                ]);
            }
          
        }
    }
}
