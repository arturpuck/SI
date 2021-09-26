<?php

namespace Database\Seeders;

use App\PornstarComment;
use Illuminate\Database\Seeder;
use App\Pornstar;

class PornstarCommentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach(Pornstar::all() as $pornstar){

              PornstarComment::factory()
                               ->count(90)
                               ->create(['pornstar_id' => $pornstar->id]);
        }
       
    }
}
