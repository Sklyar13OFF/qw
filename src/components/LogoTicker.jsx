import LedgerLogo from '../assets/ledger_logo.png'
import CertikLogo from '../assets/certik_logo.png'
import ChainLogo from '../assets/chainanalysis_logo.png'
import SumLogo from '../assets/sum_logo.png'
import TVLogo from '../assets/tradingview_logo.png'
import FBLOGO from '../assets/fireblocks_logo.png'

export default function LogoTicker() {

    return (
        <div className="logos">
            <div className='text-white font-bold text-[56px] mt-[60px]  mb-[40px] ml-[356px] w-[200px]'> Our global partners </div>
            <div className="logos-slide">
            <a target='_blank' className='h-full' href="https://ledger.com/"><img className='h-full' src={LedgerLogo} alt="" /> </a>
        <a target='_blank' className='h-full'  href="https://www.certik.com/"><img className='h-full' src={CertikLogo} alt="" /> </a>
        <a target='_blank' className='h-full'  href="https://www.chain.com/"><img  className='h-full' src={ChainLogo} alt="" /> </a>
        <a target='_blank' className='h-full'  href="https://sumsub.com/"><img className='h-full' src={SumLogo} alt="" /> </a>
        <a target='_blank' className='h-full'  href="https://www.tradingview.com/"><img className='h-full' src={TVLogo} alt="" /> </a>
        <a  target='_blank' className='h-full' href="https://www.fireblocks.com/"><img src={FBLOGO} className='h-full' alt="" /> </a>
        
        </div>
      
        <div className="logos-slide">
        <a target='_blank' className='h-full'  href="https://ledger.com/"><img className='h-full' src={LedgerLogo} alt="" /> </a>
        <a target='_blank' className='h-full'  href="https://www.certik.com/"><img className='h-full' src={CertikLogo} alt="" /> </a>
        <a target='_blank' className='h-full'  href="https://www.chain.com/"><img className='h-full' src={ChainLogo} alt="" /> </a>
        <a target='_blank' className='h-full'  href="https://sumsub.com/"><img className='h-full' src={SumLogo} alt="" /> </a>
        <a target='_blank' className='h-full'  href="https://www.tradingview.com/"><img className='h-full' src={TVLogo} alt="" /> </a>
        <a target='_blank' className='h-full'  href="https://www.fireblocks.com/"><img src={FBLOGO} className='h-full' alt="" /> </a>
        
        </div>
      </div>
    )
}