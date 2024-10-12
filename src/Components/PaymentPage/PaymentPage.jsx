import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './PaymentPage.css'; // Import your CSS file for styling

function PaymentPage() {
    const location = useLocation();
    const { item, price } = location.state || {}; // Retrieve booking details from the state
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (!stripe || !elements) {
            return; // Ensure Stripe is loaded
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setError(error.message);
        } else {
            setSuccess(`Payment successful! PaymentMethod ID: ${paymentMethod.id}`);
            // Here you would typically send the paymentMethod.id to your server to create a charge
            console.log('PaymentMethod ID:', paymentMethod.id);
        }
    };

    return (
        <div className="payment-container">
            <h1>Credit Card</h1>
            {item && price ? (
                <div>
                    <p>Price: <span className="price">{price} pp</span></p>
                    <form onSubmit={handleSubmit} className="payment-form">
                        <div className="input-group">
                            <input type="text" placeholder="Account Number" className="card-input" required />
                            <CardElement options={{
                                style: {
                                    base: {
                                        color: '#333',
                                        fontSize: '16px',
                                        '::placeholder': {
                                            color: '#999',
                                        },
                                    },
                                    invalid: {
                                        color: '#fa755a',
                                    },
                                },
                            }} />
                            <input type="text" placeholder="Name on the card" className="card-input" required />
                            <div className="expiry-security">
                                <input type="text" placeholder="Expiry date (MM/YY)" className="expiry-input" required />
                                <input type="text" placeholder="Security code" className="security-input" required />
                            </div>
                        </div>
                        <button type='submit' className='btn btn-success mt-3' disabled={!stripe}>
                            Pay Now
                        </button>
                    </form>
                    {error && <p className='text-danger'>{error}</p>}
                    {success && <p className='text-success'>{success}</p>}
                </div>
            ) : (
                <p>No booking details found.</p>
            )}
        </div>
    );
}

export default PaymentPage;


