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
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('slug');
            $table->string('featured_image')->nullable();
            $table->longText('description')->nullable();
            $table->string('meta_title')->nullable();
            $table->longText('meta_description')->nullable();
            $table->longText('meta_keywords')->nullable();
            $table->integer('category_id');
            $table->integer('views')->default(0);
            $table->text('m3u8_url');
            $table->tinyInteger('status')->comment('0: inactive; 1: active')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
