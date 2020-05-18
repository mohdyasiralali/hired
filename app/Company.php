<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = ['name', 'indusrty', 'headquarter', 'website', 'overview', 'user_id'];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function skills(){
        return $this->belongsToMany(Skill::class);
    }

    public function jobs(){
        return $this->hasMany(Job::class);
    }

    public function applications(){
        return $this->hasMany(Application::class);
    }
}
