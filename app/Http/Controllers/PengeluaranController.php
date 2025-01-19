<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PengeluaranController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $pengeluaran = Expense::all();
        // dd($pembayaran);

        return Inertia::render('Pengeluaran', [
            'title' => 'Data Pengeluaran',
            'pengeluaran' => $pengeluaran,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        // dd("halo");
        return Inertia::render('Pengeluaran/Tambah', [
            'title' => 'Tambah Data Pengeluaran',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //

        $validated = $request->validate([
            'jumlah'=> 'required|numeric',
            'deskripsi'=> 'required|string',
            'tanggal_pengeluaran'=> 'required|date',
        ]);
        // dd("gg");

        // $house_id = User::find($validated['penghuni_id'])->rumah_id;

        $expense = Expense::create([
            'jumlah'=> $validated['jumlah'],
            'deskripsi'=> $validated['deskripsi'],
            'tanggal_pengeluaran'=> $validated['tanggal_pengeluaran'],
        ]);

        if ($expense){
            // $penghuni = User::all();
            return to_route('pengeluaran.index');
        }else{
            return response()->json(['message' => 'Gagal menambah pengeluaran.']);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Expense $expense)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Expense $expense)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Expense $expense)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Expense $expense)
    {
        //
    }
}
