// features/Parking/ParkingSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchParkings, createParking, updateParking as updateParkingAPI, deleteParking as deleteParkingAPI } from '../../Services/ApiService/ParkingApi';

export const fetchParkingsAsync = createAsyncThunk(
  'Parkings/fetch',
  async () => {
    const response = await fetchParkings();

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
       
        // const index = state.data.findIndex(Parking => Parking._id === action.payload._id);
        // if (index !== -1) {
        //     // Assuming 'status' is the property you want to update
        //     state.data[index].status = action.payload.status;
        // }
      })
      .addCase(deleteParkingAsync.fulfilled, (state, action) => {
        state.data = state.data.filter(Parking => Parking.id !== action.payload);
      });
  },
});



export default ParkingSlice.reducer;
export const parkingById = (state, id) => {
  if (state.Parking && state.Parking.data && state.Parking.data.parkings) {
    console.log(state.Parking.data.parkings.find(data => data._id === id));
    return state.Parking.data.parkings.find(data => data._id === id);
  }
  return null; // Return null if the parking data is not found
};
export  const parkings = state =>state.Parking.data;

