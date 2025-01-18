<?php

namespace App\Http\Controllers;

use App\Models\Houses;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class PenghuniController extends Controller
{
    //
    public function index(){
        $penghuni = User::all();

        // dd($penghuni);

        return Inertia::render('Penghuni', [
            'title' => 'Data Penghuni',
            'penghuni' => $penghuni,
        ]);
    }

    public function tambah(){

        $houses = Houses::all();
        return Inertia::render('Penghuni/Tambah', [
            'title' => 'Tambah Data Penghuni',
            'houses' => $houses,
        ]);
    }

    public function store(Request $request){
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

        $penghuni = User::create([
            'nama_lengkap' => $validated['nama_lengkap'],
            'foto_ktp' => $fileName,
            'status_penghuni' => $validated['status_penghuni'],
            'no_telp' => $validated['no_telp'],
            'status_pernikahan' => $validated['status_pernikahan'],
            'rumah_id' => $validated['rumah_id'],
            'mulai_huni' => $validated['mulai_huni'],
        ]);

        // dd($penghuni);

        //update houses
        $houses = Houses::find($validated['rumah_id']);
        if($houses->status_huni !== 'dihuni'){
            $houses->status_huni = 'dihuni';
            $houses->save();
        }

        if ($penghuni){
            $penghuni = User::all();
            return Inertia::render('Penghuni', [
                'title' => 'Data Penghuni',
                'penghuni' => $penghuni,
            ])->with('message', 'Berhasil menambah data penghuni rumah.');
        }else{
            return response()->json(['message' => 'Gagal menambah data penghuni rumah.']);
        }
    }

    public function delete($id) {
        $user = User::find($id);

        if ($user->foto_ktp !== 'nophoto.jpg'){
            $filePath = 'images/' . $user->foto_ktp;
            if (Storage::disk('public')->exists($filePath)) {
                Storage::disk('public')->delete($filePath);
            }
        }

        if ($user) {
            $user->delete();

            $penghuni = User::all();

            return Inertia::render('Penghuni', [
                'title' => 'Data Penghuni',
                'penghuni' => $penghuni,
            ])->with(['message' => 'Berhasil menghapus data penghuni.']);
        }

        return response()->json(['message' => 'Gagal menghapus data penghuni.']);
    }

    public function edit($id){
        $penghuni = User::find($id);
        $houses = Houses::all();

        // dd($penghuni);

        return Inertia::render('Penghuni/Edit', [
            'title' => 'Edit Data Penghuni',
            'penghuniDefault' => $penghuni,
            'houses' => $houses,
        ]);
    }

    public function update(Request $request, $id){

        // $houses = Houses::all();

        // dd($request->selesai_huni);

        $validated = $request->validate([
            'nama_lengkap' => 'required|string|max:255',
            'foto_ktp' => 'nullable|image|mimes:jpg,png,jpeg|max:2048',
            'status_penghuni' => 'required|in:tetap,kontrak',
            'no_telp' => 'required|string|max:255',
            'status_pernikahan' => 'required|in:sudah menikah,belum menikah',
            'rumah_id' => 'required',
            'mulai_huni' => 'required|date',
            'selesai_huni' => 'nullable|date|after_or_equal:mulai_huni',  // pastikan selesai_huni setelah mulai_huni
        ]);

        // return response()->json([
        //     'success' => true,
        //     'message' => 'Data berhasil disimpan',
        // ], 200);



        if(!empty($request->foto_ktp && $request->foto_ktp !== "nophoto.jpg")){
            //maka proses berikut yang dijalankan
            $fileName = 'foto-'.uniqid().'.'.$request->foto_ktp->extension();
            //setelah tau fotonya sudah masuk maka tempatkan ke public
            $request->foto_ktp->move(public_path('images'), $fileName);
        } else {
            $fileName = 'nophoto.jpg';
        }

        $penghuniUpdate = User::findOrFail($id);

        $penghuniUpdate->update($validated);

        $penghuni = User::all();

        // dd($penghuni);

        return to_route('penghuni.index');
    }

    public function lihat($id){
        $data = User::with('house')->find($id);

        // dd($data->house);

        return Inertia::render("Penghuni/Lihat", [
            'title' => 'Lihat Data',
            'data' => $data,
        ]);
    }
}
