<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use App\PortfolioImage;
use App\Profile;

class PortfolioImageController extends Controller
{
    public function store(Request $request)
    {
        if ($request->get('file')) {
            $image = $request->get('file');
            $name = time() . '.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            Image::make($request->get('file'))->save(public_path('storage/images/portfolio/') . $name);
        }

        $fileupload = new PortfolioImage();
        $fileupload->img_src = $name;
        $fileupload->profile_id = $request->profile_id;
        $fileupload->save();

        return $fileupload;
    }

    public function get_images($id)
    {
        $profile = Profile::find($id);
        $portfolio_images = $profile->portfolio_images;
        return $portfolio_images;
    }
}
