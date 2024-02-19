import React , {useEffect, useState} from 'react';
import { json } from 'react-router';

const Help = () => {
const [data, setData]= useState([]);
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2RjMjI3OGQyYTQ5ZjM2MDEyYmY5OCIsImlhdCI6MTcwNzk5MTgxOCwiZXhwIjoxNzA4MjUxMDE4fQ.bj9gtFeoyy3PaEZe6X-RL-2J4ELtVSi7QLW4m8bqQRY"

 
  useEffect(() => {
    const fetchData = async () => {
    
      try {
        const response = await fetch(`http://localhost:7001/v1/api/vendor/getparking/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData)
      } catch (error) {
        console.error('Error fetching data:', error);
      } 
    };

    fetchData();
  },[]);


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Help</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <h2 className="text-xl font-bold mb-4">FAQs</h2>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">How do I create an account?</h3>
          <p className="text-gray-600">To create an account, click on the "Sign Up" button on the top right corner of the page and follow the instructions.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">How do I reset my password?</h3>
          <p className="text-gray-600">To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions sent to your email.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">How can I contact support?</h3>
          <p className="text-gray-600">You can contact support by emailing support@example.com or by filling out the contact form on our website.</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
