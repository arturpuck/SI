<?php

namespace App\Handlers\News;

use Illuminate\Contracts\View\View;
use App\Traits\LinkFactory;
use App\News;
use App\Http\Requests\News\ShowNewsByPageRequest;

Class ShowNewsByPageHandler
{
    use LinkFactory;

    const NEWS_PER_PAGE = 20;

    public function handle(ShowNewsByPageRequest $request) : View
    {
        $pageNumber = $request->validated()['pageNumber'];
        $news = News::query()->filterByPage($pageNumber, self::NEWS_PER_PAGE)
                            ->orderByAddedDate()
                            ->get();
        $links = $this->getLinks();
        $links = count($links) > 0 ? $links : null;

        return view('news.news_list')->with([
            'news' => $news,
            'pageNumber' => $pageNumber,
            'links' =>  $links,
            'backgroundNumber' => rand(1,3)
        ]);

    }

    private function getLinks() : array
    {
        $numberOfPages = News::getNumberOfTotalPages(self::NEWS_PER_PAGE);
        if($numberOfPages <= 1) {
            return [];
        }
        return $this->generateLinksByRange(1,$numberOfPages, 'news.list');
    }

}