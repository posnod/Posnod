<?php

namespace Database\Seeders;

use App\Models\Topic;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TopicSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $topics = [
            ['name' => 'Matematika', 'slug' => 'matematika'],
            ['name' => 'Teknologi', 'slug' => 'teknologi'],
            ['name' => 'Sosial', 'slug' => 'sosial'],
            ['name' => 'Pemrograman', 'slug' => 'pemrograman'],
            ['name' => 'Bisnis', 'slug' => 'bisnis'],
        ];

        foreach ($topics as $topic) {
            Topic::create($topic);
        }
    }
}
