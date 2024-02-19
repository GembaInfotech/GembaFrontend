import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Gaurd = ({id}) => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    adhar: '',
    contactNumber: '',
    address: '',
    image: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    adhar: Yup.string().required('Aadhar number is required'),
    contactNumber: Yup.number().required('Contact number is required'),
    address: Yup.string().required('Address is required'),
    image: Yup.string().url('Invalid URL')
  });

  const onSubmit = async (values) => {
    console.log(values);
    try {
        // Make POST request to the API endpoint
        const response = await axios.post(
          `http://localhost:7001/v1/api/guard/createGuard/${id}`,
          values
        );
        
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    // You can perform actions such as submitting the form data to a backend API here
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <div>
          <label htmlFor="adhar">Aadhar Number</label>
          <Field type="text" id="adhar" name="adhar" />
          <ErrorMessage name="adhar" component="div" />
        </div>

        <div>
          <label htmlFor="contactNumber">Contact Number</label>
          <Field type="text" id="contactNumber" name="contactNumber" />
          <ErrorMessage name="contactNumber" component="div" />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <Field as="textarea" id="address" name="address" />
          <ErrorMessage name="address" component="div" />
        </div>

        <div>
          <label htmlFor="image">Image URL (Optional)</label>
          <Field type="text" id="image" name="image" />
          <ErrorMessage name="image" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default Gaurd;
