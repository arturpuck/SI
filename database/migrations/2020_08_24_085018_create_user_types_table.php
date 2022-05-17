<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\UserType;

class CreateUserTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_types', function (Blueprint $table) {
            $table->id();
            $table->string('user_type_name',20);
            $table->engine = 'InnoDB';
        });

        UserType::insert([['user_type_name' => 'male'], 
                         ['user_type_name'=>'female'], 
                         ['user_type_name' =>'hermaphrodite'], 
                         ['user_type_name' =>'transsexualist'], 
                         ['user_type_name' =>'couple'],
                         ['user_type_name' =>'employee']]);
        
                         Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_types');
    }
}
