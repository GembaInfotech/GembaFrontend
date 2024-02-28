import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch hook
import { MdEdit, MdOutlineAddPhotoAlternate } from "react-icons/md";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { updateGuardAsync } from '../../../SliceFolder/GuardSlice/guard.jsx';
import GuardForm from './GuardForm.jsx';

const Profile = () => {
  const dispatch = useDispatch(); // Initialize useDispatch hook
  const [parking, setParking] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedParking, setEditedParking] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const storedUserData = JSON.parse(localStorage.getItem('gaurdData'));

  useEffect(() => {
    if (!storedUserData) {
      window.location.href = "/login/auth/vendor";
    } else {
      setParking(storedUserData);
      setEditedParking(storedUserData);
    }
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    console.log("Name:", editedParking.name);
    console.log("Adhar No.:", editedParking.adhar);
    console.log("Contact Number:", editedParking.contactNumber);
    console.log("Email:", editedParking.email);
    console.log("Address:", editedParking.address);
    dispatch(updateGuardAsync({id}));
    setParking(editedParking);
    setIsEditing(false);
    setEditedParking({});

    
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setEditedParking(prevParking => ({
      ...prevParking,
      [name]: value
    }));
  };

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleRemoveImage = () => {
    setImageFile(null);
  };

  return (
    
    <div className="container mx-auto  w-3/3  ">
      {isEditing ? (
       <div>
        <GuardForm id={storedUserData._id}  data={storedUserData} />
        </div>
      
      ) : (

<div className="container mx-auto py-32 w-2/3 ">
  <div className="profile-view bg-white shadow-md rounded-lg overflow-hidden ">
    <div className="flex justify-between items-center px-8 py-6 bg-slate-300"> 
     
      <div className="w-1/4">
        {imageFile ? (
          <>
            <img
              src={URL.createObjectURL(imageFile)}
              className="object-cover rounded-full w-48 h-48"
              alt="Parking Image"
            />
            <div className="mx-2 bg-gray-50 p-4 rounded-full flex items-center mt-4">
              <button
                onClick={handleRemoveImage}
                className="text-xl font-normal text-gray-500 cursor-pointer"
              >
                <RiDeleteBin6Line />
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center object-cover rounded-full w-48 h-48 border border-gray-300">
            <label
              htmlFor="image-upload"
              className="text-2xl font-normal text-gray-600 cursor-pointer"
            >
              <MdOutlineAddPhotoAlternate />
            </label>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleUploadImage}
          className="hidden"
          id="image-upload"
        />
      </div>
      <div className="w-1/2 px-8 ">
        <h1 className="text-3xl font-bold mb-2">{parking.name}</h1>
        <h1 className="text-xl font-normal mb-8">{parking.loginId}</h1>
      </div>
      <button onClick={handleEdit} className="text-2xl font-normal text-gray-600">
        <MdEdit />
      </button>
    </div>
    <div className="px-8 py-4 bg-slate-300">
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm font-bold">Name:</p>
        <p className="text-sm">{parking.name}</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm font-bold">Aadhaar No.:</p>
        <p className="text-sm">{parking.adhar}</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm font-bold">Contact Number:</p>
        <p className="text-sm">{parking.contactNumber}</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm font-bold">Email:</p>
        <p className="text-sm">{parking.email}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm font-bold">Address:</p>
        <p className="text-sm">{parking.address}</p>
      </div>
    </div>
  </div>
</div>
      )}
    </div>
  );
};
export default Profile;
