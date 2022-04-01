import { createSlice } from '@reduxjs/toolkit';
import { AppThunk, RootState } from './store';

const initialState = {
  entities: [],
  isLoading: true as boolean,
  error: null as string | null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState: initialState,
  reducers: {
    weatherRequested: state => {
      state.isLoading = true;
    },
    weatherReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    weatherRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { actions, reducer: weatherReducer } = weatherSlice;

const { weatherRequested, weatherReceived, weatherRequestFailed } = actions;

export const loadWeather =
  (query: string): AppThunk =>
  async dispatch => {
    dispatch(weatherRequested());
    try {
      //
    } catch (error) {
      if (error instanceof Error) {
        dispatch(weatherRequestFailed(error.message));
      }
    }
  };

export const getWeather = () => (state: RootState) => state.weather.entities;
export const getWeatherLoadingStatus = () => (state: RootState) => state.weather.isLoading;

export default weatherReducer;
