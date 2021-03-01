<?php

namespace App\Handlers\Movies;

use App\Repositories\MoviesRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Lang;


class GetMoviesByCategoryHandler
{

    public function __construct(private MoviesRepository $moviesRepository)
    {
    }

    public function handle(string $categoryName, int $pageNumber = 1){

        $categoryIdentifier = Lang::get("categories.$categoryName", [], 'en');
        $displayedCategoryName = $this->getDisplayedCategoryName($categoryName);

        switch ($categoryIdentifier) {

            case 'big-tits':
                $this->moviesRepository->filterByTitsSize('big');
            break;

            case 'anal':
                $this->moviesRepository->filterByAnalAmount('maximum');
            break;

            case 'blowjob':
                $this->moviesRepository->filterByBlowjobAmount('maximum');
            break;

            case 'handjob':
                $this->moviesRepository->filterByHandjobAmount('maximum');
            break;

            case 'blondes':
              $this->moviesRepository->filterByHairColor('blonde');
            break;

            case 'titfuck':
               $this->moviesRepository->filterByTitfuckAmount('maximum');
            break;

            case 'pussy-licking' :
                $this->moviesRepository->filterByPussyLickingAmount('maximum');
            break;
        }

        $movies = $this->moviesRepository->withBasicPornstarList()
            ->paginate($pageNumber, route('movies.category.specific', ['categoryName' => $categoryName]));

        return view('movies.category_specific')->with([
            'displayedCategoryName' => $displayedCategoryName,
            'categoryIdentifier' => $categoryIdentifier,
            'movies' => $movies,
            'title' => $this->getTitle($displayedCategoryName),
            'description' => $this->getDescription($displayedCategoryName)
        ]);
    }

    private function getDescription(string $displayedCategoryName): string
    {
        return __('categories_description_beginning') . ' : ' . $displayedCategoryName . '. ' . __('categories_description_end');
    }

    private function getTitle(string $displayedCategoryName): string
    {
        return __('movies_in_category') . ' : ' . $displayedCategoryName;
    }

    private function getDisplayedCategoryName(string $categoryName): string
    {
        return ucfirst(str_replace('-', ' ', $categoryName));
    }
}
