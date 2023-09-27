<?php

namespace Database\Factories;

use App\SexualOrientation;
use App\User;
use App\UserType;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;
    protected  ?array $userTypesIDs = null;
    protected ?array $sexualOrientationsIds = null;

    public function initiateUserTypes() : void {

        if(!$this->sexualOrientationsIds){
            $this->userTypesIDs = UserType::pluck('id')->toArray();
            $this->sexualOrientationsIds = SexualOrientation::pluck('id')->toArray();
        }
        
    }

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $this->initiateUserTypes();
        $userAge = rand(18,110);

        return [
            'login' => Str::random(rand(3, 20)),
            'email' => $this->faker->email,
            'user_type_id' => $this->faker->randomElement($this->userTypesIDs),
            'sexual_orientation_id' => $this->faker->randomElement($this->sexualOrientationsIds),
            'password' => Hash::make(Str::random(rand(3, 20))),
            'shows_birthday' => true,
            'birth_date' => date('Y-m-d', strtotime("$userAge years ago"))
        ];
    }

    public function getRandomPayload()
    {
        $userDetails = $this->definition();
        $userDetails['password'] = Str::random(rand(3, 20));
        return $userDetails;
    }
}
