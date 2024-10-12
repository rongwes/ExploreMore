// EveryoneHolidaysCard.jsx
import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function EveryoneHolidaysCard(props) {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleBookClick = () => {
        // Navigate to PaymentPage with item details and price
        navigate('/payment', { state: { item: props.itemTitle, price: props.itemPrice } });
    };

    return (
        <div className='col-md-6 col-xl-4'>
            <Card className='shadow d-flex flex-sm-row overflow-hidden'>
                <div className='image-div img-hover col-sm-6 d-flex align-items-center justify-content-center px-4 py-5'>
                    <h5 className='text-capitalize text-light'>{props.itemTitle}</h5>
                </div>
                <div className='col-sm-6 d-flex align-items-center'>
                    <Card.Body className='p-4'>
                        <p className='mb-0 text-capitalize'>{props.itemSubTitle}</p>
                        <p className='price my-2 fw-bold text-green'>{props.itemPrice}</p>
                        <p className='mb-0'>per person</p>
                        <button className='btn btn-success' onClick={handleBookClick}>Book</button> {/* Book button */}
                    </Card.Body>
                </div>
            </Card>
        </div>
    );
}

export default EveryoneHolidaysCard;
