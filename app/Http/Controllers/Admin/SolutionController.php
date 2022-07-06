<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Solution;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class SolutionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $solutions = Solution::all();
       // $solutionss=$solutions->toArray();

        return view('admin.solutions.list',compact('solutions',));

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
        if($request->hasFile('image1')){
            $image1 = 'image1'.time().'.'.$request->image1->extension();
            $solution->image1= $image1;
            $request->image1->move(public_path('img/solutions'), $image1);

        }
        if($request->hasFile('image2')){
            $image2 = 'image2'.time().'.'.$request->image2->extension();
            $solution->image2= $image2;
            $request->image2->move(public_path('img/solutions'), $image2);

        }
        if($request->hasFile('image3')){
            $image3 = 'image3'.time().'.'.$request->image3->extension();
            $solution->image3= $image3;
            $request->image3->move(public_path('img/solutions'), $image3);
        }
        if($request->hasFile('image4')){
            $image4 = 'image4'.time().'.'.$request->image4->extension();
            $solution->image4= $image4;
            $request->image4->move(public_path('img/solutions'), $image4);

        }
        if($request->hasFile('image5')){
             $image5 = 'image5'.time().'.'.$request->image5->extension();
            $solution->image5= $image5;
            $request->image5->move(public_path('img/solutions'), $image5);

        }

       
      //  dd( $solution);
        $solution->save();
        return redirect()->route('solution.list');
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
        $solution = Solution::findOrfail($id);
        $servsolu= $solution->toArray();
 
 
        return view('admin.solutions.edit',compact('solution','solu'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
       $id = $request->input('id');
       $solution = Solution::findOrfail($id);

       $titletranslation = ['en'=>$request->input('title_en'),'fr'=>$request->input('title')];
       $extraittranslation = ['en'=>$request->input('extrait_en'),'fr'=>$request->input('extrait')];
       $desctranslation = ['en'=>$request->input('description_en'),'fr'=>$request->input('description')];
       
       $solution->title=$titletranslation;
       $solution->extrait=$extraittranslation;
       $solution->description=$desctranslation;

        if($request->hasFile('image1')){
            $destination = 'img/solutions'.$solution->image1;
            if(File::exists($destination)){
                File::delete($destination);
            }
            $image1 = 'image1'.time().'.'.$request->image1->extension();
            $solution->image1= $image1;
            $request->image1->move(public_path('img/solutions'), $image1);

        }
        if($request->hasFile('image2')){
            $destination = 'img/solutions'.$solution->image2;
            if(File::exists($destination)){
                File::delete($destination);
            }
            $image2 = 'image2'.time().'.'.$request->image2->extension();
            $solution->image2= $image2;
            $request->image2->move(public_path('img/solutions'), $image2);

        }
        if($request->hasFile('image3')){
            $destination = 'img/solutions'.$solution->image3;
            if(File::exists($destination)){
                File::delete($destination);
            }
            $image3 = 'image3'.time().'.'.$request->image3->extension();
            $solution->image3= $image3;
            $request->image3->move(public_path('img/solutions'), $image3);
        }
        if($request->hasFile('image4')){
            $destination = 'img/solutions'.$solution->image4;
            if(File::exists($destination)){
                File::delete($destination);
            }
            $image4 = 'image4'.time().'.'.$request->image4->extension();
            $solution->image4= $image4;
            $request->image4->move(public_path('img/solutions'), $image4);

        }
        if($request->hasFile('image5')){
            $destination = 'img/solutions'.$solution->image5;
            if(File::exists($destination)){
                File::delete($destination);
            }
            $image5 = 'image5'.time().'.'.$request->image5->extension();
            $solution->image5= $image5;
            $request->image5->move(public_path('img/solutions'), $image5);

        }
      // dd( $solution);
       $solution->update();
       return redirect()->route('solution.list');


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
