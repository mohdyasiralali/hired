<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PortfolioLink;
use App\Profile;

class PortfolioLinkController extends Controller
{
    public function store(Request $request)
    {
        $link = new PortfolioLink();
        $link->title = $request->title;
        $link->link = $request->url;
        $link->profile_id = $request->profile_id;
        $link->save();

        return $link;
    }

    public function get_links($id)
    {
        $profile = Profile::find($id);
        $portfolio_links = $profile->portfolio_links;
        return $portfolio_links;
    }
}
