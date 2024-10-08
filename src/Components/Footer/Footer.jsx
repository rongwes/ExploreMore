import React from 'react';
import Copyright from '../../Assets/Icons/c-circle.svg';

function Footer() {
    return (
    <div className='py-3'>
        <p className='mb-0'>
        Copyright
        <img src={Copyright} className='mx-1' alt="copyright" />
        Group 16 2024
        </p>
    </div>
    )
}

export default Footer;