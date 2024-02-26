// store.js
import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from '.././SliceFolder/BookingSlice/Booking'
import ParkingReducer from '../SliceFolder/ParkingSlice/Parking'
export default configureStore({
  reducer: {
    booking: bookingReducer,
    Parking: ParkingReducer
  },
});