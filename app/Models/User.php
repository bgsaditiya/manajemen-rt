<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class User extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $table = 'penghuni';
    public $timestamps = true;

    protected $fillable = [
        'nama_lengkap',
        'foto_ktp',
        'status_penghuni',
        'no_telp',
        'status_pernikahan',
        'rumah_id',
        'mulai_huni',
        'selesai_huni',
    ];

    public function house(): BelongsTo
    {
        return $this->belongsTo(Houses::class, 'rumah_id');
    }
}
