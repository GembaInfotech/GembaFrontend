import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addParkingAsync } from '../../../SliceFolder/ParkingSlice/Parking';
import { vendorDataAsync } from '../../../SliceFolder/VendorSlice/Vendor';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

const initialValues = {
  timings: {
    Monday: { open: "", close: "" },
    Tuesday: { open: "", close: "" },
    Wednesday: { open: "", close: "" },
    Thursday: { open: "", close: "" },
    Friday: { open: "", close: "" },
    Saturday: { open: "", close: "" },
    Sunday: { open: "", close: "" },
  },

  name: '',
  address_line1: '',
  address_line2: '',
  city: '',
  state: '',
  country: '',
  pincode: '',
  landmark: '',
  latitude: '',
  longitude: '',
  gst: '',
  registeration_no: '',
  price_for: '',
  priceF: '',
  priceT: '',
  exceed_price_for: '',
  exceed_priceF: '',
  exceed_priceT: '',
  sub: false,
  subc: '',
  subamt: '',
  twoWheelerCapacity: '',
  fourWheelerCapacity: '',
  totalCapacity: '',
  description: '',
  validity_FromDate: '',
  validity_ToDate: '',
  SGSTRate: '9%',
  SGST_for_four_wheeler: '',
  SGST_for_two_wheeler: '',
  exceed_SGST_for_four_wheeler: '',
  exceed_SGST_for_two_wheeler: '',

  CGSTRate: '9%',
  CGST_for_four_wheeler: '',
  CGST_for_two_wheeler: '',
  exceed_CGST_for_four_wheeler: '',
  exceed_CGST_for_two_wheeler: '',

  IGSTRate: '18%',
  IGST_for_four_wheeler: '',
  IGST_for_two_wheeler: '',
  exceed_IGST_for_four_wheeler: '',
  exceed_IGST_for_two_wheeler: '',

  priceT_with_GST: '',
  priceF_with_GST: '',

  eceed_priceT_with_GST: '',
  exceed_priceF_with_GST: ''
};

const facilitiesOptions = [
  { value: 'CCTV', label: 'CCTV' },
  { value: 'Charging Station', label: 'Charging Station' },
  { value: 'Waiting Areas', label: 'Waiting Areas' },
  { value: 'Floor Marking', label: 'Floor Marking' },
];

 
const TimeInput = ({ day, setFieldValue }) => (
  <div className="flex items-center gap-4 mb-4">
    <label className="w-24 font-bold">{day}</label>
    <Field
      name={`timings.${day}.open`}
      type="time"
      placeholder="Opening Time"
      className="w-1/3 px-2 py-1 border border-gray-400 rounded"
    />
    <Field
      name={`timings.${day}.close`}
      type="time"
      placeholder="Closing Time"
      className="w-1/3 px-2 py-1 border border-gray-400 rounded"
    />
    <ErrorMessage
      name={`timings.${day}.open`}
      component="div"
      className="text-xs text-red-500"
    />
    <ErrorMessage
      name={`timings.${day}.close`}
      component="div"
      className="text-xs text-red-500"
    />
  </div>
);


const statesOfIndia = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep", "Delhi", "Puducherry", "Ladakh", "Jammu and Kashmir"
];

const stateGstCodes = {
  "Andhra Pradesh": "37",
  "Arunachal Pradesh": "12",
  "Assam": "18",
  "Bihar": "10",
  "Chhattisgarh": "22",
  "Goa": "30",
  "Gujarat": "24",
  "Haryana": "06",
  "Himachal Pradesh": "02",
  "Jharkhand": "20",
  "Karnataka": "29",
  "Kerala": "32",
  "Madhya Pradesh": "23",
  "Maharashtra": "27",
  "Manipur": "14",
  "Meghalaya": "17",
  "Mizoram": "15",
  "Nagaland": "13",
  "Odisha": "21",
  "Punjab": "03",
  "Rajasthan": "08",
  "Sikkim": "11",
  "Tamil Nadu": "33",
  "Telangana": "36",
  "Tripura": "16",
  "Uttar Pradesh": "09",
  "Uttarakhand": "05",
  "West Bengal": "19",
  "Andaman and Nicobar Islands": "35",
  "Chandigarh": "04",
  "Dadra and Nagar Haveli and Daman and Diu": "26",
  "Lakshadweep": "31",
  "Delhi": "07",
  "Puducherry": "34",
  "Ladakh": "38",
  "Jammu and Kashmir": "01"
};

