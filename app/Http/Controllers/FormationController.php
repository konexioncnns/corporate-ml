<?php

namespace App\Http\Controllers;

use App\Models\Formation;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\App;

use AmrShawky\LaravelCurrency\Facade\Currency;
class FormationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    
    public function index()
    {
        $form =Formation::find(1);
       // $titletranslation = ['en'=>'Introduction of itil','fr'=>'Introduction de itil 4'];
       // $desctranslation = ['en'=>'I am happy','fr'=>'Je suis heureux'];
       //
       // dd($form);
       //$locale= App::getLocale();
       $device = Currency::convert()
       ->from('USD')
       ->to('XOF')
       ->amount($form->price)
       ->get();
      
       
    
       return Inertia::render('Home', ['form' =>$form->only('title','description','overview','public','programme','price','status')]);
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin/formation/add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $form = new Formation();
        $titletranslation = ['en'=>$request->input('title_en'),'fr'=>$request->input('title')];
       $desctranslation = ['en'=>$request->input('description_en'),'fr'=>$request->input('description')];
        $overviewTranslation=['en'=>$request->input('objectif_en'),'fr'=>$request->input('objectif')];
        $programmeTranslation=['en'=>$request->input('programme_en'),'fr'=>$request->input('programme')];
        $publicTranslation=['en'=>$request->input('public_en'),'fr'=>$request->input('public')];
        $price = $request->input('price');
       // $form->title =$request->input('title');
       // $form->description =$request->input('description');
       $form->title=$titletranslation;
       $form->description=$desctranslation;
       $form->overview=$overviewTranslation;
       $form->programme=$programmeTranslation;
       $form->public=$publicTranslation;
       $form->price=$price;
     //dd($form);
        $form->save();

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Formation  $formation
     * @return \Illuminate\Http\Response
     */
    public function show(Formation $formation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Formation  $formation
     * @return \Illuminate\Http\Response
     */
    public function edit(Formation $formation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Formation  $formation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Formation $formation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Formation  $formation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Formation $formation)
    {
        //
    }
}