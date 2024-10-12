import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../../Context/AuthContext'; // Adjust the import based on your structure

function SignInSignUp() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); // Added state for name in signup
    const { login, signup } = useAuth(); // Using context for auth functions

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isSignIn) {
                await login(email, password); // Call the login function
            } else {
                await signup(name, email, password); // Pass name, email, and password to signup
            }
        } catch (error) {
            console.error('Error during authentication:', error);
            // Optionally show an error message to the user
        }
    };

    return (
        <div className='container my-5'>
            <div className='card p-4'>
                <div className='d-flex justify-content-center mb-3'>
                    <button 
                        className={`btn ${isSignIn ? 'btn-light' : 'btn-outline-secondary'} mx-1`} 
                        onClick={() => setIsSignIn(true)}
                    >
                        Sign in
                    </button>
                    <button 
                        className={`btn ${!isSignIn ? 'btn-light' : 'btn-outline-secondary'} mx-1`} 
                        onClick={() => setIsSignIn(false)}
                    >
                        Sign up
                    </button>
                </div>
                {isSignIn ? (
                    <div>
                        <h2 className='text-center mb-4'>Welcome back!</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group mb-3'>
                                <label>Email address</label>
                                <input 
                                    type='email' 
                                    className='form-control' 
                                    placeholder='example@gmail.com' 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='form-group mb-3'>
                                <label>Password</label>
                                <input 
                                    type='password' 
                                    className='form-control' 
                                    placeholder='enter your password' 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='text-end mb-3'>
                                <a href='#' className='text-muted'>Forgot password?</a>
                            </div>
                            <button type='submit' className='btn btn-success w-100'>Sign in</button>
                        </form>
                    </div>
                ) : (
                    <div>
                        <h2 className='text-center mb-4'>Create an account</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group mb-3'>
                                <label>Name</label>
                                <input 
                                    type='text' 
                                    className='form-control' 
                                    placeholder='Your Name' 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='form-group mb-3'>
                                <label>Email address</label>
                                <input 
                                    type='email' 
                                    className='form-control' 
                                    placeholder='example@gmail.com' 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='form-group mb-3'>
                                <label>Password</label>
                                <input 
                                    type='password' 
                                    className='form-control' 
                                    placeholder='enter your password' 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type='submit' className='btn btn-success w-100'>Sign up</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SignInSignUp;
