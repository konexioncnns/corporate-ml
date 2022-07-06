<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Team;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $teams = Team::all();
        
     // dd($team);

      return view('admin.teams.index',compact('teams'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.teams.add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $team = new Team();
        $postetranslation = ['en'=>$request->input('poste_en'),'fr'=>$request->input('poste')];

        $team->fullname=$request->input('fullname');
        $team->poste= $postetranslation;
        $team->email=$request->input('email');
        $team->phone=$request->input('phone');
        $team->bio=$request->input('bio');
        $team->social1=$request->input('social1');
        $team->social2=$request->input('social2');
        $team->social3=$request->input('social3');

        if($request->hasFile('image')){
            $image = $request->input('fullname').'.'.$request->image->extension();
            $team->image= $image;
            $request->image->move(public_path('img/teams'), $image);

        }

        
       // dd($team);
        $team->save();
        return redirect()->route('team.list');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $team= Team::findOrFail($id); 
        $teamm= $team->toArray();
        return view('admin.teams.edit',compact('team','teamm'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, )
    {
        $id = $request->input('id');
      
        $team= Team::findOrFail($id); 
        
        $postetranslation = ['en'=>$request->input('poste_en'),'fr'=>$request->input('poste')];
        $team->fullname=$request->input('fullname');
        $team->poste= $postetranslation;
        $team->email=$request->input('email');
        $team->phone=$request->input('phone');
        $team->bio=$request->input('bio');
        $team->social1=$request->input('social1');
        $team->social2=$request->input('social2');
        $team->social3=$request->input('social3');


        if($request->hasFile('image')){
            $destination = 'img/teams'.$team->image5;
            if(File::exists($destination)){
                File::delete($destination);}
            $image = 'image'.time().'.'.$request->image->extension();
            $team->image= $image;
            $request->image->move(public_path('img/teams'), $image);

        }

        
        dd($team);
        $team->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
