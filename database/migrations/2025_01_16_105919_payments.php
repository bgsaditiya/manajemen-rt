<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('penghuni_id')->constrained('penghuni')->onDelete('cascade');
            $table->foreignId('rumah_id')->constrained('houses')->onDelete('cascade');
            $table->enum('jenis_iuran', ['kebersihan', 'satpam']);
            $table->decimal('jumlah', 10, 2);
            $table->date('periode_start');
            $table->date('periode_end');
            $table->date('tanggal_pembayaran')->default(DB::raw('CURRENT_DATE'));
            $table->enum('status', ['lunas', 'belum lunas'])->default('lunas');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::dropIfExists('payments');
    }
};
