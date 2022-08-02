<?php

namespace App\Handlers\API\Movies;

use App\Http\Requests\API\Movies\RequiredMovieFilesValidationRequest;
use App\Movie;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;
use Throwable;

Class RequiredMovieFilesVerificationHandler
{

    public function handle(RequiredMovieFilesValidationRequest $request) : JsonResponse
    {
        try
        {
            $range = $request->get('range');
            $offset = intval($request->get('offset'));
            $currentlyHighestMovieID = Movie::orderBy('id', 'DESC')->limit(1)->get()->first()->id;
            $nextMovieID = $currentlyHighestMovieID + $offset + 1;
            $maximumMovieID = $currentlyHighestMovieID + $range + $offset;
            return $this->tryToCheckIfRequiredFilesExist($nextMovieID, $maximumMovieID);
        } catch(Throwable $failure) {
            return new JsonResponse(['errorMessage' => $failure->getMessage()], 500);
        }
       
    }

    private function tryToCheckIfRequiredFilesExist(int $nextMovieID, int $maximumMovieID) : JsonResponse
    {
        $errorReports = [];
        for($currentlyExaminedMovieID = $nextMovieID; $currentlyExaminedMovieID <= $maximumMovieID; ++$currentlyExaminedMovieID) 
        {
            $this->checkIfRequiredFilesExist($currentlyExaminedMovieID, $errorReports);
        }
        $message = count($errorReports) > 0 ? ['missingFiles' => $errorReports] : ['success' => true];
        return new JsonResponse($message, 200);
    }

    private function checkIfRequiredFilesExist(int $movieID, array &$errorReports) : void
    {
        $examinedPath = config('important_directories.movie_thumbnails_directory').$movieID.'.jpg';
        if(Storage::disk('public')->missing($examinedPath)) {
            $errorReports[$movieID][] = 'Missing thumbnail';
        }

        $examinedPath = config('important_directories.movies_directory').$movieID.'.mp4';
        if(Storage::disk('public')->missing($examinedPath)) {
            $errorReports[$movieID][] = 'Missing video file';
        }
        
        $examinedPath = config('important_directories.movie_gifs_directory').$movieID.'.gif';
        if(Storage::disk('public')->missing($examinedPath)) {
            $errorReports[$movieID][] = 'Missing gif file';
        }

        $examinedPath = config('important_directories.movie_snapshots_directory').$movieID;
        if(Storage::disk('public')->missing($examinedPath)) {
            $errorReports[$movieID][] = 'Missing snapshots folder';
        } else {
            $this->checkIfMovieSnapshotsExist($examinedPath, $errorReports, $movieID);
        }
  
    }

    private function checkIfMovieSnapshotsExist(string $movieSnapshotFolder, array &$errorReports, int $movieID) : void
    {
        for($movieSnapshotIndex = 1; $movieSnapshotIndex <= 100; ++$movieSnapshotIndex) {
            $snapshotFileName = $this->getSnapshotFileName($movieID,$movieSnapshotIndex);
            $movieSnapshotFilePath = $movieSnapshotFolder.'/'.$snapshotFileName;
            if(Storage::disk('public')->missing($movieSnapshotFilePath)) {
                $errorReports[$movieID][] = 'Missing snapshot, index : '.$movieSnapshotIndex;
            }
        }
    }

    private function getSnapshotFileName(int $movieID, int $movieSnapshotIndex) : string 
    {
      $snapshotPart = str_pad($movieSnapshotIndex, 3, "0", STR_PAD_LEFT);
      return $movieID.' '.$snapshotPart.'.jpg';
    }

}