<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Movie;
use App\MovieRating;

class MovieDetailsTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testCheckDurationForHumansShorterThanOneHour()
    {
        $duration = date('H:i:s', rand(1, 3599));
        $displayedDuration = str_replace('00:','',$duration);
        $movie = Movie::factory()->create(['duration' => $duration]);
        $this->assertEquals($displayedDuration, $movie->getDurationForHumans());
    }

    public function testCheckDurationForHumansLongerThanOneHour()
    {
        $duration = date('H:i:s', rand(3601, 3800));
        $movie = Movie::factory()->create(['duration' => $duration]);
        $this->assertEquals($duration, $movie->getDurationForHumans());
    }

    public function testCheckMovieDurationInSeconds()
    {
        $numberOfSeconds = rand(30, 3599);
        $duration = date('H:i:s', $numberOfSeconds);
        $movie = Movie::factory()->create(['duration' => $duration]);
        $this->assertEquals($numberOfSeconds, $movie->getDurationInSeconds());
    }

    public function testCheckMovieAverageRatingWithNotEnoughVotes()
    {
        $movie = Movie::factory()
                        ->has(MovieRating::factory()->count(rand(1,9)), 'votes')
                        ->create();

        $this->assertNull($movie->getAverageRating());
    }

    public function testCheckMovieAverageRatingWithEnoughVotes()
    {
        $numberOfVotes = rand(10,100);
        $movie = Movie::factory()
                        ->has(MovieRating::factory()->count($numberOfVotes), 'votes')
                        ->create();

        $sumOfVotes = 0;
        $movie->votes->each(function(MovieRating $rating) use (&$sumOfVotes) {
            $sumOfVotes += $rating->user_vote;
        }, $sumOfVotes);
        $averageRating = round($sumOfVotes / $numberOfVotes,2);
        $this->assertEquals($averageRating, $movie->getAverageRating());
    }
}
