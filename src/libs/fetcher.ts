import aspida from '@aspida/axios';
import axios from 'axios';

import api from '../types/$api';

const axiosConfig = {timeout: 3000, baseURL: 'https://example.com/api'};
export const fetcher = api(aspida(axios, axiosConfig));
