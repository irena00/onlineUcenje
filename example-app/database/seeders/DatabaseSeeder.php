<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        
        User::create([
            'name' => 'Pera',
            'email' => 'pera@gmail.com',
            'password' => bcrypt('pera'),
            'role' => 'student',
        ]);

        User::create([
            'name' => 'Marko',
            'email' => 'marko@gmail.com',
            'password' => bcrypt('marko'),
            'role' => 'student',
        ]);

        User::create([
            'name' => 'Janko',
            'email' => 'janko@gmail.com',
            'password' => bcrypt('janko'),
            'role' => 'admin',
        ]);
        $this->call([
            
            CourseSeeder::class,
            LessonSeeder::class,
            QuizzSeeder::class,
        ]);
    }
}
