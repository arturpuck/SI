<?php

namespace App\Repositories;

use App\Movie;
use App\Services\ElegantPaginator;
use App\Traits\Repositories\ElegantPagination;
use Carbon\Carbon;

class MoviesRepository extends BaseRepository
{

    use ElegantPagination;

    public const MODEL_NAME = Movie::class;

    private  ? string $rawSQLForTheMostSimilarMoviesSorting;

    private const SEX_TYPES_COLUMNS_NOT_POLYMORPHIC = [
        'anal_percentage',
        'blowjob_percentage',
        'pussy_fuck_percentage',
        'handjob_percentage',
        'tittfuck_percentage',
        'pussy_licking_percentage',
        'feet_petting_percentage',
    ];

    private const EXAMINE_IN_LOOP_MOVIE_ATTRIBUTES = [
        'shows_shaved_pussy',
        'actor_cumshot_type',
        'is_cumshot_compilation_type',
        'actress_has_pantyhose',
        'has_story',
        'actress_has_stockings',
        'shows_whips',
        'actress_has_glasses',
        'actress_has_glasses',
        'shows_sex_toys',
        'shows_high_heels',
        'shows_big_cock',
        'recorded_by_spy_camera',
        'is_sadistic_or_masochistic',
        'is_female_domination_type',
        'shows_latex',
        'is_translated_to_polish',
        'actress_tits_size',
        'actress_ass_size',
        'actress_thickness',
        'actress_hair_color',
        'actress_age_range',
        'actress_race',
    ];

    public function chronological() : MoviesRepository
    {

        $this->query = $this->query->orderBy('id', 'desc');
        return $this;
    }

    public function withBasicPornstarList(): MoviesRepository
    {

        $this->query = $this->query->with(['pornstars' => function ($query) {

            $query->select(['nickname', 'pornstars.id']);
        }]);

        return $this;
    }

    public function paginate($pageNumber, $baseURL, $elementsPerPage = 100): ElegantPaginator
    {

        return $this->paginateElegantly($this->query, $pageNumber, $baseURL, 'movies', $elementsPerPage);
    }

    public function filterByAbundanceType(string $abundance): MoviesRepository
    {

        $this->query = $this->query->where('abundance', 'LIKE', "%$abundance%");
        return $this;
    }

    public function filterByTitsSize(string $titsSize): MoviesRepository
    {

        $this->query = $this->query->where('actress_tits_size', $titsSize);
        return $this;
    }

    public function filterByAssSize(string $assSize): MoviesRepository
    {

        $this->query = $this->query->where('actress_ass_size', $assSize);
        return $this;
    }

    public function filterByThicknessSize(string $thicknessSize): MoviesRepository
    {

        $this->query = $this->query->where('actress_thickness', $thicknessSize);
        return $this;
    }

    public function filterByAgeRange(string $ageRange): MoviesRepository
    {

        $this->query = $this->query->where('actress_age_range', $ageRange);
        return $this;
    }

    public function filterByHairColor(string $hairColor): MoviesRepository
    {

        $this->query = $this->query->where('actress_hair_color', $hairColor);
        return $this;
    }

    public function filterByRace(string $race): MoviesRepository
    {

        $this->query = $this->query->where('actress_race', $race);
        return $this;
    }

    public function filterByNationality(string $nationality): MoviesRepository
    {

        $this->query = $this->query->whereHas('actressNationality', function ($query) use ($nationality) {

            $query->where('name', $nationality);
        });

        return $this;
    }

    public function filterByShavedPussy($shavedPussy): MoviesRepository
    {
        $shavedPussy = boolval($shavedPussy);
        $this->query = $this->query->where('shows_shaved_pussy', $shavedPussy);
        return $this;
    }

    private function getRemainingColumnsToResetForSexTypeQuery(string $columnName): array
    {

        switch ($columnName) {

            case 'double_penetration_percentage':
                $columnsToExclude = ['anal_percentage', 'pussy_fuck_percentage'];
                $remainingColumns = array_diff(self::SEX_TYPES_COLUMNS_NOT_POLYMORPHIC, $columnsToExclude);
                break;

            case 'position_69_percentage':
                $columnsToExclude = ['blowjob_percentage', 'pussy_licking_percentage'];
                $remainingColumns = array_diff(self::SEX_TYPES_COLUMNS_NOT_POLYMORPHIC, $columnsToExclude);
                break;

            default:
                $remainingColumns = array_diff(self::SEX_TYPES_COLUMNS_NOT_POLYMORPHIC, [$columnName]);
                break;
        }

        return $remainingColumns;
    }

