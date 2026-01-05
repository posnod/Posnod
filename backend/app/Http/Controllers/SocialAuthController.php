<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Laravel\Socialite\Socialite;

class SocialAuthController extends Controller
{
    public function redirect($provider)
    {
        return Socialite::driver($provider)
            ->stateless()
            ->redirect();
    }

    public function callback($provider)
    {
        $socialUser = Socialite::driver($provider)
            ->stateless()
            ->user();

        $user = User::updateOrCreate(
            [
                'provider' => $provider,
                'provider_id' => $socialUser->getId()
            ],
            [
                'name' => $socialUser->getName(),
                'email' => $socialUser->getEmail(),
                'password' => $socialUser->getEmail()
            ]
        );

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function logout(Request $request)
    {
        // Hapus token yang sedang dipakai
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out successfully'
        ]);
    }
}
