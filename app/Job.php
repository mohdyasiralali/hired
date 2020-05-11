<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    protected $fillable = ['title', 'type', 'description', 'company_id'];
    
    public function company(){
        return $this->belongsTo(Company::class);
    }
}
