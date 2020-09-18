<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use App\Exceptions\AvatarImageException;
use Illuminate\Http\Client\ConnectionException;
use Exception;

class URLRefersToValidAvatarImage implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    private $errorMessage = null;
    const ALLOWED_EXTENSIONS = [
        'jpg', 'jpeg', 'svg', 'bmp', 'gif', 'png', 'webp', 'svg+xml'
    ];
    

    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        try{
               if(!($image = $this->validateImageURL($value))){
                 throw new AvatarImageException('invalid_image_url'); 
               }

               if(!$this->imageHasValidExtension($image)){
                 throw new AvatarImageException('invalid_image_extension');
               }
               
               if(!$this->imageHasValidDimensions($image)){
                throw new AvatarImageException('invalid_image_dimensions');
               }

               return true;
               
        }
        catch(AvatarImageException $exception){
            $this->errorMessage = $exception->getMessage();
            return false;
        }
        catch(Exception $exception){
            $this->errorMessage = 'invalid_image_url_or_another_error';
            return false;
        }
             
    }

    private function imageHasValidDimensions(array $image) : bool{
        return ($image[0] < 129) and ($image[1] < 129);
    }

    private function imageHasValidExtension(array $image) : bool {
        $mime = $image['mime'];
        return $this->strContainsInformationAboutValidType($mime) and $this->strContainsInformationAboutValidExtension($mime);
    }

    private function validateImageURL($URL) {
         $imageInfo =  getimagesize($URL);
         return $imageInfo;         
    }

    private function strContainsInformationAboutValidExtension(string $str) : bool{
        $extension = Str::afterLast($str, '/');
        return in_array($extension,self::ALLOWED_EXTENSIONS);
    }

    private function strContainsInformationAboutValidType(string $str) : bool{
        $contentType = Str::before($str,'/');
        return $contentType == 'image';
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return $this->errorMessage;
    }
}
