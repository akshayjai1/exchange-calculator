import { exchangeApi } from './axios';
export const fetcher = (url: string) => exchangeApi.get(url).then((res) => res.data);
