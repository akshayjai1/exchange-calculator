import { noOfMilliSecondsInDay } from '../constants';
import { IrCurrencies } from '../response/IrRate';
import { fetcher } from '../utils';
import useSWRImmutable from 'swr/immutable';
import { useMemo } from 'react';
export const useCodes = () => {
  const { error: currencyError, data: currencies } =
    useSWRImmutable<IrCurrencies>('codes', fetcher, {
      refreshInterval: noOfMilliSecondsInDay,
    });
  const codes = useMemo(() => {
    return currencies?.supported_codes.reduce((acc: any, curr) => {
      acc[curr[0]] = curr[1];
      return acc;
    }, {});
  }, [currencies]);
  return { currencyError, codes };
};
