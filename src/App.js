import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Home from './Pages/Home/Home';
import Destinations from './Pages/Destinations/Destinations';
import Holidays from './Pages/Holidays/Holidays';
import CityBreaks from './Pages/CityBreaks/CityBreaks';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Footer from './Components/Footer/Footer';
import PaymentPage from './Components/PaymentPage/PaymentPage';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import SignInSignUp from './Components/SignInSignUp/SignInSignUp';

// Load your Stripe public key
const stripePromise = loadStripe('YOUR_PUBLIC_STRIPE_KEY'); // Replace with your actual public key

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Elements stripe={stripePromise}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/city-breaks' element={<CityBreaks />} />
          <Route path='/holidays' element={<Holidays />} />
          <Route path='/destinations' element={<Destinations />} />
          <Route path='/payment' element={<PaymentPage />} />  {/* Payment Route */}
          <Route path='/signup' element={<SignInSignUp />} /> {/* Sign Up Route */}
          <Route path='/admin' element={<AdminDashboard />} /> {/* Admin Dashboard Route */}
        </Routes>
      </Elements>
      <Footer />
    </div>
  );
}

export default App;




