<?php

namespace Database\Seeders;

use App\Models\Course;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Course::create([
            'name' => 'Matematika',
            'description' => 'Ovaj kurs se bavi osnovnim matematičkim konceptima.',
            'price' => 29.99,
        ]);

        Course::create([
            'name' => 'Nauka',
            'description' => 'Ovaj kurs pruža uvod u različite naučne discipline.',
            'price' => 49.99,
        ]);

        Course::create([
            'name' => 'Srpski jezik',
            'description' => 'Ovaj kurs obuhvata gramatiku i pravopis srpskog jezika.',
            'price' => 19.99,
        ]);

        Course::create([
            'name' => 'Istorija',
            'description' => 'Ovaj kurs se fokusira na ključne događaje iz svjetske istorije.',
            'price' => 39.99,
        ]);

        Course::create([
            'name' => 'Fizika',
            'description' => 'Ovaj kurs istražuje osnove fizike i njenih primjena.',
            'price' => 29.99,
        ]);
    }
}
