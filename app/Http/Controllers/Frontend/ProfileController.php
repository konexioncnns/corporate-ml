<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProfileController extends Controller
{
   public function getUser(){
    $profile = Auth::user();
    return Inertia::render('Profile/MyProfile',['profile'=>$profile]);
   }

   public function updateProfile(){
    
    $user = Auth::user();
    


   }
}
