import { useState } from 'react';
import useSWRImmutable from 'swr/immutable';
import { fetcher } from '../utils';
import { RateTable } from './Table';
import Select from 'react-select';
import { IrCurrencies, IrRate } from '../response/IrRate';
import { ILabelValue } from '../interface';
import { noOfMilliSecondsInDay } from '../constants';
import { CurrencyLabel } from './CurrencyLabel';

interface IPRates {}

export const ExchangeCenter = (props: IPRates) => {
  const [sendAmount, setSendAmount] = useState(100);
  const [baseCurrency, setBaseCurrency] = useState<ILabelValue<JSX.Element>>({
    value: 'INR',
    label: <CurrencyLabel currency="INR" currencyName="Indian Rupee" />,
  });
  const { error: rateError, data } = useSWRImmutable<IrRate>(
    'latest/' + baseCurrency.value,
    fetcher,
    {
      refreshInterval: noOfMilliSecondsInDay,
    },
  );
  const { error: currencyError, data: currencies } =
    useSWRImmutable<IrCurrencies>('codes', fetcher, {
      refreshInterval: noOfMilliSecondsInDay,
    });
  const handleChange = (selected: any) => {
    /* this extra function is created to avoid typescript error which can be resolved later */
    setBaseCurrency(selected);
  };
  const onSendAmountChange = (e: any) => {
    setSendAmount(e.target.value);
  };
  if (rateError || currencyError)
    return <div>There was an error fetching Rates. Please try again!</div>;
  return (
    <div>
      <div className="send-container">
        <div className="change-currency">
          <label>Choose Base Currency</label>
          <Select
            className="select-base-currency"
            options={currencies?.supported_codes.map((arr) => ({
              label: <CurrencyLabel currency={arr[0]} currencyName={arr[1]} />,
              value: arr[0],
            }))}
            onChange={handleChange}
            value={baseCurrency}
          />
        </div>
        <div className="send">
          <label>Enter Base Currency Amount ({baseCurrency.value})</label>
          <input
            type="number"
            value={sendAmount}
            onChange={onSendAmountChange}
          />
        </div>
      </div>
      <RateTable
        baseCurrency={baseCurrency}
        rates={data?.conversion_rates ?? {}}
        sendAmount={sendAmount}
      />
    </div>
  );
};
