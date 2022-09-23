<?php

namespace App\Handlers;

use App\Movie;
use App\Pornstar;
use App\Repositories\MoviesRepository;
use Illuminate\Http\Response;
use App\Handlers\News\ShowNewsByPageHandler;
use App\News;

class SiteMapGeneratorHandler
{


    public const CATEGORIES_LIST = [
        'big_titts',
        'anal',
        'blowjob',
        'handjob',
        'blondes',
        'tittfuck',
        'pussy_licking',
        'feet',
        'bukkake',
        'femdom',
        'BDSM',
        'brunettes',
        'redheads',
        'milfs',
        'teenagers',
        'amateur',
        'asian',
        'latins',
        'ebony',
        'GangBang',
        'lesbians',
        'group',
        'cumshot_compilations',
        'cum_on_face',
        'cum_swallow',
        'cum_on_feet',
        'creampie',
        'cum_in_ass',
        'cum_on_titts',
        'pantyhose',
        'high_heels',
        'nurses',
        'teachers',
        'japanese',
        'POV',
        'russian',
        'pornstars'
    ];

    public function handle() : Response
    {
        $movies = Movie::all();
        $pornstars = Pornstar::all();

        return response()->view('sitemap', [
             'movies' => $movies,
             'pornstars' => $pornstars,
             'categoriesURLs' => $this->generateCategoriesURLs(),
             'news' => $this->generateNewsURLs(),
        ])->header('Content-Type', 'text/xml');
    }

    private function generateCategoriesURLs() : array 
    {
        $result = [];
        foreach(self::CATEGORIES_LIST as $category){
            $result[] = urldecode(route('movies.category.specific', ['categoryName' => __($category)]));
        }
        return $result;
    }

    private function generateNewsURLs() : array
    {
        $result = [];
        $numberOfPages = News::getNumberOfTotalPages(ShowNewsByPageHandler::NEWS_PER_PAGE);
        for($I = 1; $I <= $numberOfPages; $I++) {
            $result[] = urldecode(route('news.list', ['pageNumber' => $I]));
        }
        return $result;
    }
}