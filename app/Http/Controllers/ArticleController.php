<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Article;
use Intervention\Image\Facades\Image;


class ArticleController extends Controller
{
    public function create(Request $request)
    {

        if ($request->get('image')) {
            $image = $request->get('image');
            $name = time() . '.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            Image::make($request->get('image'))->save(public_path('storage/images/articles/') . $name);
        }

        $article = new Article();
        $article->user_id = $request->user_id;
        $article->title = $request->title;
        $article->content = $request->content;
        $article->img_src = $name;
        $article->user_name = $request->user_name;
        $article->user_email = $request->user_email;
        $article->save();

        return $article;
    }

    public function get()
    {
        $articles = Article::latest()->get();
        $return_data = [];
        foreach ($articles as $article) {
            $comments = $article->comments;
            array_push($return_data, ['article' => $article, 'comments' => $comments]);
        }

        return $return_data;
    }
    public function get_byId($id)
    {
        $articles = Article::where('user_id', $id)->latest()->get();
        $return_data = [];
        foreach ($articles as $article) {
            $comments = $article->comments;
            array_push($return_data, ['article' => $article, 'comments' => $comments]);
        }

        return $return_data;
    }
}
