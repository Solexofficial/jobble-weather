import httpService from './http.service';

const weatherApiEndPoint = '/weather';

const apiKey = '92c5e50e06d29a7db7f3925cfb71bd7a';

const weatherService = {
  get: async query => {
    const { data } = await httpService.get(weatherApiEndPoint, {
      params: {
        q: query,
        units: 'metric',
        APPID: apiKey,
      },
    });

    return data;
  },
};

export default weatherService;
