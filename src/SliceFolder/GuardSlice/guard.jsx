// features/Guard/GuardSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGuards, updateGuard as updateGuardAPI,  } from '../../Services/ApiService/GuardApi';

export const fetchGuardsAsync = createAsyncThunk(
  'Guards/fetch',
  async ({id}) => {
    const response = await fetchGuards({id});
    return response;
  }
);

export const updateGuardAsync = createAsyncThunk(
  'Guards/update',
  async ({ id, GuardData}) => {
    const response = await updateGuardAPI(id,GuardData);
    return response.data;
  }
);

const GuardSlice = createSlice({
  name: 'Guards',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGuardsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGuardsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchGuardsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
        
  },
});

export default GuardSlice.reducer;
