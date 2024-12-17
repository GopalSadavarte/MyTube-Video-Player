<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

// use PDPhilip\Elasticsearch\Eloquent\Model;

class Video extends Model
{
    protected $guarded = [];

    protected function video(): Attribute
    {
        return Attribute::make(get: fn($value) => asset('storage/' . $value));
    }

    public function channel()
    {
        return $this->belongsTo(Channel::class, 'channel_id', 'id')->select('channel_name', 'id');
    }
}
