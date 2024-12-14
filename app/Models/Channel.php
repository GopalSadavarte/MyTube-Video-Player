<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Channel extends Model
{
    public function user()
    {
        return $this->belongsToMany(User::class, 'user_channels', 'channel_id', 'user_id');
    }
}
