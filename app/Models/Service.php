<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Service extends Model
{
    use HasFactory,HasTranslations;
    public $translatable = ['title','extrait','description','add_values','needs','our_service','customer_experiences'];
    protected $fillable = ['title','description','extrait','add_values','needs','our_service','customer_experiences','image1','image2','image3','image4','image5','status',];
}
