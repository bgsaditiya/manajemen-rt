<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RumahController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route::get('/houses', [RumahController::class, 'apiHouses']);
// Route::post('/houses', [RumahController::class, 'store']);

Route::controller(RumahController::class)->group(function () {
    Route::get('/houses', 'apiHouses');
    Route::post('/houses', 'store');
    Route::post('/houses/penghuni', 'tambahPenghuni');
    // Route::get('/penghuni/tambah', 'tambah');
    Route::delete('/houses/hapus/{houseId}', 'delete');
});
