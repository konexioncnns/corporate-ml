<?php

namespace App\Models;
use App\Models\Category;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Translatable\HasTranslations;
use Illuminate\Database\Eloquent\Model;
use Spatie\Searchable\Searchable;
use Spatie\Searchable\SearchResult;

class Post extends Model implements Searchable
{
    use HasFactory,HasTranslations;
    public $translatable = ['title','description','body'];
    protected $fillable = ['title','description','image','status'];

    protected $with =['category'];
    public function category(){
        return $this->belongsTo(Category::class,'category_id','id');
    }


    public function getSearchResult(): SearchResult
    {
        $url=route('articles', $this->id);
        return new \Spatie\Searchable\SearchResult(
            $this,
            $this->title,
            $url
         );
    }
}
