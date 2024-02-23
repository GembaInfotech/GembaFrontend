// store.js
import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from '.././SliceFolder/BookingSlice/Booking'
export default configureStore({
  reducer: {
    booking: bookingReducer
  },
});