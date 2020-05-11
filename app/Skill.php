<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Profile;

class Skill extends Model
{
    public function profiles(){
        return $this->belongsToMany(Profile::class);
    }

    public function companies(){
        return $this->belongsToMany(Company::class);
    }
}
