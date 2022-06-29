<?php

namespace App\Models;

use App\Models\Post;
use Illuminate\Database\Eloquent\Model;

use Spatie\Translatable\HasTranslations;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory,HasTranslations;
    public $translatable = ['title','description'];
    protected $fillable = ['title','description','category_id','image','status'];

    public function posts(){
        return $this->hasMany(Post::class);
    }
}
