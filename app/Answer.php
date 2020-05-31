<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    public function cquestion()
    {
        return $this->belongsTo(cquestions::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
}
