<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;
use App\Http\Requests\StoreContactRequest;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       return "contact Index";
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('ContactForm');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreContactRequest $request)
    {
     /*  dd(  Contact::create(
            $request->validated()
        )); */
        
       $contact = new Contact();
         
        $contact->fullname=$request->fullname;
       
        $contact->email=$request->email;
        $contact->phone=$request->phone;
        $contact->subject=$request->subject;
        $contact->message=$request-> message ;
      // dd($contact);
       $contact->save();   
 
          /* $contact = Contact::create([
            'fullname' => $request->name,
            'email' => $request->email,
            'phone' =>$request->phone,
            'message' =>$request->message,
        ]);  
     */

    \Mail::send('contact_email',
    array(
        'name' => $request->get('fullname'),
        'email' => $request->get('email'),
        'subject' => $request->get('subject'),
        'phone_number' => $request->get('phone'),
        'user_message' => $request->get('message'),
    ), function($message) use ($request)
      {
         $message->from($request->email);
         
        $message->subject($request->subject);
         $message->to('ssimple189@gmail.com');
      });

      return redirect::route('getAll', ['msg' => "Message envoyée avec succès"]);
         
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
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
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
