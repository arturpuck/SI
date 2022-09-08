<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use App\Http\Controllers\Auth\RegisterController;
use Tests\TestCase;
use Illuminate\Support\Str;
use App\User;

class RegisterUserTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    public function testRegisterUserWithValidData()
    {
        $payload = User::factory()->getRandomPayload();
        $response = $this->post(route('auth.register.create'), $payload);
        $response->assertStatus(302);
        $response->assertSessionDoesntHaveErrors();
    }
    
    public function testRegisterUserWithMissingLogin()
    {
        $payload = User::factory()->getRandomPayload();
        unset($payload['login']);
        $response = $this->post(route('auth.register.create'), $payload);
        $response->assertStatus(302);
        $response->assertSessionHasErrors('login', RegisterController::ERROR_MESSAGES['login.required']);
    }
    
    public function testRegisterUserWithToShortLogin()
    {
        $payload = User::factory()->getRandomPayload();
        $payload['login'] = Str::random(rand(1,2));
        $response = $this->post(route('auth.register.create'), $payload);
        $response->assertStatus(302);
        $response->assertSessionHasErrors('login', RegisterController::ERROR_MESSAGES['login.min']);
    }
    
    public function testRegisterUserWithLoginContainingToManyCharacters()
    {
        $payload = User::factory()->getRandomPayload();
        $payload['login'] = Str::random(rand(21,40));
        $response = $this->post(route('auth.register.create'), $payload);
        $response->assertStatus(302);
        $response->assertSessionHasErrors('login', RegisterController::ERROR_MESSAGES['login.max']);
    }
    
    public function testRegisterUserWithLoginThatHasAlreadyBeenTaken()
    {
        $login = Str::random(rand(3,20));
        $user = User::factory()->create(compact('login'));
        $payload = User::factory()->getRandomPayload();
        $payload['login'] = $login;
        $response = $this->post(route('auth.register.create'), $payload);
        $response->assertStatus(302);
        $response->assertSessionHasErrors('login', RegisterController::ERROR_MESSAGES['login.unique']);
    }

    public function testRegisterUserWithMissingEmail()
    {
        $payload = User::factory()->getRandomPayload();
        unset($payload['email']);
        $response = $this->post(route('auth.register.create'), $payload);
        $response->assertStatus(302);
        $response->assertSessionHasErrors('email', RegisterController::ERROR_MESSAGES['email.required']);
    }

    public function testRegisterUserWithInvalidEmail()
    {
        $payload = User::factory()->getRandomPayload();
        $payload['email'] = Str::random(rand(2,20));
        $response = $this->post(route('auth.register.create'), $payload);
        $response->assertStatus(302);
        $response->assertSessionHasErrors('email', RegisterController::ERROR_MESSAGES['email.email']);
    }

    public function testRegisterUserWithEmailThatAlreadyExists()
    {
        $email = $this->faker->email();
        $user = User::factory()->create(compact('email'));
        $payload = User::factory()->getRandomPayload();
        $payload['email'] = $email;
        $response = $this->post(route('auth.register.create'), $payload);
        $response->assertStatus(302);
        $response->assertSessionHasErrors('email', RegisterController::ERROR_MESSAGES['email.unique']);
    }

    public function testRegisterUserWithMissingPassword()
    {
        $payload = User::factory()->getRandomPayload();
        unset($payload['password']);
        $response = $this->post(route('auth.register.create'), $payload);
        $response->assertStatus(302);
        $response->assertSessionHasErrors('password', RegisterController::ERROR_MESSAGES['password.required']);
    }

    public function testRegisterUserWithPasswordContainingToManyCharacters()
    {
        $payload = User::factory()->getRandomPayload();
        $payload['password'] = Str::random(rand(21,40));
        $response = $this->post(route('auth.register.create'), $payload);
        $response->assertStatus(302);
        $response->assertSessionHasErrors('password', RegisterController::ERROR_MESSAGES['password.max']);
    }

    public function testRegisterUserWithPasswordContainingNotEnoughCharacters()
    {
        $payload = User::factory()->getRandomPayload();
        $payload['password'] = Str::random(rand(1,2));
        $response = $this->post(route('auth.register.create'), $payload);
        $response->assertStatus(302);
        $response->assertSessionHasErrors('password', RegisterController::ERROR_MESSAGES['password.min']);
    }

    public function testRegisterUserWithInvalidUserType()
    {
        $payload = User::factory()->getRandomPayload();
        $payload['user_type_id'] = rand(10000,40000);
        $response = $this->post(route('auth.register.create'), $payload);
        $response->assertStatus(302);
        $response->assertSessionHasErrors('user_type_id', RegisterController::ERROR_MESSAGES['user_type_id.exists']);
    }

    public function testRegisterUserWithInvalidSexualOrientation()
    {
        $payload = User::factory()->getRandomPayload();
        $payload['sexual_orientation_id'] = rand(10000,40000);
        $response = $this->post(route('auth.register.create'), $payload);
        $response->assertStatus(302);
        $response->assertSessionHasErrors('sexual_orientation_id', RegisterController::ERROR_MESSAGES['sexual_orientation_id.exists']);
    }
    
    public function testRegisterUserWithMissingBirthDate()
    {
        $payload = User::factory()->getRandomPayload();
        unset($payload['birth_date']);
        $response = $this->post(route('auth.register.create'), $payload);
        $response->assertStatus(302);
        $response->assertSessionHasErrors('birth_date', RegisterController::ERROR_MESSAGES['birth_date.required']);
    }

    public function testRegisterUserWithBirthDateWithIncorrectFormat()
    {
        $payload = User::factory()->getRandomPayload();
        $payload['birth_date'] = Str::random(rand(1,20));
        $response = $this->post(route('auth.register.create'), $payload);
        $response->assertStatus(302);
        $response->assertSessionHasErrors('birth_date', RegisterController::ERROR_MESSAGES['birth_date.date']);
    }

    public function testRegisterUserYoungerThan18Years()
    {
        $payload = User::factory()->getRandomPayload();
        $payload['birth_date'] = date('Y-m-d', strtotime('17 years ago'));
        $response = $this->post(route('auth.register.create'), $payload);
        $response->assertStatus(302);
        $response->assertSessionHasErrors('birth_date', RegisterController::ERROR_MESSAGES['birth_date.before_or_equal']);
    }

    public function testRegisterUserOlderThan120Years()
    {
        $agedOverHumanLifespan = rand(121,250);
        $payload = User::factory()->getRandomPayload();
        $payload['birth_date'] = date('Y-m-d', strtotime("$agedOverHumanLifespan years ago"));
        $response = $this->post(route('auth.register.create'), $payload);
        $response->assertStatus(302);
        $response->assertSessionHasErrors('birth_date', RegisterController::ERROR_MESSAGES['birth_date.after_or_equal']);
    }
}
