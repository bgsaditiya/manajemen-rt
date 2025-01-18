<?php

use App\Http\Controllers\PenghuniController;
use App\Http\Controllers\RumahController;
use App\Http\Controllers\PembayaranController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Dashboard');
// Route::get('/penghuni', [PenghuniController::class, 'index']);
// Route::get('/penghuni/tambah', [PenghuniController::class, 'tambah']);

Route::controller(PenghuniController::class)->group(function () {
    Route::get('/penghuni', 'index')->name('penghuni.index');
    Route::get('/penghuni/tambah', 'tambah');
    Route::get('/penghuni/edit/{id}', 'edit');
    Route::put('/penghuni/edit/{id}', 'update');
    Route::post('/penghuni/tambah', 'store');
    Route::delete('/penghuni/hapus/{id}', 'delete');
    Route::get('/penghuni/lihat/{id}', 'lihat');
});

Route::controller(RumahController::class)->group(function () {
    Route::get('/rumah', 'index');
    // Route::get('/penghuni/tambah', 'tambah');
    Route::delete('/houses/{houseId}', 'destroy');
    // Route::post('/houses/penghuni', 'tambahPenghuni');
});

Route::controller(PembayaranController::class)->group(function () {
    Route::get('/pembayaran', 'index');
});
