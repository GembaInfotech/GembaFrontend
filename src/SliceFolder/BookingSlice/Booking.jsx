import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBookings,upcomingBookingIn15min, updateBooking as updateBookingAPI, updateBookingP as updateBookingPAPI, deleteBooking as deleteBookingAPI } from '../../Services/ApiService/BookingApi';

export const fetchBookingsAsync = createAsyncThunk(
  'bookings/fetch',
  async ({parkingid, status, page, limit}) => {

    const response = await fetchBookings({parkingid, status, page, limit});
    console.log(response);
    return response;
  }
);

export const upcomingBookingIn15minAsync = createAsyncThunk(
  'upcoming/fetch',
  async ({parkingid}) => {
    console.log("testing....2", parkingid);
    const response = await upcomingBookingIn15min({parkingid});
    // console.log(response);
    return response;
  }
);

export const addBookingAsync = createAsyncThunk(
  'bookings/add',
  async (bookingData) => {
    const response = await createBooking(bookingData);
    return response.data;
  }
);


export const updateBookingPAsync = createAsyncThunk(
  'bookings/update',
  async ({id}) => {
    const response = await updateBookingPAPI(id);
    return response.data;
  }
);
export const updateBookingAsync = createAsyncThunk(
  'bookings/update',
  async ({ id, status, tp, parkedAt, guardid, spaceId}) => {
    const response = await updateBookingAPI(id, status, tp, parkedAt, guardid, spaceId);
    return response.data;
  }
);

export const deleteBookingAsync = createAsyncThunk(
  'bookings/delete',
  async (id) => {
    await deleteBookingAPI(id);
    return id;
  }
);

const BookingSlice = createSlice({
  name: 'bookings',
  initialState: {
    data: [],
    upcoming:[],
    status: 'idle',
    error: null,
  },
  reducers: {
    // Add additional reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookingsAsync.pending, (state) => {
        state.status = 'loading';
        state.data= [];
      })
      .addCase(fetchBookingsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchBookingsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(upcomingBookingIn15minAsync.fulfilled, (state, action) => {
        state.status = 'success';
        state.upcoming = action.payload;
      })
      .addCase(addBookingAsync.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
     
      .addCase(deleteBookingAsync.fulfilled, (state, action) => {
        state.data = state.data.filter(booking => booking.id !== action.payload);
      });
  },
});

export default BookingSlice.reducer;
