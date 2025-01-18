<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PembayaranController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $pembayaran = Payment::with(['penghuni', 'house'])->get();
        // dd($pembayaran);

        return Inertia::render('Pembayaran', [
            'title' => 'Data Pembayaran',
            'pembayaran' => $pembayaran,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $penghuni = User::all();
        return Inertia::render('Pembayaran/Tambah', [
            'title' => 'Tambah Data Pembayaran',
            'penghuni' => $penghuni,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        // $tahun = Carbon::now()->year;
        // $periode_start = Carbon::createFromDate($tahun, $request->periode_start, 1)->format('Y-m-d');
        // $periode_end = Carbon::createFromDate($tahun, $request->periode_end, 1)->format('Y-m-d');

        // dd($periode_end);

        $validated = $request->validate([
            'penghuni_id'=> 'required',
            'jumlah'=> 'required|numeric',
            'jenis_iuran'=> 'required|in:kebersihan,satpam',
            'periode_start'=> 'required|date',
            'periode_end'=> 'required|date',
            'status'=> 'required|in:lunas,belum lunas',
        ]);
        // dd("gg");

        // $house_id = User::find($validated['penghuni_id'])->rumah_id;

        $payment = Payment::create([
            'penghuni_id' => $validated['penghuni_id'],
            'rumah_id' => User::find($validated['penghuni_id'])->rumah_id,
            'jenis_iuran' => $validated['jenis_iuran'],
            'jumlah' => $validated['jumlah'],
            'periode_start' => $validated['periode_start'],
            'periode_end' => $validated['periode_end'],
            'tanggal_pembayaran' => Carbon::now(),
            'status' => $validated['status'],
        ]);

        if ($payment){
            // $penghuni = User::all();
            return to_route('pembayaran.index');
        }else{
            return response()->json(['message' => 'Gagal menambah pembayaran.']);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Payment $payment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Payment $payment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Payment $payment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Payment $payment)
    {
        //
    }
}
