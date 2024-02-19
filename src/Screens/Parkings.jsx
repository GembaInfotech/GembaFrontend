import React, {useEffect, useState} from 'react';
import parking1 from '../assets/parking5.webp'; // Import your parking images
 // Import your parking images
 import { Link } from 'react-router-dom';
 import parking2 from '../assets/parking5.webp';
 import parking3 from '../assets/parking5.webp';
 import parking4 from '../assets/parking5.webp';

const Parkings = () => {

   const [parkingData , setparkings]= useState([]);
  useEffect(() => {
    const fetchGuardDetails = () => {
      fetch('http://localhost:7001/v1/api/parking/getparkings')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
        console.log(data.data);
        setparkings(data.data)
          // console.log(data); // Log the fetched data
        })
        .catch(error => {
          console.error('Error fetching guard details:', error);
        });
    };

    fetchGuardDetails();
  }, []); // 


  const viewParking=()=>{

    
  }
  // Sample parking data
  // const parkingData = [
  //   {
  //     id: 1,
  //     photo: parking1,
  //     name: "ABC Parking",
  //     area: "Downtown",
  //     dateOfCreation: "2023-01-15",
  //     price: "$10 per hour",
  //     guardName: "John Doe",
  //     landmark: "Near City Hall",
  //   },
  //   {
  //     id: 2,
  //     photo: parking2,
  //     name: "XYZ Parking",
  //     area: "Suburb",
  //     dateOfCreation: "2023-02-20",
  //     price: "$8 per hour",
  //     guardName: "Jane Smith",
  //     landmark: "Next to Shopping Mall",
  //   },
  //   {
  //     id: 3,
  //     photo: parking3,
  //     name: "123 Parking",
  //     area: "Industrial Area",
  //     dateOfCreation: "2023-03-10",
  //     price: "$12 per hour",
  //     guardName: "Michael Johnson",
  //     landmark: "Opposite to Gas Station",
  //   },
  //   {
  //     id: 4,
  //     photo: parking4,
  //     name: "456 Parking",
  //     area: "Residential Area",
  //     dateOfCreation: "2023-04-05",
  //     price: "$15 per hour",
  //     guardName: "Emily Brown",
  //     landmark: "Near Playground",
  //   },
  //   {
  //     id: 5,
  //     photo: parking1,
  //     name: "ABC Parking",
  //     area: "Downtown",
  //     dateOfCreation: "2023-01-15",
  //     price: "$10 per hour",
  //     guardName: "John Doe",
  //     landmark: "Near City Hall",
  //   },
  //   {
  //     id: 6,
  //     photo: parking1,
  //     name: "ABC Parking",
  //     area: "Downtown",
  //     dateOfCreation: "2023-01-15",
  //     price: "$10 per hour",
  //     guardName: "John Doe",
  //     landmark: "Near City Hall",
  //   },
  //   {
  //     id: 7,
  //     photo: parking1,
  //     name: "ABC Parking",
  //     area: "Downtown",
  //     dateOfCreation: "2023-01-15",
  //     price: "$10 per hour",
  //     guardName: "John Doe",
  //     landmark: "Near City Hall",
  //   },
  // ];

  return (
    <div className="container mx-auto px-20 py-6 bg-[#ffffff]">
      <h1 className="text-xl text-gray-800 font-light mb-6">results for parkings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {parkingData.map(parking => (
          <div key={parking.id} className="bg-white shadow-lg cursor-pointer rounded-md hover:scale-105 duration-300 ease-in-out overflow-hidden"
           
          >
            <div className='bg-[#f5f7fc] py-2'>
            <img src={parking2} alt={parking.name} className="w-2/3 rounded-[40px] mx-auto h-40  object-cover object-center" />

            </div>
          <Link  to={`/parking/${parking._id}`}>
          <div className="py-3 px-2">
              <h2 className="text-xl font-semibold mb-1">{parking.parkingName}</h2>
              <h2>{parking.parkingName}</h2>
          <p className="text-sm font-semibold mb-1" >Parking Area: {parking.parkingArea}</p>
          <p className="text-sm font-semibold mb-1" >City: {parking.city}</p>
          <p className="text-sm font-semibold mb-1" >State: {parking.state}</p>
          <p className="text-sm font-semibold mb-1" >Country: {parking.country}</p>
          <p className="text-sm font-semibold mb-1" >Pincode: {parking.pincode}</p>
          <p className="text-sm font-semibold mb-1" >Landmark: {parking.landmark}</p>

            </div>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parkings;
