import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Example from '../Checkout2';
import { CheckoutForm } from './CheckoutForm';

const PUBLIC_KEY="pk_test_51JDTUFCngUWcCNgp4SkCGnLkOh1oyndawELcl0x0Ai5STyhNehKjwtVOiS6doYHZafF8oHZAISF2BRSMQqkj2XAh001sxGofwi"
const CLIENT_SECRET="sk_test_51JDTUFCngUWcCNgphg6kFaMyOjxL3jSD2rNix15xokKkNZ7eozk5jqDwTVum9AxVAQ2dhz9ptoDUwjW7cUgqnZSC00susTXT6a"
const stripeTestPromise = loadStripe(PUBLIC_KEY);

 function StripeContainer() {
    const options = {
        // passing the client secret obtained from the server
        clientSecret:"pi_1FpUmEKZaRsxp2y4c9OPoTjM_secret_tv9tsgAQbAlNRYqm8MAzmYPuE",
      };
  return (
   <Elements stripe={stripeTestPromise}   >
    <CheckoutForm/>

   </Elements>
  )
}
export default StripeContainer;