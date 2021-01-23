<?php

namespace App\Handlers\Movies;

use App\Repositories\MoviesRepository;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Helpers\Validators\MoviesAdvancedSearchValidator;


Class AdvancedSearchHandler {

    public function __construct(private MoviesRepository $moviesRepository){}

    public function handle(Request $request):Response{
       
    }
    

}