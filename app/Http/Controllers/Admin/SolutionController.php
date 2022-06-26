<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Solution;
use Illuminate\Http\Request;

class SolutionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.solutions.add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $solution = new Solution();
      

        $titletranslation = ['en'=>$request->input('title_en'),'fr'=>$request->input('title')];
        $extraittranslation = ['en'=>$request->input('extrait_en'),'fr'=>$request->input('extrait')];
        $desctranslation = ['en'=>$request->input('description_en'),'fr'=>$request->input('description')];
        
        $solution->title=$titletranslation;
        $solution->extrait=$extraittranslation;
        $solution->description=$desctranslation;

       
        $image1 = 'image1'.time().'.'.$request->image1->extension();
        $image2 = 'image2'.time().'.'.$request->image2->extension();
        $image3 = 'image3'.time().'.'.$request->image3->extension();
        $image4 = 'image4'.time().'.'.$request->image4->extension();
        $image5 = 'image5'.time().'.'.$request->image5->extension();
        
        $request->image1->move(public_path('img/solutions'), $image1);
        $request->image2->move(public_path('img/solutions'), $image2);
        $request->image3->move(public_path('img/solutions'), $image3);
        $request->image4->move(public_path('img/solutions'), $image4);
        $request->image5->move(public_path('img/solutions'), $image5);

        $solution->image1=$image1;
        $solution->image2=$image2;
        $solution->image3=$image3;
        $solution->image4=$image4;
        $solution->image5=$image5;
        dd( $solution);
        $solution->save();
       
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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
