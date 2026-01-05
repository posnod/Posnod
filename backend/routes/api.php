<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContentController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\ProRequestController;
use App\Http\Controllers\SocialAuthController;
use App\Http\Controllers\TopicController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);


Route::middleware('auth:sanctum')->group(function () {
    Route::resource('topics', TopicController::class);
    Route::resource('content', ContentController::class);
    Route::post('/contents/{content}/like', [LikeController::class, 'toggle'])->name('like');
    // pro request
    Route::post('/pro-request',[ProRequestController::class,'proRequest'])->name('pro_request');
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::get('/me', fn(Request $r) => $r->user());
});
