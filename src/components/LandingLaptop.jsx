import laptopSvg from '../assets/laptop.png';
export default function LandingLaptop() {
    return(
        <div className='flex flex-col items-center gap-10'>
        <div className='flex flex-col items-center gap-6'>
            <span className='text-[56px] font-bold'>Institutional - grade crypto exchange</span>
            <span className='text-[#484848]'>Crypto-exchange created for institutions and finance professionals</span>
            </div>

            <div class = 'flex gap-[140px] items-center'>
            <div>
                <img className='w-[641px] h-[377px]' src={laptopSvg} alt="" />
            </div>
            <div className='flex flex-col gap-4 w-[430px]'>
                <h5 className='font-bold text-[32px]'>FinRex Custody</h5>
                <div className='flex flex-col gap-8'>
                <span className='text-[#484848]'>Cryptocurrency custody and solutions in partnership with Fireblocks cryptoasset custodian</span>
                <span>Multi-level data encryption, audits and follow best practice guidelines to protect customer accounts. Our Support team uses advanced machine learning to recognise suspicious logins, account takeovers and financial fraud.</span>
                
                </div>

            </div>
            </div>
        </div>
    )
}