<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
class HomeController extends Controller
{
    public function index(){
        return Inertia::render('Home');
    }
    public function formationDetail(){

        return Inertia::render('FormationDetail');
    }
    public function profileDetail(){

return Inertia::render('Profile/Profile');
}
}
