import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image from "../../../assets/gaurd.jpg";
const Gaurds = () => {

  const [guardData, setGuard] = useState([]);
const [loading, setloading] =useState(false);
  useEffect(() => {
    const fetchGuardDetails = () => {
      setloading(true);
      fetch('https://backend-2-v1ta.onrender.com/v1/api/guard/getguards')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setloading(false);

          console.log(data.data);
          setGuard(data.data)
        })
        .catch(error => {
          console.error('Error fetching guard details:', error);
        });
    };

    fetchGuardDetails();
  }, []); 

  return (
   loading ? <Spinner /> :   <div className="container mx-auto px-20 py-6 bg-[#f8f9fa] min-h-screen">
   <h1 className="text-xl text-gray-800 font-light mb-6">results for Gaurds</h1>
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 ">
     {guardData.map(parking => (
       <div key={parking.id} className=" shadow-lg bg-[#deecff] cursor-pointer rounded-md hover:scale-105 duration-300 ease-in-out overflow-hidden"
       >
         <div className='bg-white py-4'>
           <img alt={parking.name} src={image} className="w-2/3  rounded-[400px] mx-auto h-40  object-cover object-center" />

         </div>
         <Link to={`/gaurd/${parking._id}`}>
           <div className="py-3 px-2 ">
             <h2 className="text-xl font-semibold mb-1">{parking.name}</h2>
             <p className="text-gray-600 text-sm mb-1"><span className="font-bold">Adhar:</span> {parking.adhar}</p>
             <p className="text-gray-600 text-sm mb-1"><span className="font-bold">Contact No.:</span> {parking.mob}</p>
             <p className="text-gray-600 text-sm mb-1"><span className="font-bold">Email:</span> {parking.mail}</p>
           </div></Link>
       </div>
     ))}
   </div>
 </div>
  );
};

export default Gaurds;
