<?php

use App\Http\Controllers\LaporanController;
use App\Http\Controllers\PenghuniController;
use App\Http\Controllers\RumahController;
use App\Http\Controllers\PembayaranController;
use App\Http\Controllers\PengeluaranController;
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
    Route::get('/rumah', 'index')->name('rumah.index');
    Route::get('/rumah/lihat/{id}', 'show');
    Route::delete('/houses/{houseId}', 'destroy');
    Route::get('/rumah/edit/{id}', 'edit');
    Route::put('/rumah/edit/{id}', 'update');
    // Route::post('/houses/penghuni', 'tambahPenghuni');
});

Route::controller(PembayaranController::class)->group(function () {
    Route::get('/pembayaran', 'index')->name('pembayaran.index');
    Route::get('/pembayaran/tambah', 'create');
    Route::post('/pembayaran/tambah', 'store');
});

Route::controller(PengeluaranController::class)->group(function () {
    Route::get('/pengeluaran', 'index')->name('pengeluaran.index');
    Route::get('/pengeluaran/tambah', 'create');
    Route::post('/pengeluaran/tambah', 'store');
});

Route::controller(LaporanController::class)->group(function () {
    Route::get('/laporan', 'index')->name('pengeluaran.index');
    Route::get('/pengeluaran/tambah', 'create');
    Route::post('/pengeluaran/tambah', 'store');
});
