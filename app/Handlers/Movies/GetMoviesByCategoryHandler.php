<?php

namespace App\Handlers\Movies;

use App\Repositories\MoviesRepository;
use App\Traits\LinkFactory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Lang;

class GetMoviesByCategoryHandler
{
    use LinkFactory;

    public function __construct(private MoviesRepository $moviesRepository)
    {
    }

    public function handle(string $categoryName, int $pageNumber = 1)
    {

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

            case 'pussy-licking':
                $this->moviesRepository->filterByPussyLickingAmount('maximum');
                break;

            case 'feet':
                $this->moviesRepository->filterByFeetPettingAmount('maximum');
                break;

            case 'bukkake':
                $this->moviesRepository->filterByAbundanceType('bukkake');
                break;

            case 'femdom':
                $this->moviesRepository->filterByIsFemaleDomination(true);
                break;

            case 'bdsm':
                $this->moviesRepository->filterByIsSadisticOrMasochistic(true);
                break;

            case 'brunettes':
                $this->moviesRepository->filterByHairColor('dark');
                break;

            case 'redheads':
                $this->moviesRepository->filterByHairColor('red');
                break;

            case 'matures':
                $this->moviesRepository->filterByAgeRange('mature');
                break;

            case 'teenagers':
                $this->moviesRepository->filterByAgeRange('teenagers');
                break;

            case 'amateur':
                $this->moviesRepository->filterByProfessionalismLevel('amateur');
                break;

            case 'asians':
                $this->moviesRepository->filterByRace('asian');
                break;

            case 'latinas':
                $this->moviesRepository->filterByRace('latin');
                break;

            case 'ebonies':
                $this->moviesRepository->filterByRace('ebony');
                break;

            case 'GangBang':
                $this->moviesRepository->filterByAbundanceType('GangBang');
                break;

            case 'lesbians':
                $this->moviesRepository->filterByAbundanceType('lesbian');
                break;

            case 'group':
                $this->moviesRepository->filterByAbundanceType('group');
                break;

            case 'cumshot-compilations':
                $this->moviesRepository->filterByIsCumshotCompilation(true);
                break;

            case 'cum-on-face':
                $this->moviesRepository->filterByCumshotType('on_face');
                break;

            case 'cum-swallow':
                $this->moviesRepository->filterByCumshotType('cum_swallow');
                break;

            case 'cum-on-feet':
                $this->moviesRepository->filterByCumshotType('on_feet');
                break;

            case 'creampie':
                $this->moviesRepository->filterByCumshotType('creampie');
                break;

            case 'cum-in-ass':
                $this->moviesRepository->filterByCumshotType('anal_creampie');
                break;

            case 'cum-on-tits':
                $this->moviesRepository->filterByCumshotType('on_tits');
                break;

            case 'pantyhose':
                $this->moviesRepository->filterByShowPantyhose(true);
                break;

            case 'high-heels':
                $this->moviesRepository->filterByShowHighHeels(true);
                break;

            case 'nurses':
                $this->moviesRepository->filterByStoryOrCostume('nurse');
                break;

            case 'female-teachers':
                $this->moviesRepository->filterByStoryOrCostume('female_teacher');
                break;

            case 'japanese':
                $this->moviesRepository->filterByNationality('japanese');
                break;

            case 'POV':
                $this->moviesRepository->filterByCameraStyle('POV');
                break;

            case 'russians':
                $this->moviesRepository->filterByNationality('russian');
                break;

            case 'pornstars':
                $this->moviesRepository->withAnyPornstar();
                break;
        }
        $currentRoute = route('movies.category.specific', ['categoryName' => $categoryName]);
        $movies = $this->moviesRepository->withBasicPornstarList()
            ->paginate($pageNumber, $currentRoute);

        return view('movies.category_specific')->with([
            'displayedCategoryName' => $displayedCategoryName,
            'categoryIdentifier' => $categoryIdentifier,
            'movies' => $movies,
            'title' => $this->getTitle($displayedCategoryName),
            'description' => $this->getDescription($displayedCategoryName),
            'links' => $this->generateLinks($currentRoute . '/{}', range(1, $movies->numberOfPages()))
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
