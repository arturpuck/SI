<?php

namespace App\Handlers\Employees;

use Illuminate\View\View;
use App\Pornstar;

Class ShowEmployeePanelHandler
{
    public function handle() : View
    {
        $pornstarsNames = Pornstar::pluck('nickname')->toArray();
        return view('employees.edit_movie_panel')->with([
            'pornstarsNames' => $pornstarsNames
        ]);
    }
}