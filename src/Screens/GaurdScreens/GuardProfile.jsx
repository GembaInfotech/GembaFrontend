import { useState, useEffect } from 'react';
import { MdEdit, MdOutlineAddPhotoAlternate } from "react-icons/md";
import { RiDeleteBin6Line } from 'react-icons/ri';
// import '../GaurdScreens/Profile.css';

const Profile = () => {
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
  }, [storedUserData]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
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
    <div className="container bg-gray-100">
      {isEditing ? (
        <div className="flex justify-center">
        <div className="edit-form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            value={editedParking.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="adhar">
            Adhar No.
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="adhar"
            type="text"
            placeholder="Adhar No."
            value={editedParking.adhar}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
            Contact Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="contactNumber"
            type="text"
            placeholder="Contact Number"
            value={editedParking.contactNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={editedParking.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            placeholder="Address"
            value={editedParking.address}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      </div>
      </div>
      
      ) : (

<div className="container mx-auto py-32 w-2/3 ">
  <div className="profile-view bg-white shadow-md rounded-lg overflow-hidden ">
    <div className="flex justify-between items-center px-8 py-6 ">
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
      <div className="w-1/2 px-8">
        <h1 className="text-3xl font-bold mb-2">{parking.name}</h1>
        <h1 className="text-xl font-normal mb-8">{parking.loginId}</h1>
      </div>
      <button onClick={handleEdit} className="text-2xl font-normal text-gray-600">
        <MdEdit />
      </button>
    </div>
    <div className="px-8 py-4">
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
