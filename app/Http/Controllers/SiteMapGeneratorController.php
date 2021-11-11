<?php

namespace App\Http\Controllers;

use App\Handlers\SiteMapGeneratorHandler;
use Illuminate\Http\Response;

class SiteMapGeneratorController extends Controller
{
    public function generateSiteMap(SiteMapGeneratorHandler $siteMapGeneratorHandler) : Response
    {
        return $siteMapGeneratorHandler->handle();
    }
}
