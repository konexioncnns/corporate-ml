<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Formateur extends Model
{
    
    use HasFactory,HasTranslations;
    public $translatable = ['biography'];
    protected $fillable = [ 'firstname','lastname','dateofbirth','gender','phone','specialite_id','email','image','adresse','biography','status'];
}
