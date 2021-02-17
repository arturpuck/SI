<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\StoryOrCostumeType;

class CreateStoryOrCostumeTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('story_or_costume_types', function (Blueprint $table) {
            $table->id();
            $table->char('name',30);
        });

        StoryOrCostumeType::insert([
            ['name' => 'female pupil'],
            ['name' => 'female employee'],
            ['name' => 'female student'],
            ['name' => 'wife'],
            ['name' => 'female teacher'],
            ['name' => 'nurse'],
            ['name' => 'female slave'],
            ['name' => 'nun'],
            ['name' => 'female police officer'],
            ['name' => 'prostitute'],
            ['name' => 'female boss'],
            ['name' => 'cleaner'],
            ['name' => 'mommy'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('story_or_costume_types');
    }
}
