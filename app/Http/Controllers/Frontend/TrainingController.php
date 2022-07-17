<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Domaine;
use Illuminate\Http\Request;
use App\Models\Formation;
use Inertia\Inertia;

class TrainingController extends Controller
{
   public function getAll(){
      sleep(seconds:3);
    $data = Formation::all()->toArray();
    $domaineData = Domaine::all();
    $formationData = Formation::all();
  


       return Inertia::render('Formations',['data'=>$data,"domaines"=>$domaineData,"formations"=>$formationData ,]);
   }

   public function getOne($id){
      $data = Formation::findOrFail($id);
         return Inertia::render('FormationDetail',['data'=>$data->only('id','title','formateur','description','overview','programme','price','image')]);
     }
     public function search($id){
     
      $formationData = Formation::findOrFail($id);
      dd($formationData);
    
 return Inertia::render('SearchPageList', ["formation"=>$formationData ]);
  

     }
}
