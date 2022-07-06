<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Partner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class PartnerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $partners = Partner::all();
        
      // dd($team);
 
       return view('admin.partners.index',compact('partners'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.partners.add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $partner = new Partner();
        $partner->name=$request->input('name');
        $partner->status=$request->input('status');

        if($request->hasFile('logo')){
            $logo = $request->input('name').'.'.$request->logo->extension();
            $partner->logo= $logo;
            $request->logo->move(public_path('img/partners'), $logo);

        }

        //dd($partner);
        $partner->save();
        return redirect()->route('partner.list');

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
       $partner = Partner::findOrFail($id);

       return view('admin.partners.edit',compact('partner'));

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
        $id= $request->input('id');
        $partner = Partner::findOrfail($id);
        $partner->name=$request->input('name');
        $partner->status=$request->input('status');

        if($request->hasFile('logo')){
            $destination = 'img/partners'.$partner->logo;
            if(File::exists($destination)){
                File::delete($destination);}
            $logo = $request->input('name').'.'.$request->logo->extension();
            $partner->logo= $logo;
            $request->logo->move(public_path('img/partners'), $logo);

        }

        
        $partner->update();
        return redirect()->route('partner.list');
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
