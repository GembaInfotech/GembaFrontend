// store.js
import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from '.././SliceFolder/BookingSlice/Booking'
import ParkingReducer from '../SliceFolder/ParkingSlice/Parking'
import GuardReducer from '../SliceFolder/GuardSlice/guard'
import VendorReducer from '../SliceFolder/VendorSlice/Vendor'
import ParkingSpaceReducer from '../SliceFolder/parkingSpaceSlice/parkingSpace'

export default configureStore({
  reducer: {
    booking: bookingReducer,
    Parking: ParkingReducer,
    ParkingSpace: ParkingSpaceReducer,
    Guard: GuardReducer,
    Vendor:VendorReducer

  },
});