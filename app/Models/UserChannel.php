<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserChannel extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id')->select(['id', 'name']);
    }
    public function channel()
    {
        return $this->belongsTo(Channel::class, 'channel_id')->select(['id', 'channel_name']);
    }
}