const fieldLabels = {
  name: 'Parking Name',
  address_line1: 'Address Line 1',
  address_line2: 'Address Line 2',
  city: 'City',
  state: 'State',
  country: 'Country',
  pincode: 'PinCode',
  landmark: 'Landmark',
  latitude: 'Latitude',
  longitude: 'Longitude',
  gst: 'GST',
  registeration_no: 'Registration No.',
  price_for: 'Price For (hours)',
  priceF: 'Price For FourWheeler (excluding GST)',
  priceT: 'Price For TwoWheeler (excluding GST)',
  exceed_price_for: 'Exceed Price For (minutes)',
  exceed_priceF: 'Exceed Price For FourWheeler (excluding GST)',
  exceed_priceT: 'Exceed Price For TwoWheeler (excluding GST)',
  sub: 'Subscription',
  subc: 'Subscription Code',
  subamt: 'Subscription Amount',
  twoWheelerCapacity: 'Two Wheeler Capacity',
  fourWheelerCapacity: 'Four Wheeler Capacity',
  totalCapacity: 'Total Capacity',
  description: 'Description',
  validity_FromDate: 'Validity From Date',
  validity_ToDate: 'Validity To Date',

  SGSTRate: 'SGST Rate',
  SGST_for_four_wheeler: 'SGST for four wheeler',
  SGST_for_two_wheeler: 'SGST for two wheeler',
  exceed_SGST_for_four_wheeler: 'Exceed SGST for four wheeler',
  exceed_SGST_for_two_wheeler: 'Exceed SGST for two wheeler',

  CGSTRate: 'CGST Rate',
  CGST_for_four_wheeler: 'CGST for four wheeler',
  CGST_for_two_wheeler: 'CGST for two wheeler',
  exceed_CGST_for_four_wheeler: 'Exceed CGST for four wheeler',
  exceed_CGST_for_two_wheeler: 'Exceed CGST for two wheeler',

  IGSTRate: 'IGST Rate',
  IGST_for_four_wheeler: 'IGST for four wheeler',
  IGST_for_two_wheeler: 'IGST for two wheeler',
  exceed_IGST_for_four_wheeler: 'Exceed IGST for four wheeler',
  exceed_IGST_for_two_wheeler: 'Exceed IGST for two wheeler',

  Total_price_four_wheeler_includingtax: 'Price: FourWheeler (with GST)',
  Total_price_two_wheeler_includingtax: 'Price: TwoWheeler (with GST)',
  Total_exceed_price_four_wheeler_includingtax: ' Exceed Price: 4Wheeler (with GST)',
  Total_exceed_price_two_wheeler_includingtax: ' Exceed Price: 2Wheeler (with GST)',

};

const defaultRate = '18%';

const CustomInput = ({ name, label, type = "text" }) => (
  <div className="mb-2">
    <label htmlFor={name} className="block mb-1 text-sm font-bold text-gray-700">{label}</label>
    <Field
      type={type}
      id={name}
      name={name}
      className="w-full px-2 py-1 leading-tight text-gray-700 border border-gray-400 rounded appearance-none focus:outline-none focus:border-blue-500"
    />
    <ErrorMessage name={name} component="div" className="mt-1 text-xs text-red-500" />
  </div>
);
const SelectInput = ({ name, label, options, onChange, value }) => (
  <div className="mb-2">
    <label htmlFor={name} className="block mb-1 text-sm font-bold text-gray-700">{label}</label>
    <Field
      as="select"
      id={name}
      name={name}
      className="w-full px-2 py-1 leading-tight text-gray-700 border border-gray-400 rounded appearance-none focus:outline-none focus:border-blue-500"
      onChange={onChange}
      value={value}
    >
      <option value="">Select...</option>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </Field>
    <ErrorMessage name={name} component="div" className="mt-1 text-xs text-red-500" />
  </div>
);

