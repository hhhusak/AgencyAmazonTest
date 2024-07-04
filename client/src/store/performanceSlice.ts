import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PerformanceData } from '../types/types';

interface PerformanceState {
  items: PerformanceData[];
}

const initialState: PerformanceState = {
  items: [],
};

const conversionSlice = createSlice({
  name: 'conversion',
  initialState,
  reducers: {
    setPerformanceData(state, action: PayloadAction<PerformanceData[]>) {
      state.items = action.payload;
    },
  },
});

export const { setPerformanceData } = conversionSlice.actions;

export default conversionSlice.reducer;
