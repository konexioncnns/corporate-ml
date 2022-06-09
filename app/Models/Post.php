<?php

namespace App\Models;
use App\Models\Category;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Translatable\HasTranslations;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory,HasTranslations;
    public $translatable = ['title','description'];
    protected $fillable = ['title','description','image','status'];

    protected $with =['category'];
    public function category(){
        return $this->belongsTo(Category::class,'category_id','id');
    }
}