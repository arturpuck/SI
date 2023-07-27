<?php

namespace App\Handlers\Prostitution;

use Illuminate\View\View;


class ShowCreatorPanelHandler
{
    public function handle() : View
    {
        return view('prostitution.prostitution_notice_creator_panel');
    }

}