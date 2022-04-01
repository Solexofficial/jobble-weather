import httpService from './http.service';

const weatherApiEndPoint = '/weather';

const weatherService = {
  get: async (query: string) => {
    const { data } = await httpService.get(weatherApiEndPoint, {
      params: {
        q: query,
        units: 'metric',
        APPID: process.env.REACT_APP_API_KEY,
      },
    });

    return data;
  },
};

export default weatherService;
