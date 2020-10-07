<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\User;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('login')->unique();
            $table->string('email')->unique();
            $table->unsignedBigInteger('user_type_id')->nullable();
            $table->foreign('user_type_id')->references('id')->on('user_types');
            $table->unsignedBigInteger('sexual_orientation_id')->nullable();
            $table->foreign('sexual_orientation_id')->references('id')->on('sexual_orientations');
            $table->string('password');
            $table->date('birth_date');
            $table->string('avatar_file_name')->nullable();
            $table->boolean('shows_birthday')->default(true);
            $table->rememberToken();
            $table->timestamps();
            $table->engine = 'InnoDB';
        });

        Schema::enableForeignKeyConstraints();
        User::create([
            'login' => 'Imperator',
            'email' => 'arturmostowiak@gmail.com',
            'user_type_id' => 1,
            'sexual_orientation_id' => 1,
            'password' => Hash::make('Implementation6'),
            'birth_date' => '1987-02-12'
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
