<?php
use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;

Route::get('/', [UsersController::class, 'index']);

Route::post('/upload', UsersController::class);
Route::get('/show/{video}', [UsersController::class, 'read']);

Route::get('/g', [UsersController::class, 'index']);
Route::get('/f', [UsersController::class, 'index']);
Route::get('/h', [UsersController::class, 'index']);
Route::get('/i', [UsersController::class, 'index']);
Route::get('/user-dashboard', [UsersController::class, 'getUser']);
