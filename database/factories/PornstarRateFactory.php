<?php

namespace Database\Factories;

use App\PornstarRate;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Traits\Factories\CommonFactoryCases;

class PornstarRateFactory extends Factory
{
    use CommonFactoryCases;
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PornstarRate::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */

    public function definition() //turns out this factory is kind of useless 
    {
        return [
            'user_id' => $this->faker->randomElement($this->usersIDs),
            'pornstar_id' => 1, //must be overwritten anyway
            'rate' => rand(1,10)
        ];
    }
}
