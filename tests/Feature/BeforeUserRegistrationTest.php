<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\User;

class BeforeUserRegistrationTest extends TestCase
{
    use RefreshDatabase, WithFaker;
   
    public function testUserProviedEmailThatAlreadyExists()
    {
        $email = 'cygan@wp.pl';
        User::factory()->create(['email' => $email]);
        $URL = route('auth.verify-email', compact('email'));
        $response = $this->get($URL);
        $response->assertStatus(200);
        $response->assertSee('exists');
    }

    public function testUserProviedEmailThatDoesNotExists()
    {
        User::factory()->create(['email' => 'cygan@wp.pl']);
        $URL = route('auth.verify-email', ['email' => 'jaszczomp@nbp.pl']);
        $response = $this->get($URL);
        $response->assertStatus(200);
        $response->assertSee('does not exist');
    }

    public function testVerifyEmailWithMissingEmail()
    {
        $URL = route('auth.verify-email', ['email' => '#']);
        $URL = str_replace('#', '', $URL);
        $response = $this->get($URL);
        $response->assertStatus(404);  // I know there is the required rule in the custom request however when an email is missing laravel returns 404 instead of 400 and the defined error message
    }

    public function testVerifyEmailWithIncorrectFormat()
    {
        $URL = route('auth.verify-email', ['email' => $this->faker->text(15)]);
        $response = $this->get($URL);
        $response->assertStatus(400);
        $response->assertJson( [__('email_has_incorrect_format')]);
    }

    public function testVerifyLoginThatAlreadyExists()
    {
        $login = 'pinokio';
        User::factory()->create(compact('login'));
        $URL = route('auth.verify-login', compact('login'));
        $response = $this->get($URL);
        $response->assertStatus(200);
        $response->assertSee('exists');
    }

    public function testUserProviedLoginThatDoesNotExists()
    {
        User::factory()->create(['login' => 'cygan@wp.pl']);
        $URL = route('auth.verify-login', ['login' => 'jaszczomp@nbp.pl']);
        $response = $this->get($URL);
        $response->assertStatus(200);
        $response->assertSee('does not exist');
    }

    public function testVerifyEmailWithMissingLogin()
    {
        $URL = route('auth.verify-login', ['login' => '#']);
        $URL = str_replace('#', '', $URL);
        $response = $this->get($URL);
        $response->assertStatus(404);  // Same as with missing email
    }
}
