<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Formation;
use App\Models\Domaine;
use App\Models\Formateur;
use Inertia\Inertia;
use Illuminate\Support\Facades\App;
use AmrShawky\LaravelCurrency\Facade\Currency;
use Illuminate\Support\Facades\Session;
class FormationController extends Controller
{
    public function index()
    {
      $form =Formation::findOrFail(1);
       // $titletranslation = ['en'=>'Introduction of itil','fr'=>'Introduction de itil 4'];
       // $desctranslation = ['en'=>'I am happy','fr'=>'Je suis heureux'];
       //
       // dd($form->formateur);
       //$locale= App::getLocale();
    
     // $form->formateur->firsname;

        $n=optional($form->formateur->firstname);
        $device = Currency::convert()
        ->from('XOF')
        ->to('CAD')
        ->amount($form->price)
        ->round(2)
        ->get();
        $locale = App::currentLocale();
 
 if (App::isLocale('en')) {
    
  
       return Inertia::render('Home', ["device"=>$device.' CAD','form' =>$form->only('title','description','overview','public','programme','price','status','n',)]);
         } else{
            $device=$form->price.' FCFA';
            return Inertia::render('Home', ["device"=>$device,'form' =>$form->only('title','description','overview','public','programme','price','status','n',)]);
        
        }  
    }
    public function list()
    {
       $formation= Formation::all()->toArray() ;
     // dd($domaine);
       /* foreach( $domaine  as $key => $value ){
        dd( $value['status'] );
     }   */
      return view('admin.formations.index',compact('formation') );
    }

    public function create(){

        $domaines = Domaine::all();
        $formateurs = Formateur::all();
        
       return view('admin/formations/add',compact('domaines','formateurs'));
   }

    public function store(Request $request)
    {
        $form = new Formation();
        $imageName = time().'.'.$request->image->extension(); 
        $titletranslation = ['en'=>$request->input('title_en'),'fr'=>$request->input('title')];
       $desctranslation = ['en'=>$request->input('description_en'),'fr'=>$request->input('description')];
        $overviewTranslation=['en'=>$request->input('objectif_en'),'fr'=>$request->input('objectif')];
        $programmeTranslation=['en'=>$request->input('programme_en'),'fr'=>$request->input('programme')];
        $publicTranslation=['en'=>$request->input('public_en'),'fr'=>$request->input('public')];
        $price = $request->input('price');
        $formateur_id = $request->input('formateur_id');
        $domaine_id = $request->input('domaine_id');
        $request->image->move(public_path('img/formations'), $imageName);
        $form->image=$imageName;
       // $form->title =$request->input('title');
       // $form->description =$request->input('description');
       $form->title=$titletranslation;
       $form->description=$desctranslation;
       $form->overview=$overviewTranslation;
       $form->programme=$programmeTranslation;
       $form->public=$publicTranslation;
       $form->price=$price;
       $form->domaine_id=$domaine_id;
       $form->formateur_id=$formateur_id; 
     //dd($form);
        $form->save();

    }

}
