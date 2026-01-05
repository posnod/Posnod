<?php

use App\Http\Controllers\SocialAuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->to('/docs/api');
});


Route::get('/auth/{provider}/redirect', [SocialAuthController::class, 'redirect']);
Route::get('/auth/{provider}/callback', [SocialAuthController::class, 'callback']);
