<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Expense extends Model
{
    //
    use HasFactory;
    public $timestamps = true;

    protected $table = 'expenses';

    protected $primaryKey = 'id';

    protected $fillable = [
        'deskripsi',
        'jumlah',
        'tanggal_pengeluaran',
    ];
}
