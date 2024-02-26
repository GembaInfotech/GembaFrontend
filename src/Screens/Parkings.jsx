import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import parking2 from '../assets/parking5.webp';
import ParkingForm from '../Components/ParkingForm';
import empty  from '.././assets/norecord.avif'
import Spinner from '../Components/Animations/Spinner';
const Parkings = () => {
  const storedUserData = JSON.parse(localStorage.getItem('userData'));
const id = storedUserData?._id
  const [parkingData, setparkings] = useState([]);
  const [loading, setloading]=useState(false);
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    const fetchGuardDetails = () => {
      // setloading(true);
      fetch(`http://localhost:7001/v1/api/parking/getparkings/${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setloading(false);

          console.log(data.parkings.parkings);
          setparkings(data.parkings.parkings)
        })
        .catch(error => {
          console.error('Error fetching guard details:', error);
        });
    };

    fetchGuardDetails();
  }, []); 

  const add = () => {
    console.log("clicled")
    setIsEditing(true);
  }
  const handleClose = () => {
    setIsEditing(false);
  }

  return (
  loading ? <Spinner/> :      ( parkingData.length!=0) ?

      isEditing ? <div>
      <ParkingForm handleClose={handleClose} />
      <button onClick={() => setIsEditing(false)}>close</button>
    </div>
    : <div className="container mx-auto px-20 py-6 bg-[#ffffff]">
          <div className='flex flex-row items-center justify-between'>
            <h1 className="text-xl text-gray-800 font-light mb-6">results for parkings</h1>
            <button onClick={add} className="bg-blue-500 text-white py-1 px-2 rounded-sm mx-2 hover:bg-blue-600 focus:outline-none" >Add</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {parkingData.map(parking => (
              <div key={parking.id} className="bg-white shadow-lg cursor-pointer rounded-md hover:scale-105 duration-300 ease-in-out overflow-hidden"

              >
                <div className='bg-[#f5f7fc] py-2'>
                  <img src={parking2} alt={parking.name} className="w-2/3 rounded-[40px] mx-auto h-40  object-cover object-center" />

                </div>
                <Link to={`/parking/${parking._id}`}>
                  <div className="py-3 px-2">
                    <h2 className="text-xl font-semibold mb-1">{parking.parkingName}</h2>
                    <p className="text-sm font-semibold mb-1" > Location: <span className="text-sm font-normal mb-1"> {parking.parkingArea}</span></p>
                    <p className="text-sm font-semibold mb-1" >City: <span className="text-sm font-normal mb-1">  {parking.city}</span></p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
    
:    isEditing ? <div>
<ParkingForm />
</div> :<div className='flex flex-col justify-center items-center'>
  <div className='flex flex-col items-center  justify-between'>
            <h1 className="text-xl text-gray-800 font-light mb-6">results for parkings</h1>
            <button onClick={()=>{add()}} className='bg-blue-600 p-1' ><h1 className='text-white'>Add Parking</h1></button>
          </div>          
          <img src={empty} alt="" />
  </div>

       
  );
};

export default Parkings;
