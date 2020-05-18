<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Quiz extends Model
{
    public function questions()
    {
        return $this->hasMany(Question::class);
    }

    public function challenges()
    {
        return $this->hasMany(Challenge::class);
    }
}
