<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;
use App\Models\Formation;

class Domaine extends Model
{
    use HasFactory,HasTranslations;
    public $translatable = ['title','description'];
    protected $fillable = ['title','domaine_id','description','image','status'];

    public function formations(){
        return $this->hasMany(Formation::class);
    }


 
}
