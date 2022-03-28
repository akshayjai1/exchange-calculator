import axios from 'axios';
import {exchangeBaseApi} from './constants';

export const exchangeApi = axios.create({
	baseURL: exchangeBaseApi
})