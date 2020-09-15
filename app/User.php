<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Notifications\SendPasswordResetLink;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email', 'password', 'login', 'birth_date', 'user_type_id', 'sexual_orientation_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function sendPasswordResetNotification($token)
    {
      $this->notify(new SendPasswordResetLink($token));
    }

    public function modifyBasicData(Request $request) : Response
    {
        $input = $request->only(['email', 'user_type_id', 'sexual_orientation_id']);
        try{
            $this::update($input);
            return response('success', 200)->header('Content-Type', 'text/plain');
        }
        catch(\Exception $exception){
            return response($exception->getMessage(), 500)->header('Content-Type', 'text/plain');
        }
    }

    public function getHasAvatarAttribute(){
        return \Storage::disk('public')->exists('images/decoration/users/avatars'.$this->login.'*');
    }
}
