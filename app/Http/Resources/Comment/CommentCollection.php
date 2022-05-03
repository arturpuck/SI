<?php

namespace App\Http\Resources\Comment;

use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Collection;

class CommentCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    private static ?int $totalElements;
    private static ?int $currentPage;

    public function __construct(Collection $elements, ?int $totalElements = null, ?int $currentPage = null){
        parent::__construct($elements);
        self::$totalElements = $totalElements;
        self::$currentPage = $currentPage;
    }

    public function toArray($request)
    {
        return [
            'totalElements' => self::$totalElements,
            'currentPage' => self::$currentPage,
            'content' => $this->collection
        ];
    }
}
