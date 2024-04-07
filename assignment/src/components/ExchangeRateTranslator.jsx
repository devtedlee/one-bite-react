import { useState } from 'react';
import CurrencyInput from './CurrencyInput';

function ExchangeRateTranslator() {
    const [amounts, setAmounts] = useState({
        krw: 0,
        usd: 0,
    });

    const EXCHANGE_RATE = 1300;
    const handleOnChangeCurrency = (currency, amount) => {
        if (currency === 'krw') {
            setAmounts({
                krw: amount,
                usd: amount / EXCHANGE_RATE
            });
        } else {
            setAmounts({
                krw: amount * EXCHANGE_RATE,
                usd: amount
            })
        }
    }
    return (
    <div>
        <h1>환율 변환기 (KRW-USD)</h1>
        <CurrencyInput currency={'krw'} amount={amounts.krw} onChange={handleOnChangeCurrency} />
        <CurrencyInput currency={'usd'} amount={amounts.usd} onChange={handleOnChangeCurrency} />
    </div>
    );
}

export default ExchangeRateTranslator;