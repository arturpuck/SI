<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\SexualOrientation;

class CreateSexualOrientationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sexual_orientations', function (Blueprint $table) {
            $table->id();
            $table->string('sexual_orientation_name',20);
            $table->engine = 'InnoDB';
        });

        SexualOrientation::insert([
            ['sexual_orientation_name' => 'heterosexual'],
            ['sexual_orientation_name' => 'homosexual'],
            ['sexual_orientation_name' => 'bisexual'],
            ['sexual_orientation_name' => 'asexual'],
            ['sexual_orientation_name' => 'autosexual']
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sexual_orientations');
    }
}
