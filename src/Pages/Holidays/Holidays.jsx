import React from 'react';
import './Holidays.css';
import SecondHeroSection from '../../Components/SecondHeroSection/SecondHeroSection';
import EveryoneHolidays from '../../Components/EveryoneHolidays/EveryoneHolidays';
import NeedInspirationSection from '../../Components/NeedInspiration/NeedInspirationSection';

function Holidays() {
    return (
    <div className='holidays-page'>
        <SecondHeroSection secondHeroTitle='Your perfect holiday' />
        <EveryoneHolidays />
        <NeedInspirationSection />
    </div>
    )
}

export default Holidays;