<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Voivodeship;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('voivodeships', function (Blueprint $table) {
            $table->id();
            $table->string('name', 30);
        });

        $voivodeships = $this->getVoivodeships();
        Voivodeship::insert($voivodeships);
    }

    protected function getVoivodeships() : array
    {
        $jsonContent = file_get_contents('resources/cities.json');
        $regionsData = json_decode($jsonContent);
        $voivodeships = [];
        foreach($regionsData as $region) {
            $voivodeships[] = [
                'name' => $region->region_name
            ];
        }
        return $voivodeships;
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('voievodeships');
    }
};
