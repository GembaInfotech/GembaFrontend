import { useEffect } from 'react';
import { MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { vendorDataAsync } from '../../../SliceFolder/VendorSlice/Vendor';
import PulseLoader from "react-spinners/PulseLoader";

const Profile = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  const dispatch = useDispatch();
  const vendor = useSelector((state) => state.Vendor);
  console.log(vendor?.data);

  useEffect(() => {

    if (!token) window.location.href = "/login/auth/vendor";
    if (vendor.status == "idle") dispatch(vendorDataAsync());

  }, [dispatch]);

  return (
    <div className='bg-slate-200'>
      {vendor.status == "loading" && <div className='flex justify-center items-center min-h-screen'>       <PulseLoader color="#000" /> </div>}

      {vendor.status == "failed" && <div><h1 className='text-red-500 p-4'>Some error Occured While Loading the Data... Kindly Refresh or Login Again...</h1></div>}

      {vendor.status == "succeeded" && !vendor.error && vendor.data && <div className="container mx-auto  px-2 py-2">

        <h1 className="text-2xl font-bold mb-2 -mt-2 bg-gray-900 rounded-sm p-2 text-white text-center"> Profile</h1>
        <h1 className="font-bold text-xl mb-2  rounded-sm py-1 px-16 "> Vendor Code : {vendor?.data?.code}</h1>


        <div className='flex justify-between shadow-lg  h-[100%]  '>
          
          <div className='flex flex-wrap gap-4 m-4 px-10 '>
          <div className="bg-white text-gray-700 p-2 m-1 w-80 h-80 rounded-lg shadow-lg  flex flex-col justify-center items-center border border-gray-100">
              <div>
              <img src={`http://localhost:3456/v1/api/vendor/send-profile/${vendor?.data?.profileImage}`} alt="Vendor Profile" />
              </div>
            </div>

            <div className="bg-white text-gray-700 p-2 m-1 w-80 h-80 rounded-lg shadow-lg  flex flex-col justify-center items-center border border-gray-100">
              <div>
                <img src={`http://localhost:3456/v1/api/vendor/send-docs/aadhar/${vendor?.data?.adhaarImage}`}/>

              </div>
            </div>
            <div className="bg-white text-gray-700 p-2 m-1 w-80 h-80 rounded-lg shadow-lg  flex flex-col justify-center items-center border border-gray-100">
              <div>
                <img src = {vendor?.data?.gstImage}/>
              </div>
            </div>
            <div className="bg-white text-gray-700 p-2 m-1 w-80 h-80 rounded-lg shadow-lg  flex flex-col justify-center items-center border border-gray-100">
              <div>
                <img src = {vendor?.data?.panImage}/>
              </div>
            </div>
            <div className="bg-white text-gray-700 p-2 m-1 w-80 h-80 rounded-lg shadow-lg  flex flex-col justify-center items-center border border-gray-100">
              <div>
                <img src = {vendor?.data?.adhaarImage}/>
              </div>
            </div>
            
            <div className="bg-white text-gray-700 p-2 m-1 w-80 h-80 rounded-lg shadow-lg  flex flex-col justify-center items-center border border-gray-100">
              <div>
                <p className='py-2 text-lg font-bold'>Basic Information :</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Title:</span> M/S</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Name:</span> {vendor?.data?.firstName} {vendor?.data?.lastName}</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Company Reg. No.:</span> {vendor?.data?.companyRegNo}</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Contact:</span> {vendor?.data?.contact}</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Email Id:</span> {vendor?.data?.email}</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">PAN No.: *</span> {vendor?.data?.panNo}</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">GST No.:</span>{vendor?.data?.gstNo}</p>
              </div>
            </div>

            <div className="bg-white text-gray-700 p-2 m-1 w-80 h-78 rounded-lg shadow-md flex flex-col justify-center items-center border border-gray-100">
              <div>
                <p className='py-2 text-lg font-bold'>Billing Address:</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Address:</span> {vendor?.data?.billingAddress?.address}</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Postal Code:</span> {vendor?.data?.billingAddress?.postalCode}</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">City:</span> {vendor?.data?.billingAddress?.city} </p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">State:</span> {vendor?.data?.billingAddress?.state}</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Contact:</span> {vendor?.data?.billingAddress?.contact}</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Email:</span> {vendor?.data?.billingAddress?.email}</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Country:</span> {vendor?.data?.billingAddress?.country}</p>
              </div>
            </div>

            <div className="bg-white text-gray-700 p-2 m-1 w-80 h-78 flex rounded-lg  shadow-md flex-col justify-center items-center border border-gray-100">
              <div>
                <p className='py-2 text-lg font-bold'>Communication Address:</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Address:</span> {vendor?.data?.communicationAddress?.address} </p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Postal Code:</span> {vendor?.data?.communicationAddress?.postalCode} </p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">City:</span> {vendor?.data?.communicationAddress?.city} </p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">State:</span> {vendor?.data?.communicationAddress?.state} </p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Contact:</span> {vendor?.data?.communicationAddress?.contact} </p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Email:</span> {vendor?.data?.communicationAddress?.email}</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Country:</span> {vendor?.data?.communicationAddress?.country}</p>
              </div>
            </div>

            <div className="bg-white text-gray-700 p-2 m-1 w-80 h-78 rounded-lg shadow-md flex flex-col justify-center items-center border border-gray-100">
              <div>
                <p className='py-2 text-lg font-bold'>Account Details:</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Account Name:</span> {vendor?.data?.account?.accountHolder}</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Account Number:</span> {vendor?.data?.account?.accountNumber}</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Bank Name:</span> {vendor?.data?.account?.bankName}</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Branch Name:</span> {vendor?.data?.account?.branchName}</p>
                {/* <p className='py-1 text-sm'><span className="text-sm font-bold">Branch Address:</span> {vendor?.data?.account?.ifscCode}</p> */}
                <p className='py-1 text-sm'><span className="text-sm font-bold">IFSC Code:</span> {vendor?.data?.account?.ifscCode}</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Branch Email:</span> {vendor?.data?.account?.BranchEmail}</p>
              </div>
            </div>

          </div>

          {/* <Link to="/update/vendor"> <h1 className=' font-normal p-4  text-gray-600 text-xl'><MdEdit /></h1></Link> */}
        </div>
      </div>}
    </div>
  );
};

export default Profile;
