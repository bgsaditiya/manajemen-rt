<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PenghuniController extends Controller
{
    //
    public function index(){
        return Inertia::render('Penghuni', [
            'title' => 'Data Penghuni',
        ]);
    }

    public function tambah(){
        return Inertia::render('Penghuni/Tambah', [
            'title' => 'Tambah Data Penghuni',
        ]);
    }
}
