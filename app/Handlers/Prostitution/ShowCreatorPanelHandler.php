<?php

namespace App\Handlers\Prostitution;

use Illuminate\View\View;
use App\UserType;

class ShowCreatorPanelHandler
{
    public function handle() : View
    {
        $userTypes = array_values($this->getTranslatedUserTypes());
        $userTypeIds = array_keys($userTypes);
        return view('prostitution.prostitution_notice_creator_panel')
                    ->with([
                        'userTypes' => json_encode($userTypes, true),
                        'userTypeIds' => json_encode($userTypeIds)
                    ]);
    }

    private function getTranslatedUserTypes() : array
    {
        $result = [];
        foreach(UserType::all() as $userType)
        {
            $result[$userType->id] = __($userType->user_type_name);
        }
        return $result;
    }
}