<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Formation;
use Inertia\Inertia;

class TrainingController extends Controller
{
   public function getAll(){
    $data = Formation::all()->toArray();
       return Inertia::render('Formations',['data'=>$data]);
   }
}
