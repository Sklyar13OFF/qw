import BitCoinstLogo from '../assets/bitcoinst.svg'
import BscnLogo from '../assets/bscn.svg'
import NewsBtcLogo from '../assets/newsbtc.svg'
import TechBullionLogo from '../assets/techbullion.svg'


export default function FeaturedTicker () {
    return (
        <div className='flex flex-col gap-10'>
            <h5 className='font-bold text-[56px]'>Featured In</h5>
            <div className='flex gap-[120px] items-center'>
            <div>
                <a target='_blank' href="https://bitcoinist.com/">
                <img src={BitCoinstLogo} alt="" />

                </a>
                
            </div>
            <div>
                <a target='_blank' href="https://bscn.org.uk/">
                <img src={BscnLogo} alt="" />

                </a>
                
            </div>
            <div>
                <a target='_blank' href="https://newsbtc.com/">
                <img src={NewsBtcLogo} alt="" />

                </a>
                
            </div>
            <div>
                <a target='_blank' href="https://techbullion.com/">
                <img src={TechBullionLogo} alt="" />

                </a>
                
            </div>
            </div>
        </div>
    )
}