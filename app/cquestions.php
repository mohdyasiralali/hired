<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class cquestions extends Model
{
    public function challenge(){
        return $this->belongsTo(Challenge::class);
    }
}
