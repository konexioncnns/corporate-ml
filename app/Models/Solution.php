<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;
class Solution extends Model
{
    use HasFactory,HasTranslations;
    public $translatable = ['title','extrait','description',];
    protected $fillable = ['title','description','image1','image2','image3','image4','image5','status',];
}
