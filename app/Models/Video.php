<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    protected $guarded = [];

    protected function video(): Attribute
    {
        return Attribute::make(get: fn($value) => asset('storage/' . $value));
    }
}
