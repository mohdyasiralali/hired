<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Comment;

class CommentController extends Controller
{
    public function create(Request $request)
    {
        $comment = new Comment();
        $comment->article_id = $request->article_id;
        $comment->comment = $request->comment;
        // $comment->user_id = $request->user_id;
        $comment->user_name = $request->user_name;
        $comment->user_email = $request->user_email;
        $comment->user_avatar = $request->user_avatar;
        $comment->save();

        return $comment;
    }
}
