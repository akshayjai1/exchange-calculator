import { CurrencyFlag } from 'react-currency-flags/dist/components';

export const CurrencyLabel = ({
  currency,
  currencyName,
}: {
  currency: string;
  currencyName: string;
}) => {
  return (
    <span className="currency-label">
      {currency} {currencyName} <CurrencyFlag currency={currency} />
    </span>
  );
};
