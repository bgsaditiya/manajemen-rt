<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Payment extends Model
{
    //
    use HasFactory;
    public $timestamps = true;

    protected $table = 'payments';

    protected $primaryKey = 'id';

    protected $fillable = [
        'penghuni_id',
        'rumah_id',
        'jenis_iuran',
        'jumlah',
        'periode_start',
        'periode_end',
        'tanggal_pembayaran',
        'status',
    ];

    public function house(): BelongsTo
    {
        return $this->belongsTo(Houses::class, 'rumah_id');
    }

    public function penghuni(): BelongsTo
    {
        return $this->belongsTo(User::class, 'penghuni_id');
    }
}
