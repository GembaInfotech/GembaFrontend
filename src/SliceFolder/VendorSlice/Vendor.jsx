import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { vendorData, vendorUpdate} from '../../Services/ApiService/VendorApi';

export const vendorDataAsync = createAsyncThunk(
  'vendor/vendorData',
  async () => {
    const response = await vendorData();
    return response.data.vendor;
  }
);


export const vendorUpdateAsync = createAsyncThunk(
    'vendor/update',
async ({data}) => {
      const response = await vendorUpdate({data});
      return response.data;
    }
  );

const vendorSlice = createSlice({
  name: 'vendorData',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(vendorDataAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(vendorDataAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(vendorDataAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export default vendorSlice.reducer;
