<?php

namespace App\Http\Controllers;

use App\Models\ProRequest;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;

class ProRequestController extends Controller
{
    protected $guarded = ['id'];

    public function proRequest(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required',
            'topic_id' => 'required',
        ]);

        try {
            $user = User::find($request->user_id);
            ProRequest::create($validated);
            $user->role = 'pro';
            $user->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Upgrade ke Pro Berhasil'
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'error_message' => $e->getMessage()
            ]);
        }
    }
}
