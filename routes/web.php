<?php

use App\Http\Controllers\PenghuniController;
use App\Http\Controllers\RumahController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Dashboard');
// Route::get('/penghuni', [PenghuniController::class, 'index']);
// Route::get('/penghuni/tambah', [PenghuniController::class, 'tambah']);

Route::controller(PenghuniController::class)->group(function () {
    Route::get('/penghuni', 'index');
    Route::get('/penghuni/tambah', 'tambah');
});

Route::controller(RumahController::class)->group(function () {
    Route::get('/rumah', 'index');
    // Route::get('/penghuni/tambah', 'tambah');
    Route::delete('/houses/{houseId}', 'destroy');
    // Route::post('/houses/penghuni', 'tambahPenghuni');
});
