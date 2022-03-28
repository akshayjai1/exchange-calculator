export const exchangeBaseApi =
  'https://v6.exchangerate-api.com/v6/dc0c9309f91cbe13561a3ae9/';
export const getRateApi = (currency: string) => `${exchangeBaseApi}currency`;

export const noOfMilliSecondsInDay = 24 * 60 * 60 * 1000;
