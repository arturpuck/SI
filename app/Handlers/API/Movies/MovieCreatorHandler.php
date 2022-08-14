<?php

namespace App\Handlers\API\Movies;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Throwable;
use App\Helpers\Validators\MovieCandidateValidator;
use App\Exceptions\FailedValidationException;
use App\Services\Movies\RequiredMovieFilesVerificationService;
use App\Services\FailureLogger;
use Illuminate\Support\Facades\DB;
use App\Movie;
use App\Pornstar;

class MovieCreatorHandler
{

    public function __construct(protected RequiredMovieFilesVerificationService $movieFilesValidationService)
    {
    }

    public function handle(Request $request): JsonResponse
    {
        try {
            $validatedData = $this->validateEverythingRequiredForMovie($request);
            DB::transaction(function() use ($validatedData){
                $this->createAllMovies($validatedData);
            });
            return new JsonResponse(['success' => true], 201);
        } catch (FailedValidationException $failedValidation) {
            return new JsonResponse($failedValidation->getErrorsList(), 400);
        } catch (Throwable $failure) {
            FailureLogger::logToFile($failure);
            return new JsonResponse(['success' => false], 500);
        }
    }
    
    private function validateEverythingRequiredForMovie(Request $request) : array
    {
        $validatedData = $this->validateMovieCandidates($request->all());
        $this->movieFilesValidationService->verify(count($validatedData));
        return $validatedData;
    }

    private function validateMovieCandidates(array $movieCandidates): array
    {
        $errors = [];
        foreach ($movieCandidates as $candidateID => $movieCandidate) {
            $validationResult = MovieCandidateValidator::validate($movieCandidate);
            if ($validationResult['success'] === false) {
                $errors[$candidateID] = $validationResult['errors'];
            } else {
                $validated[] = $validationResult['validated'];
            }
        }
        if (count($errors) > 0) {
            throw new FailedValidationException($errors);
        }
        return $validated;
    }

    private function createAllMovies(array $movies) : void
    {
        foreach($movies as $movieDetails) {
            $this->createMovie($movieDetails);
        }
    }
    //I am not really impressed with this loop, however since we will add only like 5 - 15 movies at once it should be O.K. Consider more elegant solution in the future
    private function createMovie(array $movieDetails) : void
    {
        $movie = new Movie();
        if(isset($movieDetails['pornstars_list'])){
            $pornstarsList = $movieDetails['pornstars_list'];
        }
        unset($movieDetails['pornstars_list']);
        foreach($movieDetails as $propertyName => $detail) {
            $movie->$propertyName = $detail;
        }
        $movie->save();
        if(isset($pornstarsList)) {
            $this->assignPornstarsToMovie($movie, $pornstarsList);
        }
    }

    private function assignPornstarsToMovie(Movie $movie, array $pornstarsList) : void
    {
        $pornstarsIds = Pornstar::whereIn('nickname', $pornstarsList)
                                ->pluck('id')
                                ->toArray();

        $movie->pornstars()->sync($pornstarsIds);
    }

}
