<?php

namespace App\Http\Controllers;

use App\Models\Topic;
use Illuminate\Http\Request;

class TopicController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $topics = Topic::all();
        return response()->json([
            'status' => 'success',
            'data' => $topics,
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'topics' => 'required|array|min:1',
            'topics.*' => 'exists:topics,id'
        ]);

        $user = auth()->user();

        // replace topic lama dengan baru
        $user->topics()->sync($request->topics);

        return response()->json([
            'message' => 'Topics updated',
            'topics' => $user->topics
        ]);
    }

}
