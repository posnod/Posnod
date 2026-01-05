<?php

namespace Database\Seeders;

use App\Models\Content;
use App\Models\Topic;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Auth;

class ContentSeeder extends Seeder
{
    public function run(): void
    {
        $topics = Topic::all();

        // ambil user pertama (atau user tertentu)
        $user = User::first();

        if (!$user) {
            return;
        }

        foreach ($topics as $topic) {
            for ($i = 1; $i <= 5; $i++) {
                Content::create([
                    'topic_id' => $topic->id,
                    'user_id' => $user->id,
                    'title' => "Belajar {$topic->name} Part {$i}",
                    'description' => "Ini adalah konten pembelajaran {$topic->name} part {$i}",
                    'video_url' => 'videos/dummy-video.mp4',
                    'thumbnail' => 'thumbnails/dummy-thumbnail.png',
                ]);
            }
        }
    }
}
