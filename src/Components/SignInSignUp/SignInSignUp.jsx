import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignInSignUp() {
    const [isSignIn, setIsSignIn] = useState(true);

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
                        <form>
                            <div className='form-group mb-3'>
                                <label>Email address</label>
                                <input 
                                    type='email' 
                                    className='form-control' 
                                    placeholder='example@gmail.com' 
                                />
                            </div>
                            <div className='form-group mb-3'>
                                <label>Password</label>
                                <input 
                                    type='password' 
                                    className='form-control' 
                                    placeholder='enter your password' 
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
                        <form>
                            <div className='form-group mb-3'>
                                <label>Name</label>
                                <input 
                                    type='text' 
                                    className='form-control' 
                                    placeholder='Your Name' 
                                />
                            </div>
                            <div className='form-group mb-3'>
                                <label>Email address</label>
                                <input 
                                    type='email' 
                                    className='form-control' 
                                    placeholder='example@gmail.com' 
                                />
                            </div>
                            <div className='form-group mb-3'>
                                <label>Password</label>
                                <input 
                                    type='password' 
                                    className='form-control' 
                                    placeholder='enter your password' 
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
