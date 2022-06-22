<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Domaine;
use App\Models\Formation;
use Inertia\Inertia;

class DomaineController extends Controller
{
    public function index()
    {
       $domaine= Domaine::all()->toArray() ;
     // dd($domaine);
       /* foreach( $domaine  as $key => $value ){
        dd( $value['status'] );
     }   */
      return view('admin.domaines.list',compact('domaine') );
    }
        public function getAll(){
            $domaineData = Domaine::all();
            $formationData = Formation::all();
          
       return Inertia::render('SearchPageList', ["domaines"=>$domaineData,"formations"=>$formationData ]);
        
        }
     /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.domaines.add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $domaine = new Domaine();
        $titletranslation = ['en'=>$request->input('title_en'),'fr'=>$request->input('title')];
        $desctranslation = ['en'=>$request->input('description_en'),'fr'=>$request->input('description')];

        $domaine->title=$titletranslation;
        $domaine->description=$desctranslation;
        $domaine->save();
        return "saved";

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Domaine  $domaine
     * @return \Illuminate\Http\Response
     */
    public function show(Domaine $domaine)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Domaine  $domaine
     * @return \Illuminate\Http\Response
     */
    public function edit(  $id)
    {
     $domaine = Domaine::findOrFail($id)->toArray();

   //  dd( $domaine['title']['en'])
;   /*  foreach( $domaine->toArray() as $key => $value ){
        dd( $value->title );
     }  */
    // dd($domaine);
      //  dd($domaine->toArray());
       //foreach($domaine->toArray() as $dom  => $value){   dd($value['title']['en']);  }
      // foreach($domaine->toArray() as $dom  => $value){   dd( $value['description']['fr']);  }
        return view('admin.domaines.edit',compact('domaine'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Domaine  $domaine
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {

        $id = $request->input('id');
       $domaine= Domaine::findOrFail($id);

        $titletranslation = ['en'=>$request->input('title_en'),'fr'=>$request->input('title')];
        $desctranslation = ['en'=>$request->input('description_en'),'fr'=>$request->input('description')];

        $domaine->title=$titletranslation;
        $domaine->description=$desctranslation;
        //dd( $domaine);
        $domaine->save();
        return redirect( )->route('category.list')->with('status', 'Profile updated!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Domaine  $domaine
     * @return \Illuminate\Http\Response
     */
    public function destroy(Domaine $domaine)
    {
        //
    }
}
