<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('videos', function (BluePrint $table) {
            $table->after('video', function (Blueprint $table) {
                // $table->foreignId('user_id')->references('id')->on('users')->cascadeOnDelete();
                $table->unsignedBigInteger('views')->default(0);
                $table->unsignedBigInteger('likes')->default(0);
                $table->boolean('status')->default(true);
            });
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('videos');
    }
};
