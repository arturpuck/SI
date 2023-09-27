<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\User;
use App\Pornstar;
use App\PornstarRate;

class PornstarRateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userIDs = User::pluck('id')->toArray();
        $pornstarsIDs = User::pluck('id')->toArray();

        $data = [];

        foreach($userIDs as $userID) {
            foreach($pornstarsIDs as $pornstarsID) {
                $data []= ['user_id' => $userID, 'pornstar_id' => $pornstarsID, 'rate' => rand(1,10)];
            }
        }

        PornstarRate::insert($data);

    }
}
