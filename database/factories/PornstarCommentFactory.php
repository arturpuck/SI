<?php

namespace Database\Factories;

use App\PornstarComment;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Traits\Factories\CommonFactoryCases;

class PornstarCommentFactory extends Factory
{
    use CommonFactoryCases;
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PornstarComment::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */

    public function definition()
    {
        $this->initiateUsers();
        $addedByAuthenticatedUser = rand(0,1);

        return [
            'comment' => $this->faker->text(200),
            'user_id' => $addedByAuthenticatedUser ? $this->faker->randomElement($this->usersIDs)  : null,
            'pornstar_id' => 1,
            'parent_comment_id' => null,
            'nickname' => $addedByAuthenticatedUser ? null : substr($this->faker->text, 0, 20)
        ];
    }
}
