<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Team extends Model
{
    use HasFactory,HasTranslations;
    public $translatable = ['poste'];
    protected $fillable = ['fullname','poste','email','phone','bio','image','social1','social2','social3',];
}
