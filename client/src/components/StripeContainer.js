import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY =
    'pk_test_51MOam3Ep9XC3ZP56b1kuqX6zU1fSTpP1ZYUSsqyBeHu0sDI9j8KrEJxjU7eAlrPP19Tc2oBp93r7KCujqiS4CD0j00FX2Jn66u';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    );
};

export default StripeContainer;
