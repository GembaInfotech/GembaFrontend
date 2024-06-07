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
        <div className="container mx-auto px-16 py-8">
          <div>
            <h1 className="font-bold text-xl mb-2 bg-gray-800 rounded-sm p-2 text-center text-white">
              Guard Detail
            </h1>
            <h1 className="font-semibold text-xl mb-2 rounded-sm p-1">
              Guard code: {guard.data.code}
            </h1>

            <div className="flex justify-between items-center bg-gray-100 h-auto p-4 rounded-lg shadow-md">
              <div className="px-4 py-4">
                <p className="py-2 text-sm">
                  <span className="font-bold">Name:</span> {guard.data.name}
                </p>
                <p className="py-2 text-sm">
                  <span className="font-bold">Phone:</span> {guard.data.contact}
                </p>
                <p className="py-2 text-sm">
                  <span className="font-bold">Email:</span> {guard.data.email}
                </p>
                <p className="py-2 text-sm">
                  <span className="font-bold">Address:</span> {guard.data.address}
                </p>
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
        <div className="fixed inset-0 flex items-center justify-end pr-16 bg-black bg-opacity-50 ">
          <div className="bg-white  rounded-lg shadow-lg w-full max-w-md">
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
