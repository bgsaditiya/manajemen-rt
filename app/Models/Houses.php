<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


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
}
