import { useEffect, useRef } from 'react';
import { fetchGuardsAsync } from "../../../SliceFolder/GuardSlice/guard";
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlinePlus } from 'react-icons/ai'; // Import the plus icon
import axios from 'axios';
import appConfig from '../../../Config/app.config';

const Profile = () => {
  const dispatch = useDispatch();
  const guard = useSelector((state) => state.Guard);
  const storedUserData = JSON.parse(localStorage.getItem('gaurdData'));
  console.log("storedUserData", storedUserData);
  
  const guardId = storedUserData?.guard._id;
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!storedUserData) {
      window.location.href = "/login/auth/guard";
    } else {
      dispatch(fetchGuardsAsync({ id: guardId }));
    }
  }, [dispatch, guardId]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("profileImage", file);
  
      try {
        const response = await axios.post(
          `${appConfig.apiBaseUrl}v1/api/guard/upload-guard-profile`,
          formData,
          { 
            headers: { 
              'Content-Type': 'multipart/form-data', 
              'Authorization': `Bearer ${storedUserData.accessToken}` // Use Bearer format
            } 
          }
        );
        console.log('Image uploaded:', response.data);
        // Optionally refresh guard data here
        dispatch(fetchGuardsAsync({ id: guardId }));
      } catch (error) {
        console.error("Failed to upload image:", error);
      }
    }
  };
  

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="bg-slate-200 h-[100%] p-2">
      <h1 className="font-bold text-white text-2xl mb-2 text-center bg-gray-800 rounded-sm p-2"> Guard Details</h1>
      <div className='flex p-20 shadow-lg bg-gray-100'>
        <div className="relative mr-20 mb-4 md:mb-0">
          <img
            src={`${appConfig.apiBaseUrl}v1/api/guard/send-image/${guard.data.profileImage}`}
            alt="Profile"
            className="rounded-full h-64 w-64 object-cover shadow-lg"
          />
          <AiOutlinePlus
            className="absolute bottom-2 right-2 bg-white p-2 rounded-full text-2xl cursor-pointer hover:scale-110 transition-transform z-10 top-[16] bottom-11"
            onClick={handleIconClick}
          />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
        </div>
        
        <div className='px-2 py-2'>
          <p className='py-2 text-lg'><span className="py-2 text-lg font-bold">Name:</span> {guard?.data.name}</p>
          <p className='py-2 text-lg'><span className="py-2 text-lg font-bold">Phone:</span> {guard?.data.contact}</p>
          <p className='py-2 text-lg'><span className="py-2 text-lg font-bold">Email:</span> {guard?.data.email}</p>
          <p className='py-2 text-lg'><span className="py-2 text-lg font-bold">Address:</span> {guard?.data.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
