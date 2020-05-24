<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Challenge extends Model
{
    public function quiz(){
        return $this->belongsTo(Quiz::class);
    }

    public function questions(){
        return $this->hasMany(cquestions::class);
    }
}
