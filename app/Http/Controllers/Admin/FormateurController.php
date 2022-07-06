<?php

namespace App\Http\Controllers\Admin;

use App\Models\Formateur;
use App\Models\Specialite;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;

class FormateurController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $formateurs = Formateur::all();
     // dd($formateurs);

        return view('admin.formateurs.list',compact('formateurs'));
    }


    

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $specialites = Specialite::all();
        return view('admin.formateurs.add',compact('specialites'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $formateur = new Formateur();



       /*  if($request->file('image')){
            $file= $request->file('image');
            $filename= date('YmdHi').$file->getClientOriginalName();
            $file-> move(public_path('public/img'), $filename);
            $data['image']= $filename;
        }
 */
$imageName = time().'.'.$request->image->extension();  
     

         
       $biographytranslation = ['en'=>$request->input('biography_en'),'fr'=>$request->input('biography')];
       $formateur->firstname=$request->input('firstname');
       $formateur->lastname=$request->input('lastname');
       $formateur->phone=$request->input('phone');
       $formateur->gender=$request->input('gender');
       $formateur->adresse=$request->input('adresse');
       $formateur->email=$request->input('email');
       $formateur->dateofbirth=$request->input('dateofbirth');
       $formateur->biography= $biographytranslation ;
       $formateur->specialite_id=$request->input('specialite_id');
       
       $request->image->move(public_path('img'), $imageName);
       $formateur->image=$imageName;
       $formateur->status="Active";
    // ($formateur);
       $formateur->save();
       return redirect()->route('formateur.list');
        
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
        $formateur=Formateur::findOrFail($id);
        $specialites = Specialite::all();
        return view('admin.formateurs.edit',compact('formateur','specialites'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {   
       
        $id =$request->input('id');

        $formateur = Formateur::findOrFail($id);
        $biographytranslation = $request->input('biography');
        $formateur->firstname=$request->input('firstname');
        $formateur->lastname=$request->input('lastname');
        $formateur->phone=$request->input('phone');
        $formateur->gender=$request->input('gender');
        $formateur->adresse=$request->input('adresse');
        $formateur->email=$request->input('email');
        $formateur->dateofbirth=$request->input('dateofbirth');
        $formateur->biography= $biographytranslation ;
        $formateur->specialite_id=$request->input('specialite_id');
        
        if($request->hasFile('profile_image')){
        $destination = 'img'.$formateur->image;
        if(File::exists($destination)){
            File::delete($destination);  }
        $imageName = $formateur->lastname.time().'.'.$request->profile_image->extension();  
        $formateur->image= $imageName;
        $request->profile_image->move(public_path('img'), $imageName);
    }
        $formateur->status="Active";
        ($formateur);
        $formateur->update();
        return redirect()->route('formateur.list');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $formateur = Formateur::findOrFail($id);
        $formateur->delete();
        return redirect()->route('formateur.list');
    }
}
