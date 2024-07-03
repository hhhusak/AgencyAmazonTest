// conversionSlice.ts
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
    addPerformances: (state, action: PayloadAction<PerformanceData[]>) => {
      state.items.push(...action.payload);
    },
  },
});

export const { addPerformances } = conversionSlice.actions;

export default conversionSlice.reducer;
