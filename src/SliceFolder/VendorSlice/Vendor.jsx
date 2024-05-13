import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { vendorData, vendorUpdate, logoutVendor } from '../../Services/ApiService/VendorApi';
import Login from '../../Screens/Login/Login';

export const vendorDataAsync = createAsyncThunk(
  'vendor/vendorData',
  async () => {
    console.log("testing.....6");
    const response = await vendorData();
    console.log(response);
    return response.data;
  }
);

export const vendorUpdateAsync = createAsyncThunk(
  'vendor/update',
  async ({ data }) => {
    const response = await vendorUpdate({ data });
    console.log(response);
    return response.data;
  }
);

export const vendorLogoutAsync = createAsyncThunk(
  'vendor/logout',
  async () => {
    const response = await logoutVendor();
    console.log(response);
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
