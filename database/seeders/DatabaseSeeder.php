<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        DB::table('houses')->insert([
            'no_rumah' => 'A-1',
            'status_huni' => 'tidak dihuni',
        ]);
        DB::table('houses')->insert([
            'no_rumah' => 'A-2',
            'status_huni' => 'tidak dihuni',
        ]);
        DB::table('houses')->insert([
            'no_rumah' => 'A-3',
            'status_huni' => 'tidak dihuni',
        ]);
        DB::table('houses')->insert([
            'no_rumah' => 'A-4',
            'status_huni' => 'tidak dihuni',
        ]);
        DB::table('houses')->insert([
            'no_rumah' => 'A-5',
            'status_huni' => 'tidak dihuni',
        ]);

        DB::table('houses')->insert([
            'no_rumah' => 'B-1',
            'status_huni' => 'tidak dihuni',
        ]);
        DB::table('houses')->insert([
            'no_rumah' => 'B-2',
            'status_huni' => 'tidak dihuni',
        ]);
        DB::table('houses')->insert([
            'no_rumah' => 'B-3',
            'status_huni' => 'tidak dihuni',
        ]);
        DB::table('houses')->insert([
            'no_rumah' => 'B-4',
            'status_huni' => 'tidak dihuni',
        ]);
        DB::table('houses')->insert([
            'no_rumah' => 'B-5',
            'status_huni' => 'tidak dihuni',
        ]);

        DB::table('houses')->insert([
            'no_rumah' => 'C-1',
            'status_huni' => 'tidak dihuni',
        ]);
        DB::table('houses')->insert([
            'no_rumah' => 'C-2',
            'status_huni' => 'tidak dihuni',
        ]);
        DB::table('houses')->insert([
            'no_rumah' => 'C-3',
            'status_huni' => 'tidak dihuni',
        ]);
        DB::table('houses')->insert([
            'no_rumah' => 'C-4',
            'status_huni' => 'tidak dihuni',
        ]);
        DB::table('houses')->insert([
            'no_rumah' => 'C-5',
            'status_huni' => 'tidak dihuni',
        ]);

        DB::table('houses')->insert([
            'no_rumah' => 'D-1',
            'status_huni' => 'tidak dihuni',
        ]);
        DB::table('houses')->insert([
            'no_rumah' => 'D-2',
            'status_huni' => 'tidak dihuni',
        ]);
        DB::table('houses')->insert([
            'no_rumah' => 'D-3',
            'status_huni' => 'tidak dihuni',
        ]);
        DB::table('houses')->insert([
            'no_rumah' => 'D-4',
            'status_huni' => 'tidak dihuni',
        ]);
        DB::table('houses')->insert([
            'no_rumah' => 'D-5',
            'status_huni' => 'tidak dihuni',
        ]);


    }
}
