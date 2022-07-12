<?php

namespace App\Http\Controllers\Admin;use App\Models\Service;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $services = Service::all();
        $servicess=$services->toArray();

        return view('admin.services.list',compact('services','servicess'));

    }
public function getAll(){
    $services = Service::all();
        $servicess=$services->toArray();

        return Inertia::render('Services',['services'=>$services]);



}
public function getOne($id){
    $service = Service::findOrfail($id);

        return Inertia::render('Services/Service',['service'=>$service]);



}
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.services.add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $service = new Service();
       
        $titletranslation = ['en'=>$request->input('title_en'),'fr'=>$request->input('title')];
        $extraittranslation = ['en'=>$request->input('extrait_en'),'fr'=>$request->input('extrait')];
        $desctranslation = ['en'=>$request->input('description_en'),'fr'=>$request->input('description')];
        
        $needstranslation = ['en'=>$request->input('needs_en'),'fr'=>$request->input('needs')];
        $our_servicetranslation = ['en'=>$request->input('our_service_en'),'fr'=>$request->input('our_service')];
        $add_valuestranslation = ['en'=>$request->input('add_values_en'),'fr'=>$request->input('add_values')];
        $customer_experiencestranslation = ['en'=>$request->input('customer_experiences_en'),'fr'=>$request->input('customer_experiences')];

         $service->title=$titletranslation;
        $service->extrait=$extraittranslation;
        $service->description=$desctranslation;
        $service->needs=$needstranslation;
        $service->our_service=$our_servicetranslation;
        $service->add_values= $add_valuestranslation;
        $service->customer_experiences= $customer_experiencestranslation ;

        if($request->hasFile('image1')){
            $image1 = 'image1'.time().'.'.$request->image1->extension();
            $service->image1= $image1;
            $request->image1->move(public_path('img/services'), $image1);

        }
        if($request->hasFile('image2')){
            $image2 = 'image2'.time().'.'.$request->image2->extension();
            $service->image2= $image2;
            $request->image2->move(public_path('img/services'), $image2);

        }
        if($request->hasFile('image3')){
            $image3 = 'image3'.time().'.'.$request->image3->extension();
            $service->image3= $image3;
            $request->image3->move(public_path('img/services'), $image3);
        }
        if($request->hasFile('image4')){
            $image4 = 'image4'.time().'.'.$request->image4->extension();
            $service->image4= $image4;
            $request->image4->move(public_path('img/services'), $image4);

        }
        if($request->hasFile('image5')){
             $image5 = 'image5'.time().'.'.$request->image5->extension();
            $service->image5= $image5;
            $request->image5->move(public_path('img/services'), $image5);

        }

       
      //  dd( $service);
        $service->save();
        return redirect()->route('service.list');
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
       $service = Service::findOrfail($id);
       $serv= $service->toArray();


       return view('admin.services.edit',compact('service','serv'));
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
       $id = $request->input('id');
       $service = Service::findOrfail($id);

       $titletranslation = ['en'=>$request->input('title_en'),'fr'=>$request->input('title')];
       $extraittranslation = ['en'=>$request->input('extrait_en'),'fr'=>$request->input('extrait')];
       $desctranslation = ['en'=>$request->input('description_en'),'fr'=>$request->input('description')];
       
       $needstranslation = ['en'=>$request->input('needs_en'),'fr'=>$request->input('needs')];
       $our_servicetranslation = ['en'=>$request->input('our_service_en'),'fr'=>$request->input('our_service')];
       $add_valuestranslation = ['en'=>$request->input('add_values_en'),'fr'=>$request->input('add_values')];
       $customer_experiencestranslation = ['en'=>$request->input('customer_experiences_en'),'fr'=>$request->input('customer_experiences')];

       $service->title=$titletranslation;
       $service->extrait=$extraittranslation;
       $service->description=$desctranslation;
       $service->needs=$needstranslation;
       $service->our_service=$our_servicetranslation;
       $service->add_values= $add_valuestranslation;
       $service->customer_experiences= $customer_experiencestranslation ;

        if($request->hasFile('image1')){
            $destination = 'img/services'.$service->image1;
            if(File::exists($destination)){
                File::delete($destination);
            }
            $image1 = 'image1'.time().'.'.$request->image1->extension();
            $service->image1= $image1;
            $request->image1->move(public_path('img/services'), $image1);

        }
        if($request->hasFile('image2')){
            $destination = 'img/services'.$service->image2;
            if(File::exists($destination)){
                File::delete($destination);
            }
            $image2 = 'image2'.time().'.'.$request->image2->extension();
            $service->image2= $image2;
            $request->image2->move(public_path('img/services'), $image2);

        }
        if($request->hasFile('image3')){
            $destination = 'img/services'.$service->image3;
            if(File::exists($destination)){
                File::delete($destination);
            }
            $image3 = 'image3'.time().'.'.$request->image3->extension();
            $service->image3= $image3;
            $request->image3->move(public_path('img/services'), $image3);
        }
        if($request->hasFile('image4')){
            $destination = 'img/services'.$service->image4;
            if(File::exists($destination)){
                File::delete($destination);
            }
            $image4 = 'image4'.time().'.'.$request->image4->extension();
            $service->image4= $image4;
            $request->image4->move(public_path('img/services'), $image4);

        }
        if($request->hasFile('image5')){
            $destination = 'img/services'.$service->image5;
            if(File::exists($destination)){
                File::delete($destination);
            }
            $image5 = 'image5'.time().'.'.$request->image5->extension();
            $service->image5= $image5;
            $request->image5->move(public_path('img/services'), $image5);

        }
      // dd( $service);
       $service->update();
       return redirect()->route('service.list');


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
