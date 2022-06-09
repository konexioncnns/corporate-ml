<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Translatable\HasTranslations;
use Illuminate\Database\Eloquent\Model;
use App\Models\Formateur;
use App\Models\Domaine;

class Formation extends Model
{
    use HasFactory,HasTranslations;
    public $translatable = ['title','description','overview','public','programme'];
    protected $fillable = ['title','description','overview','public','image','programme','price','status','formateur_id','domaine_id',];


    protected $with =['formateur','domaine'];
    public function formateur(){
        return $this->belongsTo(Formateur::class);

    }


    public function domaine(){
        return $this->belongsTo(Domaine::class,'domaine_id','id');

    }


}
