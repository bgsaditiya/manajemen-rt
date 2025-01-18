<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Report extends Model
{
    //
    use HasFactory;
    public $timestamps = true;

    protected $table = 'reports';

    protected $primaryKey = 'id';

    protected $fillable = [
        'bulan',
        'total_pemasukan',
        'total_pengeluaran',
        'saldo_akhir',
    ];
}
