import React from 'react';
import './Home.css';
import HeroSection from '../../Components/HeroSection/HeroSection';
import SearchForm from '../../Components/SearchForm/SearchForm';

function Home() {
    return (
    <div className='home-page'>
        <HeroSection />
        <SearchForm />
    </div>
    )
}

export default Home;