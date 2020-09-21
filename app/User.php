<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Notifications\SendPasswordResetLink;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Http\Requests\User\ChangeUserPasswordRequest;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email', 'password', 'login', 'birth_date', 'user_type_id', 'sexual_orientation_id', 'avatar_url'
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

    public function getHasAvatarFileStoredAttribute(){
        return \Storage::disk('public')->exists($this->current_avatar_file_path);
    }

    public function getCurrentAvatarReferenceAttribute(){
        if(isset($this->avatar_file_name)){
            return $this->current_avatar_file_path;
        }

        if(isset($this->avatar_url)){
            return $this->avatar_url;
        }

        return null;
    }

    public function getCurrentAvatarFilePathAttribute(){
        $avatarsDirectory = env('AVATARS_DIRECTORY');
        return isset($this->avatar_file_name) ? $avatarsDirectory.$this->avatar_file_name : null;
    }

    public function getHasAvatarAttribute(){
        return isset($this->avatar_url) or isset($this->avatar_file_name);
    }

    public function deleteCurrentAvatarFileFromStorage(){

        try{
              if($this->has_avatar_file_stored){
                Storage::disk('public')->delete($this->current_avatar_file_path);
                return true;
              }else{
                  return false;
              }
        }catch(\Exception $exception){
            return false;
        }
    }

    public function redefineAvatarSettings($fileName = null, $URL = null){
       $this->avatar_file_name = $fileName;
       $this->avatar_url = $URL;
       $this->save();
    }

    public function changeAvatar(Request $request) : Response{
        $avatarURL = $request->get('valid_image_url');
       try{
            if(empty($avatarURL)){
                $file = $request->file('avatar_from_hard_drive');
                $extension = $file->getClientOriginalExtension();
                $fileName = Str::random(20).'.'.$extension;
                $avatarsDirectory = env('AVATARS_DIRECTORY');
                $filePath = $avatarsDirectory.$fileName;
                $file->storeAs($avatarsDirectory, $fileName, 'public');
                $this->deleteCurrentAvatarFileFromStorage();
                $this->redefineAvatarSettings($fileName);
            }else{
                $this->deleteCurrentAvatarFileFromStorage();
                $this->redefineAvatarSettings(null, $avatarURL);
            }

            return back()->with('success', 'avatar_changed_successfully');

       }catch(\Exception $exception){
          return back()->withErrors(['message' => 'the_data_looks_ok_but_an_unexpected_error_occured']);
       }
        
    }

    public function deleteAvatar() : Response{
        if($this->has_avatar){
            $this->deleteCurrentAvatarFileFromStorage();
            $this->redefineAvatarSettings();
            return response('success', 200);
        }
        else{
            return response(['the_user_has_no_avatar'],400);
        }
    }

    public function changePassword(ChangeUserPasswordRequest $request) : Response{
        $this->password = \Hash::make($request->new_password);
        $this->save();
        return response('success', 200)->header('Content-Type', 'text/plain');    
    }
}
