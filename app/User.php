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
use App\Http\Requests\User\ChangeOtherUserSettingsRequest;
use App\Http\Requests\Pornstars\RatePornstarRequest;
use App\PornstarRate;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class User extends Authenticatable
{
    use Notifiable, HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email', 'password', 'login', 'birth_date', 'user_type_id', 'sexual_orientation_id', 'shows_birthday'
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

    protected const SETTINGS_COLUMNS = [
        'shows_birthday'
    ];

    protected $appends = ['avatar_file_path'];

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
        return \Storage::disk('public')->exists($this->avatar_file_path);
    }


    public function getAvatarFilePathAttribute(){
        $avatarsDirectory = config('filesystems.avatar_directory');
        return isset($this->avatar_file_name) ? $avatarsDirectory.$this->avatar_file_name : null;
    }

    public function getHasAvatarAttribute(){
        return isset($this->avatar_file_name) and $this->has_avatar_file_stored;
    }

    private function deletePreviousAvatarFileFromStorage(){

        try{
              if($this->has_avatar){
                Storage::disk('public')->delete($this->avatar_file_path);
                return true;
              }else{
                  return false;
              }
        }catch(\Exception $exception){
            return false;
        }
    }

    public function changeAvatar(Request $request) : Response{
       try{
            $file = $request->file('avatar_from_hard_drive');
            $extension = $file->getClientOriginalExtension();
            $fileName = Str::random(20).'.'.$extension;
            $avatarsDirectory = config('filesystems.avatar_directory');
            $filePath = $avatarsDirectory.$fileName;
            $file->storeAs($avatarsDirectory, $fileName, 'public');
            $this->deletePreviousAvatarFileFromStorage();
            $this->changeAvatarFileNameSetting($fileName);
            return back()->with('success', 'avatar_changed_successfully');

       }catch(\Exception $exception){
          return back()->withErrors(['message' => 'the_data_looks_ok_but_an_unexpected_error_occured']);
       }
        
    }

    public function deleteAvatar() : Response{
        if($this->has_avatar){
            $this->deletePreviousAvatarFileFromStorage();
            $this->unsetAvatarFileNameSetting();
            return response('success', 200);
        }
        else{
            return response(['the_user_has_no_avatar'],400);
        }
    }

    private function unsetAvatarFileNameSetting(){
        $this->avatar_file_name = null;
        $this->save();
    }

    private function changeAvatarFileNameSetting($name){
        $this->avatar_file_name = $name;
        $this->save();
    }

    public function changePassword(ChangeUserPasswordRequest $request) : Response{
        $this->password = \Hash::make($request->new_password);
        $this->save();
        return response('success', 200)->header('Content-Type', 'text/plain');    
    }

    public function changeOtherSettings(ChangeOtherUserSettingsRequest $request) : Response{
          $data = $request->only(self::SETTINGS_COLUMNS);
          $this->update($data);
          return response('success', 200)->header('Content-Type', 'text/plain');
    }

    public function ratePornstar(RatePornstarRequest $request) : Response{

        try{
            PornstarRate::updateOrCreate([
                'user_id' => $this->id,
                'pornstar_id' => $request->get('pornstar_id')
            ],
            [
              'rate' => $request->get('rate')
            ]);

            return response('success', 200)->header('Content-Type', 'text/plain');
        }
        catch(\Exception $exception){
            return response('the_data_looks_ok_but_an_unexpected_server_error_occured', 500)->header('Content-Type', 'text/plain');
        }
 
    }

}
