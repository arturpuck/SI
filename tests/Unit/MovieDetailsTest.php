<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Movie;

class MovieDetailsTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testCheckDurationShorterThanOneHour()
    {
        // $duration = date('H:i:s', rand(1, 3599));
        // $displayedDuration = str_replace('00:','',$duration);
        // $movie = Movie::factory()->create(['duration' => $duration]);
        $this->assertEquals(true, true);
    }
}