const GstRow = ({ labels, fieldNames, values, setFieldValue }) => (
  <div className="flex mb-4">
    {labels.map((label, index) => (
      <div key={index} className="flex-1 pr-2">
        <label className="block mb-1 text-sm font-bold text-gray-700">{label}</label>
        <Field
          name={fieldNames[index]}
          type="text"
          className="w-full px-2 py-1 leading-tight text-gray-700 border border-gray-400 rounded appearance-none focus:outline-none focus:border-blue-500"
          value={values[fieldNames[index]]}
          onChange={(e) => setFieldValue(fieldNames[index], e.target.value)}
        />
      </div>
    ))}
  </div>
);
const TotalPrice = ({ labels, fieldNames, values, setFieldValue }) => (
  <div className="flex mb-4 mt-9 font-bold text-lg">
    <h1 className='mt-5'>TOTAL</h1>
    {labels.map((label, index) => (
      <div key={index} className="pr-1 ml-3">
        <label className="block mb-1 text-sm font-bold text-gray-700">{label}</label>

        <Field
          name={fieldNames[index]}
          type="text"
          className="w-[14.4rem] px-2 py-1 leading-tight text-gray-700 border border-gray-400 rounded appearance-none focus:outline-none focus:border-blue-500"
          value={values[fieldNames[index]]}
          onChange={(e) => setFieldValue(fieldNames[index], e.target.value)}
        />
      </div>
    ))}
  </div>
);

const ParkingForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const vendor = useSelector((state) => state.Vendor);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (!token) window.location.href = "/login/auth/vendor";
    if (vendor.status === "idle") dispatch(vendorDataAsync());
  }, [dispatch]);

  const handleSubmit = async (values) => {
    const { longitude, latitude, price_for, exceed_price_for } = values;
    const lng = parseFloat(longitude);
    const lat = parseFloat(latitude);
    const location = {
      type: "Point",
      coordinates: [lat, lng]
    };
    values.location = location;
    values.price_for = parseInt(price_for);
    values.exceed_price_for = parseInt(exceed_price_for);
    console.log("parking values", values);

    try {
      await dispatch(addParkingAsync({ values }));
      toast.success('Your parking created successfully!');
      setTimeout(() => {
        navigate('/parkings');
      }, 5000);
    } catch (error) {
      toast.error('Failed to create parking. Please try again.');
    }
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => {
        const calculateGST = (price) => ({
          SGST: (price * 0.09).toFixed(2),
          CGST: (price * 0.09).toFixed(2),
          IGST: (price * 0.18).toFixed(2),
          TOTAL: (price + (price * 0.18)).toFixed(2),

        });
        const priceF = parseFloat(values.priceF || 0);
        const priceT = parseFloat(values.priceT || 0);
        const exceedPriceF = parseFloat(values.exceed_priceF || 0);
        const exceedPriceT = parseFloat(values.exceed_priceT || 0);

        const gstForFourWheeler = calculateGST(priceF);
        const gstForTwoWheeler = calculateGST(priceT);

        const exceedGstForFourWheeler = calculateGST(exceedPriceF);
        const exceedGstForTwoWheeler = calculateGST(exceedPriceT);
        return (
          <Form>
            <div className="p-4">
              <h2 className="mb-4 text-lg font-bold">Basic Info</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {['name', 'address_line1', 'address_line2', 'city', 'state', 'country', 'pincode', 'landmark', 'latitude', 'longitude', 'gst', 'registeration_no'].map(key => (
                  key === 'state' ? (
                    <SelectInput
                      key={key}
                      label={fieldLabels[key]}
                      name={key}
                      options={statesOfIndia}
                      value={values[key]}
                      onChange={(e) => {
                        const selectedState = e.target.value;
                        const vendorPAN = vendor.data.panNo || '';
                        const gstValue = `${stateGstCodes[selectedState]}${vendorPAN}`;
                        setFieldValue(key, selectedState);
                        setFieldValue('gst', gstValue);
                      }}
                    />
                  ) : (
                    <CustomInput key={key} label={fieldLabels[key]} name={key} value={values[key]} />
                  )
                ))}
              </div>

              <h2 className="mt-8 mb-4 text-lg font-bold">Commercial Info</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {['price_for', 'priceF', 'priceT', 'exceed_price_for', 'exceed_priceF', 'exceed_priceT', 'sub', 'subc', 'subamt', 'twoWheelerCapacity', 'fourWheelerCapacity', 'totalCapacity', 'description', 'validity_FromDate', 'validity_ToDate'].map(key => (
                  key === "price_for" ? (
                    <SelectInput
                      key={key}
                      label={fieldLabels[key]}
                      name={key}
                      options={Array.from({ length: 6 }, (_, i) => (i + 1).toString())}
                      value={values[key] || ''}
                      onChange={(e) => setFieldValue(key, e.target.value)}
                    />
                  ) : key === "exceed_price_for" ? (
                    <SelectInput
                      key={key}
                      label={fieldLabels[key]}
                      name={key}
                      options={Array.from({ length: 3 }, (_, i) => ((i + 1) * 10).toString())}
                      value={values[key] || ''}
                      onChange={(e) => setFieldValue(key, e.target.value)}
                    />
                  ) : key === "validity_FromDate" || key === "validity_ToDate" ? (
                    <CustomInput
                      key={key}
                      label={fieldLabels[key]}
                      name={key}
                      type="date"
                      value={values[key]}
                    />
                  ) : (
                    <CustomInput key={key} label={fieldLabels[key]} name={key} value={values[key]} />
                  )
                ))}
              </div>

              <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">Facilities</label>
            <Select
              isMulti
              name="facilities"
              options={facilitiesOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              value={values.facilities}
              onChange={(selectedOptions) => setFieldValue('facilities', selectedOptions)}
            />
          </div>

          <div className="mb-4">
  <h2 className="mb-4 text-lg font-bold">Set Timings</h2>
  {Object.keys(initialValues.timings).map((day) => (
    <TimeInput
      key={day}
      day={day}
      setFieldValue={setFieldValue}
    />
  ))}
</div>

              <h2 className="mt-8 mb-4 text-lg font-bold">GST Information</h2>
              <div className='mt-8 mb-4 font-bold'>GST Rate</div>
              <div className="flex flex-wrap mb-4">
                {['0.25%', '3%', '5%', '12%', '18%', '28%'].map((rate) => (
                  <label key={rate}
                    className={`mr-4 ${rate === defaultRate ? 'text-blue-900 font-bold' : 'text-gray-500'}`}>
                    <Field
                      type="radio"
                      name="gstRate"
                      value={rate}
                      checked={rate === defaultRate}
                      disabled
                      className="mr-1"
                    />
                    {rate}
                  </label>
                ))}
              </div>
              <div className="mb-4">
                {/* SGST Row */}
                <GstRow
                  labels={[
                    fieldLabels.SGSTRate,
                    fieldLabels.SGST_for_four_wheeler,
                    fieldLabels.SGST_for_two_wheeler,
                    fieldLabels.exceed_SGST_for_four_wheeler,
                    fieldLabels.exceed_SGST_for_two_wheeler
                  ]}
                  fieldNames={[
                    'SGSTRate',
                    'SGST_for_four_wheeler',
                    'SGST_for_two_wheeler',
                    'exceed_SGST_for_four_wheeler',
                    'exceed_SGST_for_two_wheeler'
                  ]}
                  values={{
                    SGSTRate: values.SGSTRate,
                    SGST_for_four_wheeler: gstForFourWheeler.SGST,
                    SGST_for_two_wheeler: gstForTwoWheeler.SGST,
                    exceed_SGST_for_four_wheeler: exceedGstForFourWheeler.SGST,
                    exceed_SGST_for_two_wheeler: exceedGstForTwoWheeler.SGST
                  }}
                  setFieldValue={setFieldValue}
                />

                {/* CGST Row */}
                <GstRow
                  labels={[
                    fieldLabels.CGSTRate,
                    fieldLabels.CGST_for_four_wheeler,
                    fieldLabels.CGST_for_two_wheeler,
                    fieldLabels.exceed_CGST_for_four_wheeler,
                    fieldLabels.exceed_CGST_for_two_wheeler
                  ]}
                  fieldNames={[
                    'CGSTRate',
                    'CGST_for_four_wheeler',
                    'CGST_for_two_wheeler',
                    'exceed_CGST_for_four_wheeler',
                    'exceed_CGST_for_two_wheeler'
                  ]}
                  values={{
                    CGSTRate: values.CGSTRate,
                    CGST_for_four_wheeler: gstForFourWheeler.CGST,
                    CGST_for_two_wheeler: gstForTwoWheeler.CGST,
                    exceed_CGST_for_four_wheeler: exceedGstForFourWheeler.CGST,
                    exceed_CGST_for_two_wheeler: exceedGstForTwoWheeler.CGST
                  }}
                  setFieldValue={setFieldValue}
                />
                <GstRow
                  labels={[
                    fieldLabels.IGSTRate,
                    fieldLabels.IGST_for_four_wheeler,
                    fieldLabels.IGST_for_two_wheeler,
                    fieldLabels.exceed_IGST_for_four_wheeler,
                    fieldLabels.exceed_IGST_for_two_wheeler
                  ]}
                  fieldNames={[
                    'IGSTRate',
                    'IGST_for_four_wheeler',
                    'IGST_for_two_wheeler',
                    'exceed_IGST_for_four_wheeler',
                    'exceed_IGST_for_two_wheeler'
                  ]}
                  values={{
                    IGSTRate: values.IGSTRate,
                    IGST_for_four_wheeler: gstForFourWheeler.IGST,
                    IGST_for_two_wheeler: gstForTwoWheeler.IGST,
                    exceed_IGST_for_four_wheeler: exceedGstForFourWheeler.IGST,
                    exceed_IGST_for_two_wheeler: exceedGstForTwoWheeler.IGST
                  }}
                  setFieldValue={setFieldValue}
                />
                <TotalPrice
                  labels={[
                    fieldLabels.Total_price_four_wheeler_includingtax,
                    fieldLabels.Total_price_two_wheeler_includingtax,
                    fieldLabels.Total_exceed_price_four_wheeler_includingtax,
                    fieldLabels.Total_exceed_price_two_wheeler_includingtax
                  ]}
                  fieldNames={[
                    'Total_price_four_wheeler_includingtax',
                    'Total_price_two_wheeler_includingtax',
                    'Total_exceed_price_four_wheeler_includingtax',
                    'Total_exceed_price_two_wheeler_includingtax'
                  ]}
                  values={{

                    Total_price_four_wheeler_includingtax: gstForFourWheeler.TOTAL,
                    Total_price_two_wheeler_includingtax: gstForTwoWheeler.TOTAL,
                    Total_exceed_price_four_wheeler_includingtax: exceedGstForFourWheeler.TOTAL,
                    Total_exceed_price_two_wheeler_includingtax: exceedGstForTwoWheeler.TOTAL,
                  }}
                  setFieldValue={setFieldValue}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="px-4 py-1 mb-6 text-lg font-normal text-white bg-gray-800 rounded-lg mx-7 w-fit hover:bg-black">
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ParkingForm;