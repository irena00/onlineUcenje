<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\QuizController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/courses', [CourseController::class, 'index']);
Route::get('/courses/{id}/lessons', [LessonController::class, 'index']);
Route::get('/lessons/{id}', [LessonController::class, 'show']);
Route::post('/lessons', [LessonController::class, 'store']);
Route::put('/lessons/{id}', [LessonController::class, 'update']);
Route::delete('/lessons/{id}', [LessonController::class, 'destroy']);
 
Route::get('/quizzes/{id}', [QuizController::class, 'index']);
Route::get('/users', [AuthController::class, 'index']);

Route::group(['middleware' => 'auth:sanctum'], function () {


    
    Route::post('/logout', [AuthController::class, 'logout']);
  
});