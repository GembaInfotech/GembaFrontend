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
  console.log(vendor);

  useEffect(() => {

    if (!token) window.location.href = "/login/auth/vendor";
    if (vendor.status == "idle") dispatch(vendorDataAsync());

  }, [dispatch]);

  return (
    <div className='bg-slate-100'>
      {vendor.status == "loading" && <div className='flex justify-center items-center min-h-screen'>       <PulseLoader color="#000" /> </div>}

      {vendor.status == "failed" && <div><h1 className='text-red-500 p-4'>Some error Occured While Loading the Data... Kindly Refresh or Login Again...</h1></div>}

      {vendor.status == "succeeded" && !vendor.error && vendor.data && <div className="container mx-auto  px-2 py-2">

        <h1 className="text-2xl font-bold mb-2 bg-gray-900 rounded-sm p-2 text-white text-center"> Profile</h1>
        <h1 className="font-bold text-xl mb-2 rounded-sm py-1 px-16 bg-slate-100"> Vendor Code : {vendor?.data?.code}</h1>


        <div className='flex justify-between shadow-lg  h-[100%]  '>
          
          <div className='flex flex-wrap gap-4 m-4 px-10 '>
            
            <div className="bg-white text-gray-700 p-2 m-1 w-80 h-80 rounded-lg shadow-lg  flex flex-col justify-center items-center border border-gray-100">
              <div>
                <p className='py-2 text-lg font-bold'>Basic Information :</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Title:</span> M/S</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Name:</span> {vendor?.data?.firstName} {vendor?.data?.lastName}</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Company Reg. No.:</span> 9345435</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Contact:</span> {vendor?.data?.contact}</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Email Id:</span> {vendor?.data?.email}</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">PAN No.: *</span> DRXPG0107F</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">GST No.:</span> 04DRXPG01078328</p>
              </div>
            </div>

            <div className="bg-white text-gray-700 p-2 m-1 w-80 h-78 rounded-lg shadow-md flex flex-col justify-center items-center border border-gray-100">
              <div>
                <p className='py-2 text-lg font-bold'>Billing Address:</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Address:</span> {vendor?.data?.address}</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Postal Code:</span> 439002</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">City:</span> Agra</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">State:</span> Uttar Pradesh</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Contact:</span> 8203082932</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Email:</span> yahoo@example.com</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Country:</span> India</p>
              </div>
            </div>

            <div className="bg-white text-gray-700 p-2 m-1 w-80 h-78 flex rounded-lg  shadow-md flex-col justify-center items-center border border-gray-100">
              <div>
                <p className='py-2 text-lg font-bold'>Communication Address:</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Address:</span> {vendor?.data?.address}</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Postal Code:</span> 439002</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">City:</span> Agra</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">State:</span> Uttar Pradesh</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Contact:</span> 8203082932</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Email:</span> yahoo@eeexample.com</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Country:</span> India</p>
              </div>
            </div>

            <div className="bg-white text-gray-700 p-2 m-1 w-80 h-78 rounded-lg shadow-md flex flex-col justify-center items-center border border-gray-100">
              <div>
                <p className='py-2 text-lg font-bold'>Account Details:</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Account Name:</span> {vendor?.data?.firstName}</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Account Number:</span> 12345678901234</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Bank Name:</span> Punjab National Bank</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Branch Name:</span> Connaught Place</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Branch Address:</span> Uttar Pradesh</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">IFSC Code:</span> PUNB0123456</p>
                <p className='py-1 text-sm'><span className="text-sm font-bold">Branch Email:</span> pnb@example.com</p>
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
