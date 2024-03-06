// features/Parking/ParkingSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchParkings, createParking, updateParking as updateParkingAPI, deleteParking as deleteParkingAPI } from '../../Services/ApiService/ParkingApi';

export const fetchParkingsAsync = createAsyncThunk(
  'Parkings/fetch',
  async ({id}) => {
    const response = await fetchParkings({id});

    return response;
  }
);

export const addParkingAsync = createAsyncThunk(
  'Parkings/add',
  async ({ParkingData, vendorId}) => {
    const response = await createParking({ParkingData, vendorId});
    return response.data;
  }
);

export const updateParkingAsync = createAsyncThunk(
  'Parkings/update',
  async ({ id, updatedData }) => {
     const response = await updateParkingAPI({id, updatedData});
     console.log(response)
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
  if (state.Parking && state.Parking.data && state.Parking.data.parkings) {
    return state.Parking.data.parkings.find(data => data._id === parkingid);
  }
  return null; // Return null if the parking data is not found
};
export  const parkings = state =>state.Parking.data;

