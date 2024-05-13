import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addParkingAsync } from '../../../SliceFolder/ParkingSlice/Parking';
import { Descriptions } from 'antd';

const initialValues = {
  name: '',
  address_line1: '',
  address_line2:'',
  city: '',
  state: '',
  country: '',
  pincode: '',
  gst: '',
  registeration_no: '',
  price: '',
  exceed_price: '',
  mt: '',
  met: '',
  sub: false,
  subc: '',
  subamt: '',
  landmark: '',
  capacity: '',
  latitude: '',
  longitude: '',
  status: '',
  description: '',
};



const fieldLabels = {
  name: 'Parking Name',
  address_line1: 'Address Line 1',
  address_line2:'Address Line 2',  
  city: 'City',
  state: 'State',
  country: 'Country',
  pincode: 'PinCode',
  gst: 'GST',
  registeration_no: 'registeration No.',
  price: 'Booking price',
  exceed_price: 'Exceed Price',
  mt: 'Minimum Time',
  met: 'Minimum Exceed Price',
  sub: 'Subscription',
  subc: 'Subscription Code',
  subamt: 'Subscription Amount',
  landmark: 'LandMark',
  capacity: 'Capacity',
  latitude: 'Latitude',
  longitude: 'Longitude',
  status: 'Current Status',
  description: 'Description',
};

const CustomInput = ({ name, label }) => {
  return (
    <div className="mb-2">
      <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-1">{label}</label>
      <Field 
        type="text" 
        id={name} 
        name={name} 
        className="appearance-none border border-gray-400 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" 
      />
      <ErrorMessage name={name} component="div" className="text-red-500 text-xs mt-1" />
    </div>
  );
};

const ParkingForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    const { longitude, latitude } = values;
    const lng = parseFloat(longitude);
    const lat = parseFloat(latitude);
    const location = {
      type: "Point",
      coordinates: [lat, lng]
    };
    values.location = location;
    console.log(values)
    dispatch(addParkingAsync({values}))
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <div className="grid grid-cols-4 md:grid-cols-4 gap-3 p-2 m-1">
            {Object.keys(values).map((key) => (
              <div key={key}>
                <CustomInput label={fieldLabels[key]} name={key} />
              </div>
            ))}
          </div>
          <button type="submit">
            <h1 className='bg-gray-800 px-4 py-1 mx-1 rounded-md w-fit text-white font-normal hover:bg-black  text-sm'>Submit</h1>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ParkingForm;
