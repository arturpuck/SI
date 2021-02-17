<?php

namespace App\Services;

use Illuminate\Support\Collection;

Class ElegantPaginator {

    private $items;
    private $baseURL;
    private $tableName;
    private $elementsPerPage;
    private $numberOfPages;
    private $hasMorePages;
    private $hasPages;
    private $pageNumber;

    public function __construct(Collection $items, $baseURL, $tableName, $pageNumber, $elementsPerPage){
       $this->items = $items;
       $this->baseURL = $baseURL;
       $this->tableName = $tableName;
       $this->pageNumber = $pageNumber;
       $this->elementsPerPage = $elementsPerPage;
       $this->collectMetaData();
    }

    private function collectMetaData(){
        $rowsNumber = $this->countAllRows();
        $this->numberOfPages = ceil($rowsNumber / $this->elementsPerPage);
    }

    private function countAllRows(){
        return \DB::table($this->tableName)->count();
      }

    public function links(){
        $links = [];

        for($i = 1; $i <= $this->numberOfPages; ++$i){
            $links[$i] = $this->baseURL.'/'.$i;
        }
        
        return $links;
    }

    public function firstPageURL(){
        return $this->baseURL.'/1';
    }

    public function lastPageURL(){
        return $this->baseURL.'/'.$this->numberOfPages;
    }

    public function onFirstPage(){
        return $this->pageNumber == 1;
    }

    public function previousPageURL(){
        return $this->baseURL.'/'.($this->pageNumber - 1);
    }

    public function nextPageURL(){
        return $this->baseURL.'/'.($this->pageNumber + 1);
    }

    public function hasMorePages(){
        return $this->pageNumber < $this->numberOfPages;
    }

    public function hasPages(){
        return $this->numberOfPages > 1;
    }

    public function pageNumber(){
        return $this->pageNumber;
    }

    public function items(){
        return $this->items;
    }

    public function numberOfPages(){
        return $this->numberOfPages;
    }


}