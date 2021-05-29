<?php

namespace App\ModelShards;

use Illuminate\Database\Eloquent\Model;

Class PageList {

    public array $content;

    public function __construct(public int $totalElements, public int $currentPage, ...$content) 
    {
        $this->content = $content;
    }

}