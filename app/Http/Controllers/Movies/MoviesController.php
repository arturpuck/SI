<?php

namespace App\Http\Controllers\Movies;

use App\Handlers\Movies\AddMovieCommentHandler;
use App\Movie;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\MoviesRepository;
use App\Handlers\Movies\RateMovieHandler;
use App\Handlers\Movies\ToggleMovieLikeHandler;
use App\Handlers\Movies\AdvancedSearchHandler;
use App\Http\Requests\Movies\RateMovieRequest;
use Symfony\Component\HttpFoundation\Response;
use App\Handlers\Movies\AddSpermatozoidHandler;
use App\Handlers\Movies\GetMovieDetailsHandler;
use App\Handlers\Movies\ShowSingleMovieHandler;
use App\Handlers\Movies\GetMovieCommentsHandler;
use App\Handlers\Movies\GetSimilarMoviesHandler;
use App\Http\Requests\Movies\ToggleMovieLikeRequest;
use App\Handlers\Movies\GetMoviesByCategoryHandler;
use App\Handlers\Movies\GetTheMostPopularMoviesHandler;
use App\Http\Requests\Movies\AddMovieCommentRequest;
use App\Http\Requests\Movies\AddSpermatozoidRequest;
use App\Http\Requests\Movies\GetMovieCommentsRequest;
use App\Http\Resources\Comment\CommentCollection;
use App\Http\Resources\Comment\CommentResource;
use App\Http\Resources\Movie\MovieCollection;
use App\Traits\LinkFactory;
use Illuminate\View\View;
use App\Http\Resources\Movie\MovieDetailResource;

class MoviesController extends Controller
{
    use LinkFactory;

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
            'links' => $this->generateLinks(route('movies.new').'/{}', range(1,$movies->numberOfPages()))
        ]);
    }

    public function getAdvancedSearchPage()
    {

        return view('movies.advanced_search')->with([
            'title' => 'porn_movies_advanced_search',
            'description' => 'advanced_search_description',
        ]);
    }

    public function advancedSearch(Request $request, AdvancedSearchHandler $handler)
    {
        return $handler->handle($request);
    }

    public function getMoviesByCategory(GetMoviesByCategoryHandler $categoriesHandler, string $categoryName, int $pageNumber = 1)
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

    public function toggleLike(ToggleMovieLikeHandler $handler, ToggleMovieLikeRequest $request): Response
    {
        return $handler->handle($request);
    }

    public function getMovieDetails(int $movieID, GetMovieDetailsHandler $handler) : MovieDetailResource 
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

    public function addMovieComment(AddMovieCommentHandler $addMovieCommentHandler, AddMovieCommentRequest $request): CommentResource | CommentCollection
    {
        return $addMovieCommentHandler->handle($request);
    }

    public function getTheMostPopularMoviesPage(?int $pageNumber, GetTheMostPopularMoviesHandler $handler) : View 
    {
        return $handler->handle($pageNumber);
    }
}
