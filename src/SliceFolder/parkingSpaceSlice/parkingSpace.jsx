
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchParkingSpaceByCode } from './../../Services/ApiService/ParkingSpaceApi';

export const fetchParkingSpaceByCodeAsync = createAsyncThunk(
  'parkingSpace/fetchByCode',
  async (code, { rejectWithValue }) => {
    try {
      const response = await fetchParkingSpaceByCode(code);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const parkingSpaceSlice = createSlice({
  name: 'parkingSpace',
  initialState: {
    data: [],
    parking: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    // Add additional reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchParkingSpaceByCodeAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchParkingSpaceByCodeAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchParkingSpaceByCodeAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      });
  },
});

export default parkingSpaceSlice.reducer;
