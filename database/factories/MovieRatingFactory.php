<?php

namespace Database\Factories;

use App\MovieRating;
use App\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class MovieRatingFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = MovieRating::class;
    protected ?array $usersIDs = null;

    /**
     * Define the model's default state.
     *
     * @return array
     */

    private function initiateUsers()
    {
        if (!$this->usersIDs) {
            $this->usersIDs = User::pluck('id')->toArray();
        }
    }

    public function definition()
    {
        $this->initiateUsers();

        return [
            'user_id' => $this->faker->randomElement($this->usersIDs),
            'movie_id' => 1, //this must be overwitten anyways
            'user_vote' => rand(1,10),
            'ammount_of_spermatozoids' => rand(0,20),
            'user_assigned_like' => rand(0,1),
            'last_spermatozoid_added_at' => $this->faker->dateTime(max:'yesterday', timezone:'UTC')
        ];
    }
}
