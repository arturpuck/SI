<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class RegisterActivityTime
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        session(['last_activity' => true]);
        return $next($request);
    }
}
