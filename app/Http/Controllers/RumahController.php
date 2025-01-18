<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Houses;
use App\Models\User;
use Inertia\Inertia;

class RumahController extends Controller
{
    //
    public function index(){
        // $hs = Houses::with('penghuni')->orderBy('no_rumah')->get();
        // dd($hs->first()->penghuni);
        return Inertia::render('Rumah', [
            'title' => 'Data Rumah',
        ]);
    }

    public function store(Request $request){

        // dd("berhasil");

        $validated = $request->validate([
            'no_rumah' => 'required|string|max:255',
            'status_huni' => 'required|in:dihuni,tidak dihuni',
        ]);

        Houses::create($validated);

        return response()->json(['message' => 'Berhasil menambah data rumah.']);

    }

    public function apiHouses(){
        try {
            // Ambil semua data mobil dari database
            $houses = Houses::with('penghuni')->orderBy('no_rumah')->get();
            // $houses = Houses::orderBy('no_rumah')->with('user')->get();

            // Kembalikan data dalam format JSON
            return response()->json([
                'success' => true,
                'data' => $houses,
            ], 200);
        } catch (\Exception $e) {
            // Tangani error jika ada
            return response()->json([
                'success' => false,
                'message' => 'Gagal mengambil data rumah: ' . $e->getMessage(),
            ], 500);
        }
    }

    public function delete($id) {
        $house = Houses::find($id);

        if ($house) {
            $house->delete();

            return response()->json(['message' => 'Berhasil menghapus data rumah.']);
        }

        return response()->json(['message' => 'Gagal menghapus data rumah.']);
    }

    public function tambahPenghuni(Request $request){

        // dd("berhasil");
        $validated = $request->validate([
            'nama_lengkap' => 'required|string|max:255',
            'foto_ktp' => 'nullable|image|mimes:jpg,png,jpeg|max:2048',
            'status_penghuni' => 'required|in:tetap,kontrak',
            'no_telp' => 'required|string|max:255',
            'status_pernikahan' => 'required|in:sudah menikah,belum menikah',
            'rumah_id' => 'required',
            'mulai_huni' => 'required|date',
        ]);


        if(!empty($request->foto_ktp)){
            //maka proses berikut yang dijalankan
            $fileName = 'foto-'.uniqid().'.'.$request->foto_ktp->extension();
            //setelah tau fotonya sudah masuk maka tempatkan ke public
            $request->foto_ktp->move(public_path('images'), $fileName);
        } else {
            $fileName = 'nophoto.jpg';
        }

        $penghuni = User::create($validated);

        //update houses
        $houses = Houses::find($validated['rumah_id']);
        if($houses->status_huni !== 'dihuni'){
            $houses->status_huni = 'dihuni';
            $houses->save();
        }

        if ($penghuni){
            return response()->json(['message' => 'Berhasil menambah data penghuni rumah.']);
        }else{
            return response()->json(['message' => 'Gagal menambah data penghuni rumah.']);
        }

        // Houses::create($validated);


    }
}
