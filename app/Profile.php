<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Skill;
use App\User;

class Profile extends Model
{
    protected $fillable = ['bio', 'birth_day', 'linked_profile', 'facebook_profile', 'profession', 'user_id'];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function skills(){
        return $this->belongsToMany(Skill::class);
    }

    public function links(){
        return $this->hasMany(PortfolioLink::class);
    }

    public function images(){
        return $this->hasMany(PortfolioImage::class);
    }
}
