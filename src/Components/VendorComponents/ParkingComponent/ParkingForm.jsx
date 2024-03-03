import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { addParkingAsync } from '../../../SliceFolder/ParkingSlice/Parking';

import * as Yup from 'yup';

const ParkingForm = () => {
  const dispatch= useDispatch();
  const initialValues = {
    pn: '',
    pa: '',
    city: '',
    st: '',
    country: '',
    pc: '',
    ln: '',
    sc: '',
    price: '',
    ep: '',
    mt: '',
    met: '',
    sub: false,
    lc:[],
    lm: '',
    cc: '',

  };
  const headers = {
    pn: 'Parking Name',
    pa: 'Location',
    city: 'City',
    st: 'State',
    country: 'Country',
    pc: 'Pincode',
    ln: 'Licence No.',
    sc: 'Subscription code',
    price: 'Price',
    ep: 'Exceed Price',
    mt: 'Minimum Time',
    met: 'Minimum Exceed Time',
    sub: "Subscription",
    lm: 'LandMark',
    cc: 'Capacity',
    lc:'Cordinates'
    

  };


  const validationSchema = Yup.object().shape({
    pn: Yup.string().required('Parking name is required'),
    pa: Yup.string().required('Parking area is required'),
    city: Yup.string().required('City is required'),
    st: Yup.string().required('State is required'),
    country: Yup.string().required('Country is required'),
    pc: Yup.number().required('Pincode is required'),
    ln: Yup.string().required('License number is required'),
    sc: Yup.string().required('State code is required'),
    price: Yup.number().required('Price is required'),
    ep: Yup.number().required('Exceed price is required'),
    mt: Yup.number().required('Minimum time is required'),
    met: Yup.number().required('Minimum exceed time is required'),
    lm: Yup.string().required('Landmark is required'),
    cc: Yup.number().required('Capacity is required'),

  });

  const handleSubmit = (ParkingData) => {
    console.log(ParkingData);
    const vendorId="65e167cf98e123ee1649d73c";
    dispatch(addParkingAsync({ParkingData, vendorId}))

  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
         <Form className="grid gap-1  md:grid-cols-4 p-4">
         {Object.entries(initialValues).map(([key, value]) => (
           <div key={key} className="mb-2">
             <label htmlFor={key} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
               {headers[key]}
             </label>
             <Field
               name={key}
               type={key === 'ot' || key === 'ct' ? 'time' : 'text'}
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder={key === 'ot' || key === 'ct' ? 'HH:MM' : ''}
               required
             />
             <ErrorMessage name={key} component="div" className="text-red-600 mt-1" />
           </div>
         ))}
         <button
           type="submit"
         >
           Submit
         </button>
       </Form>
    
        )}
      </Formik>
    </div>
  );
};

export default ParkingForm;
