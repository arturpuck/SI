<?php

namespace Database\Factories;

use App\PornstarComment;
use App\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class PornstarCommentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PornstarComment::class;
    protected ?array $usersIDs = null;

    /**
     * Define the model's default state.
     *
     * @return array
     */

     public function initiateUsers() : void 
     {
        if(!$this->usersIDs){
           $this->usersIDs = User::pluck('id')->toArray();
        }
     }
    public function definition()
    {
        $this->initiateUsers();
        $addedByAuthenticatedUser = rand(0,1);

        return [
            'comment' => $this->faker->text(200),
            'user_id' => $addedByAuthenticatedUser ? $this->faker->randomElement($this->usersIDs)  : null,
            'pornstar_id' => 1,
            'parent_comment_id' => null,
            'nickname' => $addedByAuthenticatedUser ? null : $this->faker->name
        ];
    }
}
