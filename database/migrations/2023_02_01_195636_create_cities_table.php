<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\City;
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
        Schema::create(
            'cities', function (Blueprint $table) {
                $table->id();
                $table->string('name', 50);
                $table->unsignedBigInteger('voivodeship_id');
                $table->foreign('voivodeship_id')->references('id')->on('voivodeships');
            }
        );
        $this->insertCities();
    }

    protected function insertCities() : void 
    {
        $jsonContent = file_get_contents('resources/cities.json');
        $regionsData = json_decode($jsonContent);
        $allVoivodeships = Voivodeship::all()->keyBy('name');
        $cities = [];

        foreach($regionsData as $region) {

            foreach($region->cities as $city)
            {
                $cities[] = [
                    'name' => $city->text_simple,
                    'voivodeship_id' => $allVoivodeships->get($region->region_name)->id
                ];
            }
        }

        City::insert($cities);

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cities');
    }
};
