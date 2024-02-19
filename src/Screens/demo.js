// import mongoose from 'mongoose';

// // Define guard schema
// const guardSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   loginId: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   contactNumber: String,
//   address: String,
//   associateParking: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Parking' // Reference to the Parking model
//   },
//   image: String
// });

// // Create Guard model
// const Guard = mongoose.model('Guard', guardSchema);

// export default Guard;



// import mongoose from 'mongoose';


// // Define booking schema
// const bookingSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User model
//     required: true
//   },
//   username: {
//     type: String,
//     required: true
//   },
//   parkingId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Parking', // Reference to the Parking model
//     required: true
//   },
//   parkingName: {
//     type: String,
//     required: true
//   },
//   timeIn: {
//     type: Date,
//     required: true
//   },
//   timeOut: {
//     type: Date,
//     required: true
//   },
//   exceedTime: Number,
//   bookingPrice: Number,
//   exceedPrice: Number,
//   bokingStatus: {
//     type: String,
//     enum: ['confirmed', 'cancelled'],
//   },
//   parkingStatus: {
//     type: String,
//     enum: ['InProgress', 'Completed'],
//   }
// });

// // Create Booking model
// const Booking = mongoose.model('Booking', bookingSchema);

// module.exports = Booking;




// import mongoose from 'mongoose';


// // Define vendor schema
// const vendorSchema = new mongoose.Schema({
//   firstName: {
//     type: String,
//     required: true
//   },
//   lastName: {
//     type: String,
//     required: true
//   },
//   contactNumber: String,
//   emailId: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   address: {
//     type:String,
//     required: true
//   },
//   associateParkings: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Parking' // Reference to the Parking model
//   }],
//   associateGuards: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Guard' // Reference to the Guard model
//   }],
//  image: String
// });

// // Create Vendor model
// const Vendor = mongoose.model('Vendor', vendorSchema);

// module.exports = Vendor;





// import mongoose from 'mongoose';

// // Define parking schema
// const parkingSchema = new mongoose.Schema({

//     parkingName: {
//         type: String,
//         required: true
//     },
//     parkingArea: {
//         type: String,
//         required: true
//     },
//     city: {
//         type: String,
//         required: true
//     },
//     state: String,
//     country: {
//         type: String,
//         required: true
//     },
//     pincode: {
//         type: Number,
//         required: true
//     },
//     landmark: String,
//     capacity: {
//         type: Number,
//         required: true
//     },
//     openingTime: {
//         type: Date,
//         required: true
//     },
//     closingTime: {
//         type: Date,
//         required: true
//     },
//     latitude: {
//         type: Number,
//         required: true
//     },
//     longitude: {
//         type: Number,
//         required: true
//     },
//     associateGuard: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Guard' // Reference to the Guard model if needed
//     },
//     associateAccount: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Account' // Reference to the Account model
//     },
//     image: [String]
// });

// // Create Parking model
// const Parking = mongoose.model('Parking', parkingSchema);

// export default Parking;

