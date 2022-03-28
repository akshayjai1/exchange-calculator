import useSWRImmutable from 'swr/immutable';
import { noOfMilliSecondsInDay } from '../constants';
import { IrRate } from '../interface';
import { fetcher } from '../utils';
interface IpSimpleTable { }
/* this component is currently not being used */
export const SimpleTable = ({}: IpSimpleTable) => {
  const { error, data } = useSWRImmutable<IrRate>('latest/' + 'INR', fetcher, {
    refreshInterval: noOfMilliSecondsInDay,
  });
  if (error)
    return <div>There was an error fetching Rates. Please try again!</div>;
  return (
    <div>
      {Object.keys(data?.conversion_rates ?? {}).map((currency) => {
        return (
          <div className="conversion-rate-row">
            <div className="destination-currency">{currency}</div>
            <div className="conversion-factor">
              {data?.conversion_rates[currency]}
            </div>
          </div>
        );
      })}
    </div>
  );
};
