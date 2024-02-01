import FinrexLogo from '../assets/finrex_logo.svg'
import GlobeImg from '../assets/globe.svg'
import SunImg from '../assets/sun.svg'
import HeaderDropdown from './HeaderDropdown'
import { useState } from "react";

export default function Header () {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
      setDropdownVisible(true);
    };
  
    const handleMouseLeave = () => {
      setDropdownVisible(false);
    };
    return (
        <div className='py-4 w-[1440px] justify-between flex border-b border-[#D1D8E1]'>
            <div className='flex gap-[80px]'>
            <img src={FinrexLogo} alt="" />
            <div className='flex gap-10'>
            <div className="dropdown-menu">
                    <div
          className="menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
                <button className='font-medium nav-button w-[60px]'>Trade</button>
          {isDropdownVisible && <HeaderDropdown title1 = 'Hello' title2 = 'Hello' title3 = 'Hello'/>}



        </div></div>
        <div className="dropdown-menu">
                    <div
          className="menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
                <button class='font-medium nav-button w-[60px]'>Market</button>
          {isDropdownVisible && <HeaderDropdown title1 = 'Hello' title2 = 'Hello' title3 = 'Hello'/>}



        </div></div>
                <button class='font-medium w-[60px]'>Earn</button>
                <button class='font-medium w-[110px]'>Copy Trading</button>



            </div>
            </div>

            <div className='flex gap-5'>
            <button className='font-medium w-[50px]'>Log In</button>

                <button className='green-button w-[123px] h-[43px]'>Sign Up</button>
                <button ><img src={GlobeImg} alt="" /></button>
                <button ><img src={SunImg} alt="" /></button>


            </div>
        </div>
    )
}