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
        //
        Schema::create('houses', function (Blueprint $table) {
            $table->id();
            $table->string('no_rumah')->unique();
            $table->enum('status_huni', ['dihuni','tidak dihuni'])->nullable();
            // $table->foreignId('penghuni_id')->constrained('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::dropIfExists('houses');
    }
};
