<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateUserProfileRequest;
use App\Models\User;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProfileController extends Controller
{
  
   public function index(){

   }
   public function create(){

   }
   public function edit(){

   }
   public function update(UpdateUserProfileRequest $request, User $profile){
     
       $profile->update($request->validated());
     return redirect()->route('profile'); 

   }
  /*  public function update(UpdateUserProfileRequest $request, User $profile){
      $profile->update($request->validated());
      dd($profile);

   } */
   public function destroy(){

   }
   public function getUser(){
    $profile = Auth::user();
    return Inertia::render('Profile/MyProfile',['profile'=>$profile]);
   }

   /* public function updateProfile(UpdateUserProfileRequest $request, User $profile){
      $profile->update($request->validated());
      dd($profile);
    //$user = Auth::user();
    


   } */
}
