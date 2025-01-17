<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Houses;
use Inertia\Inertia;

class RumahController extends Controller
{
    //
    public function index(){
        return Inertia::render('Rumah', [
            'title' => 'Data Rumah',
        ]);
    }

    public function store(Request $request){

        // dd("p");

        // $request->validate([
        //     'no_rumah' => 'required|string|max:255',
        //     'status_huni' => 'required',
        // ]);

        // Houses::create([
        //     'no_rumah'=>$request->no_rumah,
        //     'status_huni'=>$request->status_huni,
        // ]);

        $validated = $request->validate([
            'no_rumah' => 'required|string|max:255',
            'status_huni' => 'required|in:dihuni,tidak dihuni',
        ]);

        Houses::create($validated);

        return response()->json(['message' => 'Berhasil menambah data rumah.']);


        // return Inertia::render('Rumah', [
        //     'title' => 'Data Rumah',
        // ]);
    }

    public function apiHouses(){
        try {
            // Ambil semua data mobil dari database
            $houses = Houses::orderBy('no_rumah')->get();

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
}
