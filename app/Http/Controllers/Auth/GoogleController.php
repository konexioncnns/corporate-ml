<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;

class GoogleController extends Controller
{

    CONST GOOGLE_TYPE = 'google';
    
    public function handleGoogleRedirect(){
        return Socialite::driver(static::GOOGLE_TYPE)->redirect();
   

    }

    public function handleGoogleCallback(){
        try{
            
            $user =  Socialite::driver('google')->user();
         // dd($user);
            $userExist =User::where('oauth_id',$user->id)->where('oauth_type',static::GOOGLE_TYPE)->first();

            if($userExist){
                Auth::login($userExist);
                return redirect()->route('dashboard');
            }else{
                $newUser = User::create([
                    'name'=>$user->name,
                    'email'=>$user->email,
                    'oauth_id'=>$user->id,
                    'oauth_type'=>static::GOOGLE_TYPE,
                    'password' => Hash::make($user->id),

                ]);
                Auth::login($newUser);
                return redirect()->route('profile');
            }
        }catch(\Throwable $e){
            dd($e);
            
        }
        
    }
}
