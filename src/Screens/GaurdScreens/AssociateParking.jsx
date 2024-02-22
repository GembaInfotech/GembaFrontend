import { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import image from "../../assets/parking2.jpg";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
// import Gaurd from "../Components/Gaurd";

const AssociateParking = () => {
  const { id } = useParams();


  const [parking, setparkings] = useState({});
  useEffect(() => {
    const fetchGuardDetails = () => {
      fetch(`http://localhost:7001/v1/api/parking/${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          setparkings(data.data)
          // console.log(data); // Log the fetched data
        })
        .catch(error => {
          console.error('Error fetching guard details:', error);
        });
    };

    fetchGuardDetails();
  }, []);

  const [accountDetails, setAccountDetails] = useState({
    manager: {
      name: "John Doe",
      accountNumber: "1234567890",
      branch: "Main Branch",
      IFSCCode: "ABCD0123456"
    },
    associateParking: {
      name: "ABC Parking Lot",
      location: "XYZ Street, City",
      capacity: 100,
      pricePerHour: "$5"
    },
    revenue: {
      totalRevenue: "$5000",
    },
    expenses: {
      guardSalary: "$1000",
      managerSalary: "$1500",
      parkingMaintenanceCost: "$500",
      otherCost: "$200"
    }
  });



  const [isEditing, setIsEditing] = useState(false);
  const [add, setaddgaurd] = useState(false);
  const addgaurd = () => {
    setaddgaurd(true)
  }
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
    <div className="container mx-auto px-16 pt-8">
      <div>
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
            <div className="flex overflow-hidden py-12" style={{ height: "96vh" }}>
  <div>
    <h1 className="text-2xl font-bold mb-2">{parking.parkingName}</h1>
    <h1 className="text-xl font-normal mb-8">{parking.parkingArea}</h1>

    {Object.entries(parking).map(([key, value]) => (
      key !== 'id' && key !== 'associateGuard' && (
        <p key={key} className="py-4 px-6 text-sm">
          <span className="py-4 text-sm font-bold">{key.charAt(0).toUpperCase() + key.slice(1)}:</span> {value}
        </p>
      )
    ))}
  </div>

  <div>
   
    <div className="m-14 p-1">
      {Object.entries(parking).map(([key, value]) => (
        key === 'dateOfCreation' && (
          <p key={key} className="py-4 px-6 text-sm">
            <span className="py-4 text-sm font-bold">{key.charAt(0).toUpperCase() + key.slice(1)}:</span> {value}
          </p>
        )
      ))}
      
     

    

     
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
  

    </div>

  );
};

export default AssociateParking;
