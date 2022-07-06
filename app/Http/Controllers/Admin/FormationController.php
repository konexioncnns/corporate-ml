<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Domaine;
use App\Models\Formateur;
use App\Models\Formation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Session;
use AmrShawky\LaravelCurrency\Facade\Currency;

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
        $formations = Formateur::all();
        
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

    public function edit($id)
    {
     $formation=Formation::findOrFail($id);
     $form=$formation->toArray();
    // dd($form['public']['fr']);
        $domaines = Domaine::all();
        $formateurs = Formateur::all();
        return view('admin.formations.edit',compact('form','formation','domaines','formateurs'));
    }

    public function update(Request $request)
    {   
       
        $id =$request->input('id');
        $formation = Formation::findOrFail($id);

        $titletranslation = ['en'=>$request->input('title_en'),'fr'=>$request->input('title')];
        $desctranslation = ['en'=>$request->input('description_en'),'fr'=>$request->input('description')];
         $overviewTranslation=['en'=>$request->input('objectif_en'),'fr'=>$request->input('objectif')];
         $programmeTranslation=['en'=>$request->input('programme_en'),'fr'=>$request->input('programme')];
         $publicTranslation=['en'=>$request->input('public_en'),'fr'=>$request->input('public')];
         $price = $request->input('price');
         $formateur_id = $request->input('formateur_id');
         $domaine_id = $request->input('domaine_id');



         $formation->title=$titletranslation;
         $formation->description=$desctranslation;
         $formation->overview=$overviewTranslation;
         $formation->programme=$programmeTranslation;
         $formation->public=$publicTranslation;
         $formation->price=$price;
         $formation->domaine_id=$domaine_id;
         $formation->formateur_id=$formateur_id; 



      if($request->hasFile('image')){
        $destination = 'img/formations/'. $formation->image;
        if(File::exists($destination)){
            File::delete($destination);  }

            $imageName = time().'.'.$request->image->extension();  
            $formation->image= $imageName;
            $request->profile_image->move(public_path('img/formations'), $imageName);
        }
       // dd($formation);
       $formation->update();
    }

}
