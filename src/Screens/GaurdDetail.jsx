import React, { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import image from ".././assets/gaurd.jpg";
import { useParams } from "react-router";
import Spinner from "../Components/Animations/Spinner";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const GaurdDetail = () => {
  const { id } = useParams();
  const [parking, setparkings] = useState({});
  const[loading, setloading] = useState(false);
  const [editedParking, setEditedParking] = useState(parking);
  useEffect(() => {
    const fetchGuardDetails = () => {
      setloading(true);
      fetch(`http://localhost:7001/v1/api/guard/${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          setloading(false);
          return response.json();
        })
        .then(data => {
         
          setparkings(data.data)
          setEditedParking(data.data)
        })
        .catch(error => {
          console.error('Error fetching guard details:', error);
        });
    };

    fetchGuardDetails();
  }, []);

  const excludedFields = ['_id', '__v', 'image'];
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:7001/v1/api/guard/${id}`,
        editedParking
      );

      console.log('Guard updated:', response.data);
      toast.success('Information Updated Successfully');

    } catch (error) {
      console.error('Error updating guard:', error);
    }
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedParking((prevParking) => ({
      ...prevParking,
      [name]: value,
    }));
  };

  return (
  loading ? <Spinner/> : <div className="container mx-auto  px-16 py-8">
  {isEditing ? (
    <div
      className=" bg-[#ffffff] shadow-xl border border-gray-300 rounded-sm w-full   duration-300 ease-in-out   overflow-hidden p-12"
      style={{ height: "80vh" }}
    >
      <form>
        <div className="mb-8 grid grid-cols-3 gap-6">
          {Object.keys(parking).map((key, index) => {
            if (key === "id") return null; // Skip rendering input field for id
            return (
              <div key={index} className="relative h-10 w-full">
                <input
                  type="text"
                  name={key}
                  value={editedParking[key]}
                  onChange={handleChange}
                  className="peer h-full w-full bg-slate-50 rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-800">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleSave}
            className="bg-blue-500 text-white py-1 px-2 rounded-sm mx-2 hover:bg-blue-600 focus:outline-none"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="bg-gray-300 text-gray-700 py-1 px-2 rounded-sm hover:bg-red-600 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </form>
      
    </div>
  ) : (
    <div className="">
      <div className="flex justify-between ">
        <div className="px-16">
          <div className="flex justify-center w-[100%] items-center p-8 ">
            <img src={image} className="w-48 h-48 rounded-full" alt="" />
          </div>
        </div>
        <div className=" flex  w-[60%]  overflow-hidden py-12 px-16">
          <div>
            <h1 className="  text-2xl font-bold mb-2">{parking.name}</h1>
            <h1 className="  text-xl font-normal mb-8">
              {parking.loginId}
            </h1>
          </div>
        </div>
        <button
          onClick={handleEdit}
          className="text-2xl font-normal text-gray-600 mt--96  pl-16"
        >
          <MdEdit />
        </button>
      </div>
      <div className="px-32 py-8">
        {Object.entries(parking)
          .filter(([key]) => !excludedFields.includes(key)) // Exclude the specified fields
          .map(([key, value]) => (
            <div key={key} className="flex flex-row items-center px-32 justify-between">
               <p className="text-sm font-semibold p-2">
         {key}
            </p>
            <p className="text-sm">
         {value}
            </p>
            </div>
           
          ))}
      </div>
    </div>
  )}

<ToastContainer/>
</div>
  );
};

export default GaurdDetail;
