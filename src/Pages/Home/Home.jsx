import React from 'react';
import './Home.css';
import HeroSection from '../../Components/HeroSection/HeroSection';
import LastHolidaysSection from '../../Components/LastHolidaysSection/LastHolidaysSection';
import RecommendedSection from '../../Components/RecommendedSection/RecommendedSection';
import HolidayPlanSection from '../../Components/HolidayPlanSection/HolidayPlanSection';
import FavouritesSection from '../../Components/FavouritesSection/FavouritesSection';
import RecentHolidays from '../../Components/RecentHolidays/RecentHolidays';
import NeedInspirationSection from '../../Components/NeedInspiration/NeedInspirationSection';
{/*import SearchForm from '../../Components/SearchForm/SearchForm';*/}

function Home() {
    return (
    <div className='home-page'>
        <HeroSection />
        {/*<SearchForm />*/}
        <LastHolidaysSection /> {/*Popular destinations*/}
        <div className="my-4 my-sm-5">
            <RecommendedSection itemRecommendedTitle='Recommended for you' />
        </div>
        <HolidayPlanSection itemHolidayPlanTitle='Plan your summer holiday' />
        <FavouritesSection />
        <RecentHolidays /> 
        <NeedInspirationSection />
    </div>
    )
}

export default Home;