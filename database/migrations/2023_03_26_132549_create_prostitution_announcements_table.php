<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prostitution_announcements', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');

            $table->string('nickname', 30);
            $table->string('phone_number', 16)->nullable()->default(null);
            $table->date('birth_date');
            $table->text('description')->nullable()->default(null);

            $table->unsignedBigInteger('user_type_id');
            $table->foreign('user_type_id')->references('id')->on('user_types');
            
            $table->unsignedBigInteger('sexual_orientation_id')->nullable()->default(null);
            $table->foreign('sexual_orientation_id')->references('id')->on('sexual_orientations');

            $table->tinyInteger('tits_size')->unsigned()->nullable()->default(null);
            $table->tinyInteger('height_in_centimeters')->unsigned()->nullable()->default(null);
            $table->tinyInteger('weight_in_kilograms')->unsigned()->nullable()->default(null);
            $table->string('hair_color', 15)->nullable()->default(null);
            $table->json('main_services');
            $table->json('aditional_services')->nullable()->default(null);
            $table->json('payment_forms');
            $table->string('last_generated_token', 10);
            $table->json('working_hours')->nullable()->default(null);

            $table->unsignedBigInteger('region_id');
            $table->foreign('region_id')->references('id')->on('voivodeships');

            $table->unsignedBigInteger('city_id');
            $table->foreign('city_id')->references('id')->on('cities');
            $table->boolean('hidden_by_a_user')->default(false);
            $table->date('valid_until')->nullable()->default(null);
            $table->softDeletes();
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
        Schema::dropIfExists('prostitution_announcements');
    }
};
