import React, {useEffect, useState} from 'react';
import parking1 from '../assets/parking5.webp'; // Import your parking images
 // Import your parking images
 import parking2 from '../assets/parking5.webp';
 import parking3 from '../assets/parking5.webp';
 import parking4 from '../assets/parking5.webp';
import { Link } from 'react-router-dom';

const Gaurds = () => {


  const viewParking=()=>{
    window.location.href="/gaurdid"
  }
  // Sample parking data

  const [guardData, setGuard] = useState([]);

  useEffect(() => {
    const fetchGuardDetails = () => {
      fetch('http://localhost:7001/v1/api/guard/getguards')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
        console.log(data.data);
        setGuard(data.data)
          // console.log(data); // Log the fetched data
        })
        .catch(error => {
          console.error('Error fetching guard details:', error);
        });
    };

    fetchGuardDetails();
  }, []); // 



  // const guardData = [
  //   {
  //     "id": 1,
  //     "name": "John Doe",
  //     "loginId": "john_doe123",
  //     "mobile": "123-456-7890",
  //     "email": "john.doe@example.com",
  //     "associateParking": "ABC Parking"
  //   },
  //   {
  //     "id": 2,
  //     "name": "Jane Smith",
  //     "loginId": "jane_smith456",
  //     "mobile": "987-654-3210",
  //     "email": "jane.smith@example.com",
  //     "associateParking": "XYZ Parking"
  //   },
  //   {
  //     "id": 3,
  //     "name": "Michael Johnson",
  //     "loginId": "michael_johnson789",
  //     "mobile": "111-222-3333",
  //     "email": "michael.johnson@example.com",
  //     "associateParking": "123 Parking"
  //   },
  //   {
  //     "id": 4,
  //     "name": "Emily Brown",
  //     "loginId": "emily_brown234",
  //     "mobile": "444-555-6666",
  //     "email": "emily.brown@example.com",
  //     "associateParking": "456 Parking"
  //   }
  // ];
  

  return (
    <div className="container mx-auto px-20 py-6 bg-[#f8f9fa] min-h-screen">
      <h1 className="text-xl text-gray-800 font-light mb-6">results for parkings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 ">
        {guardData.map(parking => (
          <div key={parking.id} className=" shadow-lg bg-[#deecff] cursor-pointer rounded-md hover:scale-105 duration-300 ease-in-out overflow-hidden"
          >
            <div className='bg-white py-4'>
            <img  alt={parking.name} className="w-2/3  rounded-[400px] mx-auto h-40  object-cover object-center" />

            </div>
          <Link to={`/gaurd/${parking._id}`}>
          <div className="py-3 px-2 ">
              <h2 className="text-xl font-semibold mb-1">{parking.name}</h2>
              <p className="text-gray-600 text-sm mb-1"><span className="font-bold">Login Id:</span> {parking.loginId}</p>
              <p className="text-gray-600 text-sm mb-1"><span className="font-bold">Contact No.:</span> {parking.mobile}</p>
              <p className="text-gray-600 text-sm mb-1"><span className="font-bold">Associate Parking:</span> {parking.associateParking}</p>
            </div></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gaurds;
