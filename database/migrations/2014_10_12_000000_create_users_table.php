<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

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
            $table->enum('user_type', ['male', 'female', 'hermaphrodite', 'transsexual', 'couple'])->nullable();
            $table->enum('sexual_orientation', ['heterosexual', 'homosexual', 'bisexual', 'autosexual', 'asexual'])->nullable();
            $table->string('password');
            $table->date('birth_date');
            $table->rememberToken();
            $table->timestamps();
        });
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
