<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\Report;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Inertia\Inertia;

class LaporanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

        // $reportSummary = [
        //     '1' => [
        //         'pemasukan' => 1000000,
        //         'pengeluaran' => 500000,
        //         'saldo_sisa' => 1000000 - 500000,
        //     ],
        // ];
        $saldoSisa = 0;
        for($x = 1; $x <= 12; $x++){
            $pemasukan = DB::table('payments')
            ->whereMonth('tanggal_pembayaran', $x)
            ->sum('jumlah');

            $pengeluaran = DB::table('expenses')
            ->whereMonth('tanggal_pengeluaran', $x)
            ->sum('jumlah');

            $saldoSisa += $pemasukan - $pengeluaran;

            $reportSummary[$x] = [
                'pemasukan' => $pemasukan,
                'pengeluaran' => $pengeluaran,
                'saldo_sisa' => $saldoSisa,
            ];
        }

        return Inertia::render('Laporan', [
            'title' => 'Report Summary',
            'reportSummary' => $reportSummary,
        ]);


        // dd($reportSummary);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }
}
