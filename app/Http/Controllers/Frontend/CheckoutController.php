<?php

namespace App\Http\Controllers\Frontend;


use Inertia\Inertia;
use App\Models\Order;
use Barryvdh\DomPDF\Facade as PDF;
use App\Models\Orderitems;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StoreCheckoutRequest;
use Cartalyst\Stripe\Laravel\Facades\Stripe;


class CheckoutController extends Controller
{
 
    public function placeorder(Request $request)
    {
     

      $latestOrder = Order::orderBy('created_at','DESC')->first();
      $orderNumber  = str_pad($latestOrder->id + 1, 1, STR_PAD_LEFT);


      $order = new Order();
      $order->payment_id=$request->id;
      $panier = $request->cart;
     
        

      $firstname=$request->firstname;
      $lastname=$request->lastname;

      $email=$request->email;
      $phone=$request->phone;
      $card_number=$request->card_number;
      $exp_month=$request->exp_month;
      $exp_year=$request->exp_year;
      $cvc=$request->cvc;
      $name_on_card=$request->name_on_card;
      $city=$request->city;
      $country=$request->country;
      $region=$request->region;
      $postal_code=$request->postal_code;

      /* foreach($panier as $key =>$pan){
        dd( $pan.id);
      } */
     // dd($email);

      $stripe= Stripe::make(env('STRIPE_SECRET_KEY'));
      $token =$stripe->tokens()->create([
        'card'=>[
          'number'=>$card_number,
          'exp_month'=>$exp_month,
          'exp_year'=>$exp_year,
          'cvc'=>$cvc,
        ]
      ]);

      $customer= $stripe->customers()->create([
        'name'=>$lastname.' '.$firstname,
        'email'=> $email,
        'phone'=> $phone,
        'address'=>[
          'line1'=>'Bamako/sogoniko',
          'postal_code'=>$postal_code,
          'city'=>$city,
          'state'=>$region,
          'country'=>$country
        ],
        'shipping'=>[
          'name'=> $name_on_card,
          'address'=>[
            'line1'=>'Bamako/sogoniko',
            'postal_code'=>$postal_code,
            'city'=>$city,
            'state'=>$region,
            'country'=>$country ],
          ],
          'source'=>$token['id']

      ]);
      $charge = $stripe->charges()->create([
        'customer'=>$customer['id'],
        'currency'=>'XOF',
        'amount'=>$request->amount,
        'description'=>'Payement pour la commande numero:10',  ]);
        if($charge['status']=='succeeded'){ 
          foreach($panier as $key  ){
            $newOrder =new Order();
            if(is_array($key) || is_object($key))
            {
            foreach($key as $arr){
             // dd($arr);
              $newOrderItem =new Orderitems();
              
              $newOrderItem->formation_id= $arr[ 'id'];
              $newOrderItem->order_number=  $orderNumber;
              $newOrderItem->qty=$arr['cartQuantity'];
              $newOrderItem->price=$arr['price'];
              //dd( $newOrder);
              $newOrderItem->save();

            }}
            
        }
        
            $newOrder->user_id= Auth::user()->id;
            $newOrder->order_number=$orderNumber;
            $newOrder->payment_id=$token['id'];
            $newOrder->amount=$panier['cartTotalAmont'];
            $newOrder->payment_methode="XOF";
            
            $newOrder->save();

            
            //dd($orders);
            $orderList =    Orderitems::where('order_number',$orderNumber)->get();
             $pdf = PDF::loadView('pdf_template.orders_pdf', compact('orderList'));

            Mail::send('order_email',
            array(
                'name' =>$firstname,
                'email' => $request->get('email'),
                'amount' => $request->amount,
                'orderNumber' => $orderNumber,
            ), function($message) use ($request,$pdf)
              {
                 $message->from('noreply@1simple1.com');
                 
                $message->subject("Nouvelle commande");
                 $message->to($request->email);
                 $message->attachData($pdf->output(),"commande.pdf", [
                  'mime' => 'application/pdf',
              ]);
              });
        

         
          return redirect()->route('paymentsuccess', ['msg' => "Payement effectuez"]);


        }
        else{
          return redirect()->route('/contactus', ['msg' => "Payement effectuez"]);
        }
     
       
   }


   /*     const  = await stripe.p

         
            $order->user_id = Auth()->id();
            $latestOrder = Order::orderBy('created_at','DESC')->first();
            $order->order_number = '#'.str_pad($latestOrder->id + 1, 8, "0", STR_PAD_LEFT);
            $order->payment_methode=$request->payment_methode;

            dd($order);   */  

            public function getorders(){
            
        $user = Auth::user(); 
            $data = Order::where('user_id','=',$user->id)->get();
              // dd($data);
                  return Inertia::render('Profile/MyOrder',['data'=>$data]);
          

            }

          public function getOrderDetail(){
            $data="ok";
            return Inertia::render('Profile/MyOrder',['data'=>$data]);
          }

          public function createPDF($id){
            // Retrieve all products from the db
            $orders = Orderitems::where('order_number',$id)->get();
           //dd($orders);
            $pdf = PDF::loadView('pdf_template.orders_pdf', compact('orders'));
            return $pdf->download('file-pdf.pdf');
        }
 


}