export interface ILabelValue<T = string> {
  value: string;
  label: T;
}
export interface IrRate {
  base_code: string;
  conversion_rates: { [x: string]: number };
  documentation: 'https://www.exchangerate-api.com/docs';
  result: 'success' | 'failure';
  terms_of_use: 'https://www.exchangerate-api.com/terms';
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
}

export interface IrCurrencies {
  documentation: 'https://www.exchangerate-api.com/docs';
  result: 'success' | 'failure';
  supported_codes: [string, string][];
  terms_of_use: 'https://www.exchangerate-api.com/terms';
}
