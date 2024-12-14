<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Subscription>
 */
class SubscriptionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public static int $chId = 3;
    public function definition(): array
    {
        static::$chId = static::$chId + 1;
        return [
            'user_id' => 1,
            'channel_id' => static::$chId,
        ];
    }
}
