import { useState, useEffect } from 'react';

const Profile = () => {
  const [parking, setParking] = useState({});
  const storedUserData = JSON.parse(localStorage.getItem('gaurdData'));

  useEffect(() => {
    if (!storedUserData) {
      window.location.href = "/login/auth/vendor";
    } else {
      setParking(storedUserData);
    }
  }, []);

  return (
    <div className="  p-2  ">
      <h1 className="font-light text-xl mb-2">Guard Details</h1>
      <div className='flex justify-between bg-gray-100 h-[80%] '>
        <div className='px-2 py-2'>
          <p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">Name:</span> {parking.name}</p>
          <p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">Phone:</span> {parking.contactNumber}</p>
          <p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">Email:</span> {parking.email}</p>
          <p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">Address:</span> {parking.address}</p>
        </div>
      </div>

    </div>
  );
};
export default Profile;