    private function sexTypeQuery(string $amount, string $columnName): void
    {

        switch ($amount) {

            case 'only':
                $this->query = $this->query->where($columnName, '>=', 90);
                $remainingColumns = $this->getRemainingColumnsToResetForSexTypeQuery($columnName);
                $this->multiplyWhere($remainingColumns, null);
                break;

            case 'maximum':
                $this->query = $this->query->where($columnName, '>=', 90);
                break;

            case 'a_lot':
                $this->query = $this->query->where($columnName, '<', 90)
                    ->where($columnName, '>=', 60);
                break;

            case 'medium':
                $this->query = $this->query->where($columnName, '<', 60)
                    ->where($columnName, '>=', 30);
                break;

            case 'a_little':
                $this->query = $this->query->where($columnName, '<', 30)
                    ->where($columnName, '>', 0);
                break;

            case 'exclude':
                $this->query = $this->query->whereNull($columnName);
                break;
        }
    }

    public function filterByAnalAmount(string $amount): MoviesRepository
    {
        $this->sexTypeQuery($amount, 'anal_percentage');
        return $this;
    }

    public function filterByHandjobAmount(string $amount): MoviesRepository
    {
        $this->sexTypeQuery($amount, 'handjob_percentage');
        return $this;
    }

    public function filterByBlowjobAmount(string $amount): MoviesRepository
    {

        $this->sexTypeQuery($amount, 'blowjob_percentage');
        return $this;
    }

    public function filterBydoublePenetrationamount(string $amount): MoviesRepository
    {

        $this->sexTypeQuery($amount, 'double_penetration_percentage');
        return $this;
    }

    public function filterByVaginalamount(string $amount): MoviesRepository
    {

        $this->sexTypeQuery($amount, 'pussy_fuck_percentage');
        return $this;
    }

    public function filterByFeetPettingAmount(string $amount): MoviesRepository
    {
        $this->sexTypeQuery($amount, 'feet_petting_percentage');
        return $this;
    }

    public function filterByPussyLickingAmount(string $amount): MoviesRepository
    {

        $this->sexTypeQuery($amount, 'pussy_licking_percentage');
        return $this;
    }

    public function filterByTitfuckAmount(string $amount): MoviesRepository
    {

        $this->sexTypeQuery($amount, 'tittfuck_percentage');
        return $this;
    }

    public function filterByPosition69amount(string $amount): MoviesRepository
    {

        $this->sexTypeQuery($amount, 'position_69_percentage');
        return $this;
    }

    public function filterByCumshotType(string $cumshotType): MoviesRepository
    {

        $this->query = $this->query->where('actor_cumshot_type', $cumshotType);
        return $this;
    }

    public function filterByLocation(string $location): MoviesRepository
    {

        $this->query = $this->query->whereHas('location', function ($query) use ($location) {

            $query->where('name', $location);
        });

        return $this;
    }

    public function filterByCameraStyle(string $cameraStyle): MoviesRepository
    {

        $this->query = $this->query->where('camera_style', $cameraStyle);
        return $this;
    }

    public function filterByHasStory(bool $hasStory): MoviesRepository
    {

        $this->query = $this->query->where('has_story', $hasStory);
        return $this;
    }

    public function filterByStoryOrCostume(string $storyOrCostume): MoviesRepository
    {

        $this->query = $this->query->whereHas('storyOrCostumeType', function ($query) use ($storyOrCostume) {

            $query->where('name', $storyOrCostume);
        });

        return $this;
    }

    public function filterByProfessionalismLevel(string $professionalismLevel): MoviesRepository
    {
        $professionalismLevel = ($professionalismLevel == 'professional');
        $this->query = $this->query->where('is_professional_production', $professionalismLevel);
        return $this;
    }

    public function filterByIsCumshotCompilation(bool $isCumshotCompilation): MoviesRepository
    {
        $this->query = $this->query->where('is_cumshot_compilation_type', $isCumshotCompilation);
        return $this;
    }

    public function filterByRecordedBySpamCamera(bool $recordedBySpyCamera): MoviesRepository
    {

        $recordedBySpyCamera = boolval($recordedBySpyCamera);
        $this->query = $this->query->where('recorded_by_spy_camera', $recordedBySpyCamera);
        return $this;
    }

