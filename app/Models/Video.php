<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

// use PDPhilip\Elasticsearch\Eloquent\Model;

class Video extends Model
{
    protected $guarded = [];

    // protected $connection = 'elasticsearch';

    // protected $index = 'videos';

    // const MAX_SIZE = 10000;
    // const CREATED_AT = null;
    // const UPDATED_AT = null;

    protected function video(): Attribute
    {
        return Attribute::make(get: fn($value) => asset('storage/' . $value));
    }
}
