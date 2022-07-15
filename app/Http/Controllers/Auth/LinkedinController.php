<?php
namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;

class LinkedinController extends Controller
{
    CONST LINKEDIN_TYPE = 'linkedin';

    public function handleLinkedinRedirect(){
        return Socialite::driver(static::LINKEDIN_TYPE)->redirect();
   

    }

    public function handleLinkedinCallback(){
        try{
            
            $user =  Socialite::driver(static::LINKEDIN_TYPE)->user();
         // dd($user);
            $userExist =User::where('oauth_id',$user->id)->where('oauth_type',static::LINKEDIN_TYPE)->first();

            if($userExist){
                Auth::login($userExist);
                return redirect()->route('profile');
            }else{
                $newUser = User::create([
                    'name'=>$user->name,
                    'email'=>$user->email,
                    'oauth_id'=>$user->id,
                    'oauth_type'=>static::LINKEDIN_TYPE,
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