    public function filterByIsSadisticOrMasochistic(bool $isSadisticOrMasochistic): MoviesRepository
    {

        $isSadisticOrMasochistic = boolval($isSadisticOrMasochistic);
        $this->query = $this->query->where('is_sadistic_or_masochistic', $isSadisticOrMasochistic);
        return $this;
    }

    public function filterByIsFemaleDomination(bool $isFemaleDomination): MoviesRepository
    {

        $this->query = $this->query->where('is_female_domination_type', $isFemaleDomination);
        return $this;
    }

    public function filterByIsTranslatedToPolish(bool $isTranslatedToPolish): MoviesRepository
    {

        $this->query = $this->query->where('is_translated_to_polish', $isTranslatedToPolish);
        return $this;
    }

    public function filterByShowPantyhose(bool $showPantyhose): MoviesRepository
    {

        $this->query = $this->query->where('actress_has_pantyhose', $showPantyhose);
        return $this;
    }

    public function filterByShowStockings(bool $showStockings): MoviesRepository
    {

        $this->query = $this->query->where('actress_has_stockings', $showStockings);
        return $this;
    }

    public function filterByShowGlasses(bool $showGlasses): MoviesRepository
    {

        $this->query = $this->query->where('actress_has_glasses', $showGlasses);
        return $this;
    }

    public function filterByShowHighHeels(bool $showHighHeels): MoviesRepository
    {

        $this->query = $this->query->where('shows_high_heels', $showHighHeels);
        return $this;
    }

    public function filterByShowHugeCock(bool $showHugeCock): MoviesRepository
    {

        $this->query = $this->query->where('shows_big_cock', $showHugeCock);
        return $this;
    }

    public function filterByShowWhips(bool $showWhips): MoviesRepository
    {

        $this->query = $this->query->where('shows_whips', $showWhips);
        return $this;
    }

    public function filterByShowSexToys(bool $showSexToys): MoviesRepository
    {

        $this->query = $this->query->where('shows_sex_toys', $showSexToys);
        return $this;
    }

    private function translateMinutesToDuration(int $minutes): string
    {

        $duration = Carbon::createFromFormat('H:i:s', '00:00:00');
        $duration->addMinutes($minutes);
        return $duration->toTimeString();
    }

    public function filterByMinimumMovieTime(int $minimumMovieTimeinMinutes): MoviesRepository
    {

        $duration = $this->translateMinutesToDuration($minimumMovieTimeinMinutes);
        $this->query = $this->query->where('duration', '>=', $duration);
        return $this;
    }

    public function filterByMaximumMovieTime(int $maximumMovieTimeinMinutes): MoviesRepository
    {

        $duration = $this->translateMinutesToDuration($maximumMovieTimeinMinutes);
        $this->query = $this->query->where('duration', '<=', $duration);
        return $this;
    }

    public function filterByMinimumMovieViews(int $minimumMovieViews): MoviesRepository
    {

        $this->query = $this->query->where('views', '>=', $minimumMovieViews);
        return $this;
    }

    public function filterByMaximumMovieViews(int $maximumMovieViews): MoviesRepository
    {

        $this->query = $this->query->where('views', '<=', $maximumMovieViews);
        return $this;
    }

    public function filterByPornstarsList(array $pornstarsList): MoviesRepository
    {

        foreach ($pornstarsList as $pornstar) {

            $this->query = $this->query->whereHas('pornstars', function ($query) use ($pornstar) {

                $query->where('nickname', $pornstar);
            });
        }

        return $this;
    }

    public function filterBySlug(string $slug): MoviesRepository
    {

        $this->query = $this->query->where('movies.slug', $slug);
        return $this;
    }

    public function withAnyPornstar(): MoviesRepository
    {

        $this->query = $this->query->has('pornstars');
        return $this;
    }

    public function withAllRelations(): Moviesrepository
    {
        $this->withBasicPornstarList();
        $this->with(['actressNationality', 'storyOrCostumeType', 'location', 'votes']);
        return $this;
    }

