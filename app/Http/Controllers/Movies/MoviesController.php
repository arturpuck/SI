<?php

namespace App\Http\Controllers\Movies;

use App\Handlers\Movies\AddMovieCommentHandler;
use App\Movie;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\MoviesRepository;
use App\Handlers\Movies\RateMovieHandler;
use App\Handlers\Movies\AddMovieLikeHandler;
use App\Handlers\Movies\AdvancedSearchHandler;
use App\Http\Requests\Movies\RateMovieRequest;
use Symfony\Component\HttpFoundation\Response;
use App\Handlers\Movies\AddSpermatozoidHandler;
use App\Handlers\Movies\GetMovieDetailsHandler;
use App\Handlers\Movies\ShowSingleMovieHandler;
use App\Handlers\Movies\GetMovieCommentsHandler;
use App\Handlers\Movies\GetSimilarMoviesHandler;
use App\Http\Requests\Movies\AddMovieLikeRequest;
use App\Handlers\Movies\GetMoviesByCategoryHandler;
use App\Handlers\Movies\GetTheMostPopularMoviesHandler;
use App\Http\Requests\Movies\AddMovieCommentRequest;
use App\Http\Requests\Movies\AddSpermatozoidRequest;
use App\Http\Requests\Movies\GetMovieCommentsRequest;
use App\Http\Resources\Comment\CommentCollection;
use App\Http\Resources\Movie\MovieCollection;
use Illuminate\View\View;

class MoviesController extends Controller
{
    public function getLatestMoviesPage(Request $request, MoviesRepository $moviesRepository, $pageNumber)
    {

        $movies = $moviesRepository
            ->select(['id', 'duration', 'title', 'views', 'is_translated_to_polish'])
            ->with(['pornstars'])
            ->chronological()
            ->paginate(intval($request->pageNumber), route('movies.new'));

        return view('movies.movies_set_complete')->with([
            'title' => 'the_latest_movies',
            'description' => 'the_latest_movies_page_description',
            'movies' => $movies,
        ]);
    }

    public function getAdvancedSearchPage()
    {

        return view('movies.advanced_search')->with([
            'title' => 'porn_movies_advanced_search',
            'description' => 'advanced_search_description',
        ]);
    }

    public function advancedSearch(Request $request, AdvancedSearchHandler $handler): MovieCollection
    {
        return $handler->handle($request);
    }

    public function getMoviesByCategory(string $categoryName, int $pageNumber = 1, GetMoviesByCategoryHandler $categoriesHandler)
    {
        return $categoriesHandler->handle($categoryName, $pageNumber);
    }

    public function showSingleMovie(string $slug, ShowSingleMovieHandler $singleMovieHandler)
    {
        return $singleMovieHandler->handle($slug);
    }

    public function rateMovie(RateMovieHandler $ratMovieHandler, RateMovieRequest $request): Response
    {
        return $ratMovieHandler->handle($request);
    }

    public function addSpermatozoid(AddSpermatozoidHandler $handler, AddSpermatozoidRequest $request): Response
    {

        return $handler->handle($request);
    }

    public function addLike(AddMovieLikeHandler $handler, AddMovieLikeRequest $request): Response
    {
        return $handler->handle($request);
    }

    public function getMovieDetails(int $movieID, GetMovieDetailsHandler $handler): Response
    {
        return $handler->handle($movieID);
    }

    public function getSimilarMovies(Movie $movie, GetSimilarMoviesHandler $handler): MovieCollection
    {
        return $handler->handle($movie);
    }

    public function getMovieComments(GetMovieCommentsHandler $handler, GetMovieCommentsRequest $request): CommentCollection
    {
        return $handler->handle($request);
    }

    public function addMovieComment(AddMovieCommentHandler $addMovieCommentHandler, AddMovieCommentRequest $request): CommentCollection
    {
        return $addMovieCommentHandler->handle($request);
    }

    public function getTheMostPopularMoviesPage(?int $pageNumber, GetTheMostPopularMoviesHandler $handler) : View 
    {
        return $handler->handle($pageNumber);
    }
}
