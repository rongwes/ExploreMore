import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { AuthContext } from '../../Context/AuthContext'; // Assuming you're using an AuthContext to manage authentication

function CityBreakCard(props) {
  const navigate = useNavigate(); // Hook to handle navigation
  const { isLoggedIn } = useContext(AuthContext); // Access the logged-in state from AuthContext

  const handleBook = () => {
    if (isLoggedIn) {
      // Redirect to the payment page if the user is logged in
      navigate('/payment', { state: { item: props.itemTitle, price: props.itemPrice } });
    } else {
      // Show alert if the user is not logged in
      alert('Please log in to proceed with booking.');
    }
  };

  return (
    <div className='col-md-6 col-lg-4'>
      <Card className='shadow h-100 overflow-hidden'>
        <Card.Img className='img-hover' variant='top' src={props.itemImage} />
        <Card.Body className='p-4'>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Card.Title className='text-start text-uppercase fw-bold mb-0'>{props.itemTitle}</Card.Title>
              <Card.Text className='text-start mb-0'>{props.itemSubTitle}</Card.Text>
            </div>
            <Button variant="success" className='ms-3' onClick={handleBook}>
              Book
            </Button>
          </div>
          <div className='d-flex justify-content-between mt-4'>
            <Card.Text>{props.itemNights}</Card.Text>
            <Card.Text>
              from
              <span className='fw-bold ms-1 text-green'>{props.itemPrice}</span>
              pp
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CityBreakCard;