    public function filterBySimilarMovies(Movie $movie, ?int $howManyMovies = 20): Moviesrepository
    {
        $this->initiateFilteringByTheMostSimilarMovies();
        $this->query = $this->query->where('movies.id', '!=', $movie->id)->where(function ($query) use ($movie) {

            if ($specificSexTypes = $movie->specific_sex_types) {

                foreach ($specificSexTypes as $sexType) {
                    $query->orWhere($sexType, '>', 90);
                    $this->addColumnForTheMostSimilarMoviesSorting($sexType, 90, '>');
                }
            }

            if ($movie->actressNationality) {
                $nationalityID = $movie->actressNationality->id;
                $query->orWhere('movies.actress_nationality_id', $nationalityID);
                $this->addColumnForTheMostSimilarMoviesSorting('movies.actress_nationality_id', $nationalityID);
            }

            if ($movie->pornstars()->exists()) {
                $pornstarsIDs = $movie->pornstars->pluck('id')->toArray();
                $this->addPornstarsToRawSortingSQL($pornstarsIDs);
                $this->query = $this->query->leftJoin('movie_has_pornstar', 'movies.id', '=', 'movie_has_pornstar.movie_id')
                    ->leftJoin('pornstars', 'movie_has_pornstar.pornstar_id', '=', 'pornstars.id');
                $query->orWhereIn('pornstars.id', $pornstarsIDs);

            }

            if ($movie->storyOrCostumeType) {
                $storyOrCostumeTypeID = $movie->storyOrCostumeType->id;
                $this->addColumnForTheMostSimilarMoviesSorting('movies.story_or_costume_type_id', $storyOrCostumeTypeID);
                $query->orWhere('movies.story_or_costume_type_id', $storyOrCostumeTypeID);
            }

            if ($movie->location) {
                $locationID = $movie->location->id;
                $this->addColumnForTheMostSimilarMoviesSorting('movies.action_location_id', $locationID);
                $query->orWhere('movies.action_location_id', $locationID);
            }

            if ($movie->shows_shaved_pussy !== null) {
                $isPussyShaved = $movie->shows_shaved_pussy;
                $this->addColumnForTheMostSimilarMoviesSorting('shows_shaved_pussy', $isPussyShaved);
                $query->orWhere('shows_shaved_pussy', $isPussyShaved);
            }

            if ($movie->is_professional_production !== null) {
                $this->addColumnForTheMostSimilarMoviesSorting('is_professional_production', $movie->is_professional_production);
                $query->orWhere('is_professional_production', $movie->is_professional_production);
            }

            $this->addColumnForTheMostSimilarMoviesSorting('camera_style', $movie->camera_style);
            $query->orWhere('camera_style', $movie->camera_style);

            $this->addColumnForTheMostSimilarMoviesSorting('camera_style', $movie->camera_style);
            $query->orWhere('abundance', 'LIKE', "%$movie->abundance%");

            foreach (self::EXAMINE_IN_LOOP_MOVIE_ATTRIBUTES as $attribute) {

                if ($movie->$attribute) {
                    $query->orWhere($attribute, $movie->$attribute);
                    $this->addColumnForTheMostSimilarMoviesSorting($attribute, $movie->$attribute);
                }
            }
        });

        $this->terminateRawSQLForTheMostSimilarMoviesSorting();
        if ($howManyMovies) {
            $this->query->take($howManyMovies);
        }
        $this->query = $this->query->orderByRaw($this->rawSQLForTheMostSimilarMoviesSorting);

        return $this;
    }

    private function addColumnForTheMostSimilarMoviesSorting(string $columnName, $value, string $operator = '='): void
    {
        $parsedValue = (is_float($value) || is_integer($value)) ? $value : "'$value'";
        $this->rawSQLForTheMostSimilarMoviesSorting .= "(IFNULL($columnName,0) $operator $parsedValue) + ";
    }

    private function initiateRawSQLForTheMostSimilarMoviesSorting(): void
    {
        $this->rawSQLForTheMostSimilarMoviesSorting = ' ( ';
    }

    private function terminateRawSQLForTheMostSimilarMoviesSorting(): void
    {
        $this->rawSQLForTheMostSimilarMoviesSorting = substr($this->rawSQLForTheMostSimilarMoviesSorting, 0, -3);
        $this->rawSQLForTheMostSimilarMoviesSorting .= ') DESC';
    }

    private function addPornstarsToRawSortingSQL(array $pornstarsIDs): void
    {
        $SQLpart = '( ';
        foreach ($pornstarsIDs as $pornstarID) {
            $SQLpart .= "(pornstars.id = $pornstarID) OR";
        }

        $SQLpart = substr($SQLpart, 0, -2);
        $SQLpart .= ') * 5 + ';
        $this->rawSQLForTheMostSimilarMoviesSorting .= $SQLpart;
    }

    private function initiateFilteringByTheMostSimilarMovies(): void
    {
        $this->withAllRelations();
        $this->initiateRawSQLForTheMostSimilarMoviesSorting();
    }
}
