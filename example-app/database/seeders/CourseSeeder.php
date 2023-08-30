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
            'name' => 'Uvod u Python',
            'description' => 'Osnovni koncepti programiranja uz pomoć jezika Python.',
            'price' => 49.99,
        ]);

        Course::create([
            'name' => 'Web razvoj sa HTML i CSS',
            'description' => 'Kreiranje statičkih web stranica koristeći HTML i CSS.',
            'price' => 39.99,
        ]);

        Course::create([
            'name' => 'JavaScript za početnike',
            'description' => 'Naučite osnove JavaScript-a i počnite sa kreiranjem interaktivnih web stranica.',
            'price' => 59.99,
        ]);

        Course::create([
            'name' => 'Uvod u React',
            'description' => 'Kako kreirati single-page aplikacije koristeći popularnu React biblioteku.',
            'price' => 69.99,
        ]);

        Course::create([
            'name' => 'Osnove baza podataka',
            'description' => 'Uvod u relacijske baze podataka i osnove SQL-a.',
            'price' => 49.99,
        ]);
    }
}
