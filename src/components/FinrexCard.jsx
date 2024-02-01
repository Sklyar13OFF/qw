import FinrexCardImg from '../assets/finrex_card.png';
export default function FinrexCard () {
    return (
        <div className="flex gap-[145px]">
            <div className='flex flex-col w-[430px] gap-6'>
                <h5 className='text-[56px] font-bold'>Finrex Card</h5>
                <div className='flex flex-col gap-10'>
                <span>Finrex Card lets you spend your crypto like cash, online and in-store – with both Apple Pay and Google Pay™. It’s free to set up, has no monthly fees and you earn CoinJar Rewards every time you spend.</span>
                <button className='green-button w-[206px] h-[43px]'>Get your free card</button>
                </div>
            </div>
        <div>
        <img class= 'w-[635px] h-[580px]' src={FinrexCardImg} alt="" />
        </div>
        </div>
    )
}