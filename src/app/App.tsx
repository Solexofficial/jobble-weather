import React, { useEffect } from 'react';
import weatherService from '../services/weather.service';

type Props = {};

const App = (props: Props) => {
  useEffect(() => {
    const getWeather = async (query: string) => {
      const data = await weatherService.get(query);
      console.log(data);
    };
    getWeather('Moscow');
  }, []);

  return (
    <>
      <div>App</div>
      <div>Test: </div>
    </>
  );
};

export default App;
