import React, { useEffect, useState } from 'react';
import '../index.css';

const targetSymbols = ['ETHUSDT', 'SOLUSDT', 'BTCUSDT', 'DOGEUSDT', 'DASHUSDT', 'LTCUSDT'];
function importTokenImage(token) {
    token = token.replace('USDT','').toLowerCase();
    const imagePath = `/images/${token}.png`; 
    return imagePath;
  }
  
  
export default function TokenBlock() {
  const [tokensObj, setTokensObj] = useState({});

  useEffect(() => {
    const fetchPricesAndChanges = async () => {
      try {
        const pricesResponse = await fetch('https://api.binance.com/api/v3/ticker/price');
        const prices = await pricesResponse.json();
        
        const changesResponse = await fetch('https://api.binance.com/api/v3/ticker/24hr');
        const changes = await changesResponse.json();

        const newTokensObj = targetSymbols.reduce((acc, symbol) => {
          const priceData = prices.find(p => p.symbol === symbol);
          const changeData = changes.find(c => c.symbol === symbol);
          if (priceData && changeData) {
            const price = parseFloat(priceData.price).toFixed(2);
            const percentChange = parseFloat(changeData.priceChangePercent).toFixed(2) + '%';
            acc[symbol] = [price, percentChange];
          }
          return acc;
        }, {});

        setTokensObj(newTokensObj);
      } catch (error) {
        console.error('Error fetching data from Binance API', error);
      }
    };

    fetchPricesAndChanges();
    
    const intervalId = setInterval(fetchPricesAndChanges, 1000);
        return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='grid grid-cols-3 w-[680px] gap-2'>
        {targetSymbols.map((token, index) => (
            <div key={index} className='crypto-block'>
                <div>                       <img className='w-10 h-10' src={importTokenImage(token)} alt={token} />

</div>
                <div className='flex flex-col gap-1'>
                    <div>
                    <span className='font-bold text-2xl'>{token}</span>
                    </div>
                    <div className='flex flex-col gap-2 '>
                    <span>$ {tokensObj[token] ? tokensObj[token][0] : 'Loading...'}</span>
                    <span 
                        style={{
                            color: tokensObj[token] ? (parseFloat(tokensObj[token][1]) > 0 ? '#23A25D' : '#B91C1C') : 'black'
                        }}
                    >
                        {tokensObj[token] ? (parseFloat(tokensObj[token][1]) > 0 ? `+${tokensObj[token][1]}` : tokensObj[token][1]) : ''}
                    </span>
                </div>  
     
                </div>
            </div>
        ))}
    </div>
  );
}
