<?php

namespace App\Handlers;
use Illuminate\Http\Request;

Abstract Class Handler {
    public abstract function handle(Request $request);
}