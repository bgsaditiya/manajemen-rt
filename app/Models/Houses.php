<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Houses extends Model
{
    //
    use HasFactory;
    public $timestamps = true;

    protected $table = 'houses';

    protected $primaryKey = 'id';

    protected $fillable = [
        'no_rumah',
        'status_huni',
    ];

    public function penghuni(): HasMany
    {
        return $this->hasMany(User::class);
    }
}
