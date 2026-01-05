<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
    protected $guarded = ['id'];

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_topics');
    }

    public function contents()
    {
        return $this->hasMany(Content::class, 'topic_id');
    }
}
