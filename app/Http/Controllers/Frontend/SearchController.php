<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Post;
use Illuminate\Http\Request;
use Spatie\Searchable\Search;
use App\Http\Controllers\Controller;

class SearchController extends Controller
{
    public function search(){
        $data = (new Search())
   ->registerModel(Post::class, 'title')
   ->search($this->searchText);
   return "okkk";

    }
}
