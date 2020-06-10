<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PortfolioImageController extends Controller
{
    public function store(Request $request)
    {
        if ($request->get('file')) {
            $image = $request->get('file');
            $name = time() . '.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            Image::make($request->get('file'))->save(public_path('images/') . $name);
        }

        $fileupload = new Fileupload();
        $fileupload->filename = $name;
        $fileupload->save();
        return response()->json('Successfully added');
    }
}
