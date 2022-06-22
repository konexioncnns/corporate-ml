import { useForm } from '@inertiajs/inertia-react';
import { CardElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';


export const CheckoutForm = () => {
    const {post}=useForm();
 
    const { cartTotalAmont } = useSelector((state) => state.cart);
    const cart = useSelector((state) => state.cart);
    const stripe =useStripe();
    const elements= useElements()
    const handleSubmit= async(event)=>{
        event.preventDefault();
        const {error,paymentMethod}= await stripe.createPaymentMethod({
            type:"card",
        card: elements.getElement(CardElement),
        });
        if(!error){
            console.log("Token genere:",paymentMethod)
           
          const {id} = paymentMethod;
             post(route("placeorder",{
                    amount:cartTotalAmont,
                    id:id,
                    cart:cart
             }));
           
           /* 
            post(route("placeorder",{
                amount:100,
                id:id
            })); */

        }else{
            console.log("Token genere:",error)
        }
    }
  return (
   <form onSubmit={handleSubmit} >
     <CardElement options={{ hidePostalCode: true }} />
    <button >Payer</button>
  
   </form>
  )
}
