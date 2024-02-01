// src/App.js
import './index.css'; // or wherever your main CSS file is

import React from 'react';
import LandingPage from './components/LandingPage';
import LogoTicker from './components/LogoTicker';
import Header from './components/Header';
import LandingLaptop from './components/LandingLaptop';
import TokenBlock from './components/TokenBlock';
import FinrexCard from './components/FinrexCard';
import FeaturedTicker from './components/FeaturedTicker';
function App() {
  return (
    <div className=" bg-white flex flex-col items-center justify-center gap-[200px]">
      <Header />
      
    <div className='flex gap-[100px]'>
      <div className='flex flex-col items-start gap-10'>

      <div class='flex flex-col gap-6'>
        <span className='text-[56px] font-bold'>
        Popular cryptocurrency
        </span>
        <span className='text-[#484848]'>
        More than 590 cryptocurrencies. Up to 125x leverage.
         </span>
      </div>
      <button className='green-button w-[114px] h-[43px]'>See all</button>
      </div>

    <TokenBlock />

    </div>
    <LandingLaptop />
    <FinrexCard />
    <LogoTicker />
    <FeaturedTicker />

    </div>
  );
}

export default App;
