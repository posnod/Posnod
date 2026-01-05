<?php

namespace App\Http\Controllers;

use App\Models\Content;
use App\Models\Like;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function toggle(Request $request, $contentId)
    {
        $user = $request->user();

        $content = Content::findOrFail($contentId);

        $like = Like::where('user_id', $user->id)
            ->where('content_id', $content->id)
            ->first();

        // jika sudah like → unlike
        if ($like) {
            $like->delete();

            return response()->json([
                'message' => 'Unliked',
                'liked' => false,
                'likes_count' => $content->likes()->count()
            ]);
        }

        // jika belum like → like
        Like::create([
            'user_id' => $user->id,
            'content_id' => $content->id
        ]);

        return response()->json([
            'message' => 'Liked',
            'liked' => true,
            'likes_count' => $content->likes()->count()
        ]);
    }

}
