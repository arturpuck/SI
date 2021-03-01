<?php

namespace App\Traits\Repositories;

use App\Services\ElegantPaginator;

trait ElegantPagination
{

    public function paginateElegantly($query, $pageNumber, $baseURL, $tableName, $elementsPerPage = 100): ElegantPaginator
    {
        $totalRowsNumber = $query->count();
        $query->limit($elementsPerPage);
        $query->offset(($pageNumber - 1) * $elementsPerPage);
        return new ElegantPaginator($this->get(), $baseURL, $tableName, $pageNumber, $elementsPerPage, $totalRowsNumber);
    }
}
