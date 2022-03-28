import MaterialTable from 'material-table';
import CurrencyFlag from 'react-currency-flags';
import { ILabelValue } from '../interface';
import { IrCurrencies, IrRate } from '../response/IrRate';
import { useCodes } from './useCodes';

interface IpRateTable {
  rates: IrRate['conversion_rates'];
  baseCurrency: ILabelValue<JSX.Element>;
  sendAmount: number;
}
const columns = [
  {
    title: 'Currency Name',
    field: 'currencyName',
  },
  { title: 'Country', field: 'flag' },
  { title: 'Destination Rate', field: 'rate' },
  { title: 'Destination Amount', field: 'sendAmount' },
  {
    title: 'Currency Code',
    field: 'destinationCurrency',
  },
];
const titleStyle = {
  display: 'flex',
  width: '500px',
  justifyContent: 'space-between',
};
export const RateTable = (props: IpRateTable) => {
  const { codes } = useCodes();
  const tableData = Object.keys(props.rates).map((currency) => ({
    destinationCurrency: currency,
    currencyName: codes?.[currency],
    rate: props.rates[currency],
    flag: <CurrencyFlag currency={currency} />,
    sendAmount: (props.sendAmount * props.rates[currency]).toFixed(3),
  }));
  return (
    <MaterialTable
      columns={columns}
      data={tableData}
      title={
        <div style={titleStyle}>
          <span style={{ padding: '5px' }}>Conversion Rates from</span>
          <strong>{props.baseCurrency?.label}</strong>
        </div>
      }
      options={{
        pageSize: 10,
      }}
    />
  );
};
