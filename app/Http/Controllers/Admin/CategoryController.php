<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $categories = Category::all()->toArray();
       return view('admin.blogs.categories.list',compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.blogs.categories.add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $category = new Category();
        $titletranslation = ['en'=>$request->input('title_en'),'fr'=>$request->input('title')];
        $desctranslation = ['en'=>$request->input('description_en'),'fr'=>$request->input('description')];

        $category->title=$titletranslation;
        $category->description=$desctranslation; 
        $category->save();
        return redirect( )->route('category.list')->with('status', 'Profile updated!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $category = Category::findOrFail($id)->toArray();
        return view('admin.blogs.categories.edit',compact('category'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $id = $request->input('id');
        $category= Category::findOrFail($id);
 
         $titletranslation = ['en'=>$request->input('title_en'),'fr'=>$request->input('title')];
         $desctranslation = ['en'=>$request->input('description_en'),'fr'=>$request->input('description')];
 
         $category->title=$titletranslation;
         $category->description=$desctranslation;
          dd( $category);
         $category->save();
         return redirect( )->route('categories.list')->with('status', 'Profile updated!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       $category = Category::findOrFail($id);
       $category->delete();

    }
}
