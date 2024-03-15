import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addParkingAsync } from '../../../SliceFolder/ParkingSlice/Parking';

const initialValues = {
  pn: '',
  pa: '',
  city: '',
  st: '',
  country: '',
  pc: '',
  gst: '',
  ln: '',
  sc: '',
  price: '',
  ep: '',
  mt: '',
  met: '',
  sub: false,
  subc: '',
  subamt: '',
  lm: '',
  cc: '',
   latitude:'', 
   longitude :'',
   currentstatus:'',
   description: '',
   

};

const validationSchema = Yup.object().shape({
  pn: Yup.string().required('Parking name is required'),
  pa: Yup.string().required('Parking address is required'),
  city: Yup.string().required('City is required'),
  st: Yup.string(),
  country: Yup.string().required('Country is required'),
  pc: Yup.number().required('Postal code is required'),
  gst: Yup.string(),
  ln: Yup.string(),
  sc: Yup.string(),
  price: Yup.number().required('Price is required'),
  ep: Yup.number().required('Estimated parking slots is required'),
  mt: Yup.number().required('Max parking time is required'),
  met: Yup.number().required('Max extend time is required'),
  sub: Yup.boolean(),
  subc: Yup.string(),
  subamt: Yup.number(),
  lm: Yup.string(),
  latitude: Yup.number(),
  longitude: Yup.number(),

 
});
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



const renderInputFields = (values) => {
  return Object.keys(values).map((key) => {
    return (
      <div key={key} >

        <CustomInput label={key} name={key} />
      </div>
    );
  });
};

const ParkingForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    // Handle form submission
    
  const { longitude, latitude } = values;
  
  // Convert latitude and longitude strings to numbers
  const lng = parseFloat(longitude);
  const lat = parseFloat(latitude);
  
  // Create lc object
  const lc = {
    type: "Point",
    cord: [lat, lng]
  };
  
  // Update values with lc field
  values.lc = lc;
  
  console.log(values);
   dispatch(addParkingAsync({values}))
  
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
            <div  className="grid grid-cols-4 md:grid-cols-4 gap-3 p-2 m-1">  {renderInputFields(values)}</div>
        
          <button type="submit" >   <h1 className='bg-gray-800 px-4 py-1 mx-1 rounded-md w-fit text-white font-normal hover:bg-black  text-sm'>Submit</h1>
</button>
        </Form>
      )}
    </Formik>
  );
};

export default ParkingForm;
