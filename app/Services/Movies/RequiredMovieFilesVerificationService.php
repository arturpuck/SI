<?php

namespace App\Services\Movies;

use App\Movie;
use Illuminate\Support\Facades\Storage;
use App\Exceptions\FailedValidationException;

Class RequiredMovieFilesVerificationService
{

    public function verify(int $range, int $offset = 0) : void
    {
        $currentlyHighestMovieID = Movie::orderBy('id', 'DESC')->limit(1)->get()->first()->id;
        $nextMovieID = $currentlyHighestMovieID + $offset + 1;
        $maximumMovieID = $currentlyHighestMovieID + $range + $offset;
        $this->examineMovieFilesByRange($nextMovieID, $maximumMovieID);
    }

    private function examineMovieFilesByRange(int $nextMovieID, int $maximumMovieID)
    {
        $errorReports = [];
        for($currentlyExaminedMovieID = $nextMovieID; $currentlyExaminedMovieID <= $maximumMovieID; ++$currentlyExaminedMovieID) 
        {
            $this->checkIfRequiredMovieFilesExist($currentlyExaminedMovieID, $errorReports);
        }
        if(count($errorReports) > 0) {
          throw new FailedValidationException($errorReports);
        }
    }

    private function checkIfRequiredMovieFilesExist(int $movieID, array &$errorReports) : void
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