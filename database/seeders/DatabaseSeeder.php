<?php

namespace Database\Seeders;

use App\Models\UserChannel;
use Database\Factories\UserChannelFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    use WithoutModelEvents;
    public function run(): void
    {
        // User::factory(10)->create();
        for ($i = 0; $i <= 10; $i++) {
            // ChannelFactory::factoryForModel(MyChannel::class)->create();
            // SubscriptionFactory::factoryForModel(Subscription::class)->create();
            UserChannelFactory::factoryForModel(UserChannel::class)->create();
        }

    }
}
