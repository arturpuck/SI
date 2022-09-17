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
        $news = News::filterByPage($pageNumber, self::NEWS_PER_PAGE)
                    ->get();


        return view('news.news_list')->with([
            'news' => $news,
            'pageNumber' => $pageNumber,
            'links' => $this->getLinks(), 
            'backgroundNumber' => rand(1,3)
        ]);

    }

    private function getLinks() : array
    {
        $numberOfPages = $this->getNumberOfTotalPages();
        if($numberOfPages <= 1) return [];
        return $this->generateLinksByRange(1,$numberOfPages, 'news.list');
    }

    protected function getNumberOfTotalPages() : int 
     {
        return ceil(News::count() /100);
     }
}