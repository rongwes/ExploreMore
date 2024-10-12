import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignInSignUp() {
    const [isSignIn, setIsSignIn] = useState(true);

    const handleSignIn = async (e) => {
        e.preventDefault(); // Prevent default form submission

        const userData = {
            email: document.getElementById("signinEmail").value,
            password: document.getElementById("signinPassword").value,
        };

        try {
            const response = await fetch('http://localhost:5000/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();
            if (response.ok) {
                alert('Sign in successful!');
                // Handle successful sign-in, e.g., redirect to home page
            } else {
                alert(data.message); // Show error message for failed sign-in
            }
        } catch (error) {
            alert('An error occurred while signing in');
            console.error(error);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault(); // Prevent default form submission

        const userData = {
            name: document.getElementById("signupName").value,
            email: document.getElementById("signupEmail").value,
            password: document.getElementById("signupPassword").value,
        };

        try {
            const response = await fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();
            if (response.ok) {
                alert('Account created successfully! You can now sign in.');
                // Optionally redirect to the sign-in page or automatically switch to sign-in
                setIsSignIn(true);
            } else {
                alert(data.message); // Show error message if user already exists or another issue
            }
        } catch (error) {
            alert('An error occurred while signing up');
            console.error(error);
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
                        <form onSubmit={handleSignIn}>
                            <div className='form-group mb-3'>
                                <label>Email address</label>
                                <input 
                                    id="signinEmail"
                                    type='email' 
                                    className='form-control' 
                                    placeholder='example@gmail.com' 
                                    required 
                                />
                            </div>
                            <div className='form-group mb-3'>
                                <label>Password</label>
                                <input 
                                    id="signinPassword"
                                    type='password' 
                                    className='form-control' 
                                    placeholder='enter your password' 
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
                        <form onSubmit={handleSignUp}>
                            <div className='form-group mb-3'>
                                <label>Name</label>
                                <input 
                                    id="signupName"
                                    type='text' 
                                    className='form-control' 
                                    placeholder='Your Name' 
                                    required 
                                />
                            </div>
                            <div className='form-group mb-3'>
                                <label>Email address</label>
                                <input 
                                    id="signupEmail"
                                    type='email' 
                                    className='form-control' 
                                    placeholder='example@gmail.com' 
                                    required 
                                />
                            </div>
                            <div className='form-group mb-3'>
                                <label>Password</label>
                                <input 
                                    id="signupPassword"
                                    type='password' 
                                    className='form-control' 
                                    placeholder='enter your password' 
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
