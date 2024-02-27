// store.js
import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from '.././SliceFolder/BookingSlice/Booking'
import ParkingReducer from '../SliceFolder/ParkingSlice/Parking'
import GuardReducer from '../SliceFolder/GuardSlice/guard'

export default configureStore({
  reducer: {
    booking: bookingReducer,
    Parking: ParkingReducer,
    Guard: GuardReducer
  },
});