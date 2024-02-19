import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import image from "../../assets/parking5.webp";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const ParkingDetail = () => {
    const parking = {
        id: 1,
        name: "Rajiv Chowk Parking",
        area: "Connaught Place, Delhi",
        city: "Delhi",
        district: "Central Delhi",
        state: "Delhi",
        country: "India",
        pincode: "110001",
        dateOfCreation: "2023-01-15",
        price: "$12",
        openingTime: "08:00 AM",
        closingTime: "10:00 PM",
        latitude: 28.6315,
        longitude: 77.2167,
        landmark: "Near City Hall",
        capacity: 50,
        aboutParking: "Rajiv Chowk Parking is located in the heart of Delhi's commercial and business hub. It offers convenient parking facilities for visitors to Connaught Place, one of the most popular shopping and recreational destinations in the city."
    };

    const [isEditing, setIsEditing] = useState(false);
    const [editedParking, setEditedParking] = useState(parking);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        // Handle save action, for now, just log the editedParking
        console.log("Updated Parking Information:", editedParking);
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
        <div className="container mx-auto px-16 py-8">
            {isEditing ? (
                <div className="bg-[#ffffff] shadow-xl border border-gray-300 rounded-sm w-full duration-300 ease-in-out overflow-hidden p-12" style={{ height: "80vh" }}>
                <form>
                  <div className="mb-8 grid grid-cols-3 gap-6">
                    {Object.keys(parking).map((key, index) => {
                      if (key === "id") return null; // Skip rendering input field for id
                      return (
                        <div key={index} className="relative h-10 w-full">
                          <input
                            type="text"
                            name={key}
                            value={parking[key]}
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
                <div className="flex justify-between">
                    <div
                        className="flex overflow-hidden py-12"
                        style={{ height: "80vh" }}
                    >
                        <div>
                            <h1 className="text-2xl font-bold mb-2">{parking.name}</h1>
                            <h1 className="text-xl font-normal mb-8">{parking.area}</h1>

                            <p className="py-4 px-6 text-sm">
                                <span className="py-4 text-sm font-bold">Price:</span>{" "}
                                {parking.price}
                            </p>
                            <p className="py-4 px-6 text-sm">
                                <span className="py-4 text-sm font-bold">Area:</span>{" "}
                                {parking.area}
                            </p>

                            <p className="py-4 px-6 text-sm">
                                <span className="py-4 text-sm font-bold">City:</span>{" "}
                                {parking.city}
                            </p>

                            <p className="py-4 px-6 text-sm">
                                <span className="py-4 text-sm font-bold">District:</span>{" "}
                                {parking.district}
                            </p>

                            <p className="py-4 px-6 text-sm">
                                <span className="py-4 text-sm font-bold">State:</span>{" "}
                                {parking.state}
                            </p>

                            <p className="py-4 px-6 text-sm">
                                <span className="py-4 text-sm font-bold">Country:</span>{" "}
                                {parking.country}
                            </p>

                            <p className="py-4 px-6 text-sm">
                                <span className="py-4 text-sm font-bold">Pincode:</span>{" "}
                                {parking.pincode}
                            </p>
                            <p className="py-4 px-6 text-sm">
                                <span className="py-4 text-sm font-bold">Landmark:</span>{" "}
                                {parking.landmark}
                            </p>
                        </div>
                        {/* Display other details similarly */}
                        <div>
                            <button
                                onClick={handleEdit}
                                className="text-2xl font-normal text-gray-600 mt-2 px-16"
                            >
                                <MdEdit />
                            </button>
                            <button
                                onClick={handleEdit}
                                className="text-2xl font-normal text-gray-600 mt-2 px-16"
                            >
                                <MdOutlineAddPhotoAlternate />
                            </button>
                            <div className="m-14 p-1">
                            

                            <p className="py-4 px-6 text-sm">
                                <span className="py-4 text-sm font-bold">Registration date:</span>{" "}
                                {parking.dateOfCreation}
                            </p>

                            <p className="py-4 px-6 text-sm">
                                <span className="py-4 text-sm font-bold">Capacity:</span>{" "}
                                {parking.capacity}
                            </p>
                                <p className="py-4 px-6 text-sm">
                                    <span className="py-4 text-sm font-bold">Opening Time:</span>{" "}
                                    {parking.openingTime}
                                </p>

                                <p className="py-4 px-6 text-sm">
                                    <span className="py-4 text-sm font-bold">Closing Time:</span>{" "}
                                    {parking.closingTime}
                                </p>

                                <p className="py-4 px-6 text-sm">
                                    <span className="py-4 text-sm font-bold">Latitude:</span>{" "}
                                    {parking.latitude}
                                </p>

                                <p className="py-4 px-6 text-sm">
                                    <span className="py-4 text-sm font-bold">Longitude:</span>{" "}
                                    {parking.longitude}
                                </p>

                                {/* <p className="py-4 px-6 text-sm ">
                                <span className="py-4 text-sm font-bold">About Parking:</span>{" "}
                                {parking.aboutParking}
                            </p> */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center items-center p-4 ">
                            <button>
                                <h1 className="pr-2">
                                    <MdKeyboardArrowLeft />
                                </h1>
                            </button>

                            <img src={image} className="w-72 h-96" alt="" />
                            <button>
                                <h1 className="pl-2">
                                    <MdKeyboardArrowRight />
                                </h1>
                            </button>
                        </div>
                    </div>
                    
                </div>


            )}

        </div>

    );
};

export default ParkingDetail;
