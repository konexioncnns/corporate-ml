<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Category;

use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Facades\App;
class PostController extends Controller
{
    public function index(){
        $posts =Post::all()->toArray();
      //  dd($posts);
       
      /*   foreach( $articles  as $key => $posts ){

          dd()
         }  */
      // dd($articles->toArray());
        //return view('admin.blogs.posts.list',compact('posts') );
      //  return Inertia::render('Posts',['posts'=>$posts->only('title','description','image')]);
       return Inertia::render('Posts', ['posts' =>$posts]);
    }

    public function create(){

         $categories = Category::all();
        return view('admin/blogs/posts/add',compact('categories'));
    }
    public function store(Request $request){
        $post= new Post();
        $imageName = time().'.'.$request->image->extension(); 
        $titletranslation = ['en'=>$request->input('title_en'),'fr'=>$request->input('title')];
        $desctranslation = ['en'=>$request->input('description_en'),'fr'=>$request->input('description')];

       $post->title=$titletranslation;
       $post->description=$desctranslation; 
       $post->category_id=$request->input('category_id');
       $request->image->move(public_path('img/posts'), $imageName);
       $post->image=$imageName;
       //dd($post);
       $post->save();
       return redirect()->route('posts.list');

    }


    public function edit(  $id)
    {
      $post = Post::findOrFail($id)->toArray(); 
       return view('admin.blogs.posts.edit',compact('post'));
    }


    public function update(Request $request)
    {

        $id = $request->input('id');
       $post= Post::findOrFail($id);

        $titletranslation = ['en'=>$request->input('title_en'),'fr'=>$request->input('title')];
        $desctranslation = ['en'=>$request->input('description_en'),'fr'=>$request->input('description')];

        $domaine->title=$titletranslation;
        $domaine->description=$desctranslation;
        //dd( $domaine);
        $domaine->save();
        return redirect( )->route('post.list')->with('status', 'Profile updated!');
    }

}