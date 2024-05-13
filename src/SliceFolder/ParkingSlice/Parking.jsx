// features/Parking/ParkingSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchParkings, createParking, guardfetchParkings,  updateParking as updateParkingAPI, deleteParking as deleteParkingAPI } from '../../Services/ApiService/ParkingApi';

export const fetchParkingsAsync = createAsyncThunk(
  'Parkings/fetch',
  async () => {
    const response = await fetchParkings();
    console.log(response);
    return response;
  }
);
export const guardfetchParkingsAsync = createAsyncThunk(
  'Parkings/fetch',
  async ({id}) => {
    const response = await guardfetchParkings({id});
    console.log(response);
    return response;
  }
);

export const addParkingAsync = createAsyncThunk(
  'Parkings/add',
  async ({ values }) => {
    const ParkingData = values;
    const response = await createParking({ ParkingData });
    return response.data;
  }
);

export const updateParkingAsync = createAsyncThunk(
  'Parkings/update',
  async ({ id, updatedData }) => {
    const response = await updateParkingAPI({ id, updatedData });
    return response;
  }
);

export const deleteParkingAsync = createAsyncThunk(
  'Parkings/delete',
  async (id) => {
    await deleteParkingAPI(id);
    return id;
  }
);

const ParkingSlice = createSlice({
  name: 'Parkings',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    // Add additional reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchParkingsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchParkingsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchParkingsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addParkingAsync.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateParkingAsync.fulfilled, (state, action) => {

      })
      .addCase(deleteParkingAsync.fulfilled, (state, action) => {
        state.data = state.data.filter(Parking => Parking.id !== action.payload);
      });
  },
});


export default ParkingSlice.reducer;
export const parkingById = (state, parkingid) => {
  console.log(state.Parking.data);
  if (state.Parking && state.Parking.data ) {
    return state.Parking.data.find(data => data._id === parkingid);
  }
  return null; // Return null if the parking data is not found
};
export const parkings = state => state.Parking;

