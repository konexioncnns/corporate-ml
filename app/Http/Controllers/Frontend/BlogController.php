<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BlogController extends Controller
{
    public function index(){
        $posts =Post::paginate(4);
         // $posts =Post::all()->toArray();
        //  dd($posts);
         
        /*   foreach( $articles  as $key => $posts ){
  
            dd()
           }  */
        // dd($articles->toArray());
          
        //  return Inertia::render('Posts',['posts'=>$posts->only('title','description','image')]);
        return Inertia::render('Posts', ['posts' =>$posts]);
      }
}
