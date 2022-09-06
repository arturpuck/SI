<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use App\Http\Controllers\Auth\RegisterController;
use Tests\TestCase;
use App\User;

class RegisterUserTest extends TestCase
{
    use RefreshDatabase;
    
    public function testTryToRegisterUserWithMissingLogin()
    {
        $user = User::factory()->make();
        $payload = $user->toArray();
        unset($payload['login']);
        $response = $this->post(route('auth.register.create'), $payload);
        $response->assertStatus(400);
        $response->assertJson(['login' => RegisterController::ERROR_MESSAGES['login.required']]);
    }
}
