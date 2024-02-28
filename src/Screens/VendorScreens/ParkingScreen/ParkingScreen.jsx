import { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import image from "../../../assets/parking5.webp";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Gaurd from "../../../Components/VendorComponents/GuardComponent/Gaurd";
import { IoEye } from "react-icons/io5";

const ParkingDetail = () => {
  const { id } = useParams();

  // Define editedParking state
  const [editedParking, setEditedParking] = useState({});
  const [parking, setparkings] = useState({});

  useEffect(() => {
    const fetchGuardDetails = () => {
      fetch(`http://localhost:7001/v1/api/parking/${id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setparkings(data.data);
          setEditedParking(data.data); // Initialize editedParking with current data
        })
        .catch((error) => {
          console.error("Error fetching guard details:", error);
        });
    };

    fetchGuardDetails();
  }, [id]);

  const [isEditing, setIsEditing] = useState(false);
  const [add, setAddGuard] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Handle save action by updating the state with editedParking
    setparkings(editedParking);
    setIsEditing(false);

    // Reload the page after saving
    window.location.reload();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedParking((prevParking) => ({
      ...prevParking,
      [name]: value,
    }));
  };

  const addGuard = () => {
    setAddGuard(true);
  };

  const closeAddGuard = () => {
    setAddGuard(false);
  };

  return (
    <div className="container mx-auto px-16 pt-8">
      <div>
        {isEditing ? (
          <div
            className="bg-[#ffffff] shadow-xl border border-gray-300 rounded-sm w-full duration-300 ease-in-out overflow-hidden p-12"
            style={{ height: "80vh" }}
          >
            <form>
              <div className="mb-8 grid grid-cols-3 gap-6">
                {Object.keys(parking).map((key, index) => {
                  if (key === "id" || key === "location") return null; // Skip rendering input field for id

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
          <div className="flex justify-between">
            <div className="flex overflow-hidden w-[70%] py-12" style={{ height: "70vh" }}>
              <div>
                <h1 className="text-2xl font-bold mb-2">{parking.parkingName}</h1>
                <h1 className="text-xl font-normal mb-8">{parking.parkingArea}</h1>

                <div className="flex flex-wrap bg-gray-50 p-4 rounded-md">
                  {Object.entries(parking).map(
                    ([key, value]) =>
                      key !== "_id" &&
                      key !== "associateGuard" &&
                      key !== "location" &&
                      key !== "latitude" &&
                      key !== "longitude" &&
                      key !== "image" &&
                      key !== "__v" && (
                        <div
                          key={key}
                          className=" sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 px-4 mb-4"
                        >
                          <p className="text-sm font-light">
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </p>
                          <p className="text-md font-medium py-1">{key === "openingTime" || key === "closingTime" ? new Date(value).toLocaleTimeString() : value}</p>
                       
                        </div>
                      )
                  )}
                </div>
              </div>

              <div>
                <button onClick={handleEdit} className="text-2xl font-normal text-gray-600 mt-2 px-16">
                  <MdEdit />
                </button>
                <button onClick={handleEdit} className="text-2xl font-normal text-gray-600 mt-2 px-16">
                  <MdOutlineAddPhotoAlternate />
                </button>
                <div className="m-14 p-1"></div>
              </div>
            </div>

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
        )}
      </div>

      <div className="bg-gray-40 p-2 my-6 w-full">
        <h1 className="text-2xl font-bold p-2"> Guard Details</h1>

        <div className="mx-2">
          {parking.associateGuard && parking.associateGuard.name ? (
            <p className="py-1 px-6 text-sm">
              {/* <span className="py-4  font-bold text-md">Guard: </span> */}
              <Link to={`/gaurd/${parking.associateGuard?._id}`}>
                <div key={parking.id} className=" shadow-md bg-[#deecff] cursor-pointer rounded-md hover:scale-105 duration-100 ease-in-out overflow-hidden"
       >
         <div className='bg-white py-1'>

         </div>
   
           <div className="py-3 px-2 bg-gray-100 ">
            
             <p className="text-gray-600 text-sm mb-1"><span className="font-bold">Name:</span> {parking.associateGuard.name}</p>
             <p className="text-gray-600 text-sm mb-1"><span className="font-bold">Contact No.:</span> {parking.associateGuard.contactNumber}</p>
             <p className="text-gray-600 text-sm mb-1"><span className="font-bold">Email:</span> {parking.associateGuard.email}</p>
           </div>
       </div>
              </Link>
            </p>
          ) : (
            <div className="m-4">
              <button
                onClick={add ? closeAddGuard : addGuard}
                className=" p-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                {add ? "Close" : "+ Add Guard"}
              </button>
              {add && <Gaurd id={parking._id} fnc={closeAddGuard} />}{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParkingDetail;
