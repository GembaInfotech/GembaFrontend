import React, { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { useSelector, useDispatch } from "react-redux";
import { fetchGuardsAsync } from "../../../SliceFolder/GuardSlice/guard";
import UpdateGuard from "../../../Components/VendorComponents/GuardComponent/UpdateGuard";

const GuardDetail = () => {
  const dispatch = useDispatch();
  const guard = useSelector((state) => state.Guard);
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchGuardsAsync({ id }));
  }, [dispatch, id]);

  const handleEditClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {guard.status === "loading" && !guard.error && (
        <div className="flex justify-center items-center min-h-screen">
          <PulseLoader color="#000" />
        </div>
      )}
  
      {guard.status === "failed" && (
        <div>
          <h1 className="text-red-500 p-4">
            Some error occurred while loading the data... Kindly refresh or
            login again...
          </h1>
        </div>
      )}
  
      {guard.status === "succeeded" && guard.data && !guard.error && (
        <div className="container mx-auto px-8 md:px-16 py-8">
          <div>
            <h1 className="font-bold text-2xl mb-4 bg-gray-800 rounded-sm p-2 text-center text-white shadow-lg">
              Guard Detail
            </h1>
            <h2 className="font-semibold text-xl mb-4 rounded-sm p-2 bg-gray-100">
              Guard Code: {guard.data.code}
            </h2>
  
            <div className="flex flex-col md:flex-row justify-center items-start bg-gray-100 h-auto p-4 rounded-lg shadow-md">
              <div className="flex-grow py-8 px-20 ">
                <p className="py-2 ">
                  <span className="font-bold">Name:</span> {guard.data.name}
                </p>
                <p className="py-2 ">
                  <span className="font-bold">Phone:</span> {guard.data.contact}
                </p>
                <p className="py-2 ">
                  <span className="font-bold">Email:</span> {guard.data.email}
                </p>
                <p className="py-2 ">
                  <span className="font-bold">Address:</span> {guard.data.address}
                </p>
              </div>
              <div className=" mr-20 mb-4 md:mb-0">
                <img
                  src={`http://know2parking.com:3456/v1/api/guard/send-image/${guard.data.profileImage}`}
                  alt="Profile"
                  className="rounded-full h-64 w-64 object-cover shadow-lg "
                />
              </div>
              <button
                onClick={handleEditClick}
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                <MdEdit size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
  
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center pl-8 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
              onClick={closeModal}
            >
              &times;
            </button>
            <UpdateGuard closeModal={closeModal} guard={guard.data} />
          </div>
        </div>
      )}
    </div>
  );
  
};

export default GuardDetail;
