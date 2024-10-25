// features/Parking/ParkingSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchParkings,fetchParkingSpaceByCode, createParking,upload,  fetchParkingById,  guardfetchParkings,fetchParkingByGuardId,  updateParking as updateParkingAPI, deleteParking as deleteParkingAPI } from '../../Services/ApiService/ParkingApi';

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
export const fetchParkingByIdAsync = createAsyncThunk(
  'Parkings/fetchId',
  async (id) => {
    console.log(id)
    const response = await fetchParkingById(id);
    console.log(response);
    return response;
  });

  export const fetchParkingSpaceByCodeAsync = createAsyncThunk(
    'Parkings/fetchId',
    async (code) => {
      console.log(code)
      const response = await fetchParkingSpaceByCode(code);
      console.log(response);
      return response;
    });

  

export const fetchParkingByGuardIdAsync = createAsyncThunk(
  'Parkings/fetch',
  async ({id}) => {
    console.log(id);
    const response = await fetchParkingByGuardId({id});
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
export const uploadFileAsync = createAsyncThunk(
  'Parkings/upload',
  async ( formData ) => {
    console.log(formData)
    const response = await upload(formData );
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
    message:null,
    parking: null,
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
      .addCase(uploadFileAsync.fulfilled, (state) => {
        state.message = 'Image Added Successfully';
      })
      .addCase(fetchParkingsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchParkingByIdAsync.fulfilled, (state, action) => {
        console.log(action.payload)
        
        state.parking = action.payload;
        console.log(state.parking)
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
  console.log(state.Parking.parking);
  if ( state.Parking.parking ) {
    return state.Parking.parking;
  }
  return null; // Return null if the parking data is not found
};
export const parkings = state => state.Parking;

