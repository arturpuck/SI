<?php

namespace App\Repositories;


use App\Movie;
use App\Traits\Repositories\ElegantPagination;
use App\Services\ElegantPaginator;
use Carbon\Carbon;

Class MoviesRepository extends BaseRepository{

    use ElegantPagination;
   
    public const MODEL_NAME = Movie::class;

    private const SEX_TYPES_COLUMNS_NOT_POLYMORPHIC = [
        'anal_percentage',
        'blowjob_percentage',
        'pussy_fuck_percentage',
        'handjob_percentage',
        'tittfuck_percentage',
        'pussy_licking_percentage',
        'feet_petting_percentage',
        'position_69_percentage'
    ];

    public function chronological() : MoviesRepository{

        $this->query = $this->query->orderBy('created_at', 'desc');
        return $this;
    }

    public function withBasicPornstarList() : MoviesRepository{

        $this->query = $this->query->with(['pornstars' => function($query){

            $query->select(['nickname', 'pornstars.id']);
        }]);

        return $this;
    }

    public function paginate($pageNumber, $baseURL, $elementsPerPage = 100) : ElegantPaginator{

        return $this->paginateElegantly($this->query,$pageNumber, $baseURL, 'movies', $elementsPerPage);
    }

    public function filterByAbundanceType(string $abundance) : MoviesRepository {

        $this->query = $this->query->where('abundance', $abundance);
        return $this;
    }

    public function filterByTitsSize(string $titsSize) : MoviesRepository {

        $this->query = $this->query->where('actress_tits_size', $titsSize);
        return $this;
    }

    public function filterByAssSize(string $assSize) : MoviesRepository {

        $this->query = $this->query->where('actress_ass_size', $assSize);
        return $this;
    }

    public function filterByThicknessSize(string $thicknessSize) : MoviesRepository {

        $this->query = $this->query->where('actress_thickness', $thicknessSize);
        return $this;
    }

    public function filterByAgeRange(string $ageRange) : MoviesRepository {

        $this->query = $this->query->where('actress_age_range', $ageRange);
        return $this;
    }

    public function filterByHairColor(string $hairColor) : MoviesRepository {

        $this->query = $this->query->where('actress_hair_color', $hairColor);
        return $this;
    }

    public function filterByRace(string $race) : MoviesRepository {

        $this->query = $this->query->where('actress_race', $race);
        return $this;
    }

    public function filterByNationality(string $nationality) : MoviesRepository {

        $this->query = $this->query->whereHas('actressNationality', function($query) use ($nationality){
              
            $query->where('name', $nationality);
        });

        return $this;
    }

    public function filterByShavedPussy($shavedPussy) : MoviesRepository {

        $shavedPussy = boolval($shavedPussy);
        $this->query = $this->query->where('shows_shaved_pussy', $shavedPussy);
        return $this;
    }

    private function getRemainingColumnsToResetForSexTypeQuery(string $columnName):array{

          switch($columnName){

            case 'double_penetration_percentage':
                $columnsToExclude = ['anal_percentage', 'pussy_fuck_percentage'];
                $remainingColums = array_diff(self::SEX_TYPES_COLUMNS_NOT_POLYMORPHIC,$columnsToExclude);
            break;

            case 'position_69_percentage':
                $columnsToExclude = ['blowjob_percentage', 'pussy_licking_percentage'];
                $remainingColums = array_diff(self::SEX_TYPES_COLUMNS_NOT_POLYMORPHIC,$columnsToExclude);
            break;

            default:
                $remainingColums = array_diff(self::SEX_TYPES_COLUMNS_NOT_POLYMORPHIC,[$columnName]);
            break;
          }

          return $remainingColums;
    }

    private function sexTypeQuery(string $ammount, string $columnName):void{

        switch($ammount){

            case 'only':
              $this->query = $this->query->where($columnName, '>=', 90);
              $remainingColums = $this->getRemainingColumnsToResetForSexTypeQuery($columnName);
              $this->multiplyWhere($remainingColums,null);                       
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

    public function filterByAnalAmmount(string $ammount) : MoviesRepository {

        $this->sexTypeQuery($ammount,'anal_percentage');
        return $this;
    }

    public function filterByBlowjobAmmount(string $ammount) : MoviesRepository {

        $this->sexTypeQuery($ammount,'blowjob_percentage');
        return $this;
    }

    public function filterBydoublePenetrationAmmount(string $ammount) : MoviesRepository {

        $this->sexTypeQuery($ammount,'double_penetration_percentage');
        return $this;
    }

    public function filterByVaginalAmmount(string $ammount) : MoviesRepository {

        $this->sexTypeQuery($ammount,'pussy_fuck_percentage');
        return $this;
    }

    public function filterByPussyLickingAmmount(string $ammount) : MoviesRepository {

        $this->sexTypeQuery($ammount,'pussy_licking_percentage');
        return $this;
    }

    public function filterByTittfuckAmmount(string $ammount) : MoviesRepository {

        $this->sexTypeQuery($ammount,'tittfuck_percentage');
        return $this;
    }

    public function filterByPosition69Ammount(string $ammount) : MoviesRepository {

        $this->sexTypeQuery($ammount,'position_69_percentage');
        return $this;
    }

    public function filterByCumshotType(string $cumshotType) : MoviesRepository {

        $this->query = $this->query->where('actor_cumshot_type', $cumshotType);
        return $this;
    }

    public function filterByLocation(string $location) : MoviesRepository {

        $this->query = $this->query->whereHas('location', function($query) use ($location){
              
            $query->where('name', $location);
        });

        return $this;
    }

    public function filterByCameraStyle(string $cameraStyle) : MoviesRepository {

        $this->query = $this->query->where('camera_style', $cameraStyle);
        return $this;
    }

    public function filterByHasStory(bool $hasStory) : MoviesRepository {

        $this->query = $this->query->where('has_story', $hasStory);
        return $this;
    }

    public function filterByStoryOrCostume(string $storyOrCostume) : MoviesRepository {

        $this->query = $this->query->whereHas('storyOrCostumeType', function($query) use ($storyOrCostume){
              
            $query->where('name', $storyOrCostume);
        });

        return $this;
    }

    public function filterByProfessionalismLevel(string $professionalismLevel) : MoviesRepository {
        $professionalismLevel = ($professionalismLevel == 'professional');
        $this->query = $this->query->where('is_professional_production', $professionalismLevel);
        return $this;
    }

    public function filterByIsCumshotCompilation(bool $isCumshotCompilation) : MoviesRepository {

        $isCumshotCompilation = boolval($isCumshotCompilation);
        $this->query = $this->query->where('is_cumshot_compilation_type', $isCumshotCompilation);
        return $this;
    }

    public function filterByRecordedBySpamCamera(bool $recordedBySpyCamera) : MoviesRepository {

        $recordedBySpyCamera = boolval($recordedBySpyCamera);
        $this->query = $this->query->where('is_cumshot_compilation_type', $recordedBySpyCamera);
        return $this;
    }

    public function filterByIsSadisticOrMasochistic(bool $isSadisticOrMasochistic) : MoviesRepository {

        $isSadisticOrMasochistic = boolval($isSadisticOrMasochistic);
        $this->query = $this->query->where('is_sadistic_or_masochistic', $isSadisticOrMasochistic);
        return $this;
    }

    public function filterByIsFemaleDomination(bool $isFemaleDomination) : MoviesRepository {

        $this->query = $this->query->where('is_female_domination_type', $isFemaleDomination);
        return $this;
    }

    public function filterByIsTranslatedToPolish(bool $isTranslatedToPolish) : MoviesRepository {

        $this->query = $this->query->where('is_translated_to_polish', $isTranslatedToPolish);
        return $this;
    }

    public function filterByShowPantyhose(bool $showPantyhose) : MoviesRepository {

        $this->query = $this->query->where('actress_has_pantyhose', $showPantyhose);
        return $this;
    }

    public function filterByShowStockings(bool $showStockings) : MoviesRepository {

        $this->query = $this->query->where('actress_has_stockings', $showStockings);
        return $this;
    }

    public function filterByShowGlasses(bool $showGlasses) : MoviesRepository {

        $this->query = $this->query->where('actress_has_glasses', $showGlasses);
        return $this;
    }

    public function filterByShowHighHeels(bool $showHighHeels) : MoviesRepository {

        $this->query = $this->query->where('shows_high_heels', $showHighHeels);
        return $this;
    }

    public function filterByShowHugeCock(bool $showHugeCock) : MoviesRepository {

        $this->query = $this->query->where('shows_big_cock', $showHugeCock);
        return $this;
    }

    public function filterByShowWhips(bool $showWhips) : MoviesRepository {

        $this->query = $this->query->where('shows_whips', $showWhips);
        return $this;
    }

    public function filterByShowSexToys(bool $showSexToys) : MoviesRepository {

        $this->query = $this->query->where('shows_sex_toys', $showSexToys);
        return $this;
    }

    private function translateMinutesToDuration(int  $minutes):string{

        $duration = Carbon::createFromFormat('H:i:s', '00:00:00');
        $duration->addMinutes($minutes);
        return $duration->toTimeString();
    }

    public function filterByMinimumMovieTime(int  $minimumMovieTimeinMinutes) : MoviesRepository {
        
        $duration = $this->translateMinutesToDuration($minimumMovieTimeinMinutes);
        $this->query = $this->query->where('duration', '>=', $duration);
        return $this;
    }

    public function filterByMaximumMovieTime(int  $maximumMovieTimeinMinutes) : MoviesRepository {
        
        $duration = $this->translateMinutesToDuration($maximumMovieTimeinMinutes);
        $this->query = $this->query->where('duration', '<=', $duration);
        return $this;
    }

    public function filterByMinimumMovieViews(int $minimumMovieViews) : MoviesRepository {
        
        $this->query = $this->query->where('views', '>=', $minimumMovieViews);
        return $this;
    }

    public function filterByMaximumMovieViews(int $maximumMovieViews) : MoviesRepository {
        
        $this->query = $this->query->where('views', '<=', $maximumMovieViews);
        return $this;
    }

    public function filterByPornstarsList(array $pornstarsList) : MoviesRepository {

       foreach($pornstarsList as $pornstar){

            $this->query = $this->query->whereHas('pornstars', function($query) use ($pornstar){

                $query->where('nickname',$pornstar);
            });
       }
       
        return $this;
    }

    
}