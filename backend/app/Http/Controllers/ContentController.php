<?php

namespace App\Http\Controllers;

use App\Models\Content;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ContentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contents = Content::all();
        return response()->json([
            'status' => 'success',
            'data' => $contents
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'topic_id' => 'required|exists:topics,id',
            'title' => 'required|string|max:255',
            'video' => 'required|mimes:mp4,mov,avi,webm|max:102400', // 100MB
            'thumbnail' => 'required|image|mimes:jpg,jpeg,png|max:2048',
            'description' => 'required|string',
        ]);

        DB::beginTransaction();

        try {
            // upload video
            $videoPath = $request->file('video')
                ->store('videos', 'public');

            // upload thumbnail
            $thumbnailPath = $request->file('thumbnail')
                ->store('thumbnails', 'public');

            $content = Content::create([
                'topic_id' => $validated['topic_id'],
                'title' => $validated['title'],
                'video' => $videoPath,
                'thumbnail' => $thumbnailPath,
                'description' => $validated['description'],
            ]);

            DB::commit();

            return response()->json([
                'message' => 'Content created successfully',
                'data' => $content
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json([
                'message' => 'Failed to create content',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
 

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Content $content)
    {
        $validated = $request->validate([
            'topic_id' => 'required|exists:topics,id',
            'title' => 'required|string|max:255',
            'video' => 'nullable|mimes:mp4,mov,avi,webm|max:102400',
            'thumbnail' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'description' => 'required|string',
        ]);

        DB::beginTransaction();

        try {
            if ($request->hasFile('video')) {
                if ($content->video && Storage::disk('public')->exists($content->video)) {
                    Storage::disk('public')->delete($content->video);
                }

                $validated['video'] = $request->file('video')
                    ->store('videos', 'public');
            }

            if ($request->hasFile('thumbnail')) {
                if ($content->thumbnail && Storage::disk('public')->exists($content->thumbnail)) {
                    Storage::disk('public')->delete($content->thumbnail);
                }

                $validated['thumbnail'] = $request->file('thumbnail')
                    ->store('thumbnails', 'public');
            }

            $content->update($validated);

            DB::commit();

            return response()->json([
                'message' => 'Content updated successfully',
                'data' => $content
            ]);
        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json([
                'message' => 'Failed to update content',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Content $content)
    {
        DB::beginTransaction();

        try {
            if ($content->video && Storage::disk('public')->exists($content->video)) {
                Storage::disk('public')->delete($content->video);
            }

            if ($content->thumbnail && Storage::disk('public')->exists($content->thumbnail)) {
                Storage::disk('public')->delete($content->thumbnail);
            }

            $content->delete();

            DB::commit();

            return response()->json([
                'message' => 'Content deleted successfully'
            ]);
        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json([
                'message' => 'Failed to delete content',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
