<?php

use Illuminate\Database\Migrations\Migration;
use App\UserType;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        UserType::insert([
            ['user_type_name' => 'triangle_or_more'],
            ['user_type_name' => 'brothel'],
            ['user_type_name' => 'massage_parlor']
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
